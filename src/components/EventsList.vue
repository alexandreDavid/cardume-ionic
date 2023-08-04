<template>
  <ion-list>
    <ion-item v-for="(event, key) in events" :key="key">
      <AgendaCard :event="event" />
    </ion-item>
  </ion-list>
  <ion-infinite-scroll @ion-infinite="ionInfinite">
    <ion-infinite-scroll-content
      loading-text="Please wait..."
      loading-spinner="bubbles"
    ></ion-infinite-scroll-content>
  </ion-infinite-scroll>
</template>

<script setup lang="ts">
  import { onUnmounted, reactive, ref } from 'vue'
  import { onSnapshot, getDocs, query, orderBy, limit, DocumentData } from 'firebase/firestore'
  import { eventsRef } from '@/plugins/firebase'
  import {
    IonInfiniteScroll,
    IonInfiniteScrollContent,
    IonList,
    IonItem,
    InfiniteScrollCustomEvent,
  } from '@ionic/vue'

  import AgendaCard from '@/components/agenda/AgendaCard.vue'

  import Event from '@/types/Event.d'

  const limitRows = 10

  const docs = ref<DocumentData[]>([])
  docs.value = (await getDocs(query(eventsRef, orderBy('date'), limit(limitRows)))).docs

  const events = reactive<Event[]>([])
  const unsubscribe = onSnapshot(query(eventsRef), (snapshot) => {
    snapshot.docChanges().forEach((change) => {
      const doc = change.doc
      if (change.type === 'added') {
        const data = doc.data()
        events.push({
          id: doc.id,
          name: data.name,
          date: data.date,
          description: data.description,
        })
      } else {
        const idx = events.findIndex((evt) => evt.id === doc.id)
        if (change.type === 'modified') {
          const data = doc.data()
          events[idx] = {
            id: doc.id,
            name: data.name,
            date: data.date,
            description: data.description,
          }
        }
        if (change.type === 'removed') {
          events.splice(idx, 1)
        }
      }
    })
  })

  const generateItems = async () => {
    console.log('generating items')
  }

  const ionInfinite = (ev: InfiniteScrollCustomEvent) => {
    generateItems()
    setTimeout(() => ev.target.complete(), 500)
  }

  onUnmounted(() => unsubscribe())
</script>
