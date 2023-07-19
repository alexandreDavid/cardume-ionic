<template>
  <ion-page>
    <MainHeader title="Agenda" />
    <ion-content fullscreen>
      <ion-list>
        <ion-item v-for="(item, index) in items" :key="index">
          <AgendaCard />
        </ion-item>
      </ion-list>
      <ion-infinite-scroll @ion-infinite="ionInfinite">
        <ion-infinite-scroll-content
          loading-text="Please wait..."
          loading-spinner="bubbles"
        ></ion-infinite-scroll-content>
      </ion-infinite-scroll>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
  import { reactive } from 'vue'
  import {
    IonPage,
    IonContent,
    IonInfiniteScroll,
    IonInfiniteScrollContent,
    IonList,
    IonItem,
    IonAvatar,
    IonLabel,
    InfiniteScrollCustomEvent,
  } from '@ionic/vue'
  import MainHeader from '@/components/MainHeader.vue'
  import AgendaCard from '@/components/agenda/AgendaCard.vue'

  const items = reactive<string[]>([])

  const generateItems = () => {
    const count = items.length + 1
    for (let i = 0; i < 50; i++) {
      items.push(`Item ${count + i}`)
    }
  }

  const ionInfinite = (ev: InfiniteScrollCustomEvent) => {
    generateItems()
    setTimeout(() => ev.target.complete(), 500)
  }

  generateItems()
</script>
