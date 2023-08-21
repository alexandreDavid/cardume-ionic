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
  import { useEvents } from '@/composables/events'

  import {
    IonInfiniteScroll,
    IonInfiniteScrollContent,
    IonList,
    IonItem,
    InfiniteScrollCustomEvent,
  } from '@ionic/vue'

  import AgendaCard from '@/components/agenda/AgendaCard.vue'

  const { getEvents } = useEvents()
  const events = getEvents()

  const generateItems = async () => {
    console.log('generating items')
  }

  const ionInfinite = (ev: InfiniteScrollCustomEvent) => {
    generateItems()
    setTimeout(() => ev.target.complete(), 500)
  }
</script>
