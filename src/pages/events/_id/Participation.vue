<template>
  <ion-page>
    <EventHeader :event="event" />
    <ion-content :fullscreen="true"> Coming soon Participation </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
  import { useRoute } from 'vue-router'
  import { IonPage, IonContent } from '@ionic/vue'
  import EventHeader from '@/components/EventHeader.vue'

  import Event from '@/types/Event'

  const route = useRoute()

  const event: Event = {
    id: String(route.params.id),
    name: 'Event name',
    description: 'Description',
    date: new Date(),
  }
</script>
