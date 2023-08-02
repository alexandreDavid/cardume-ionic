<template>
  <ion-page>
    <EventHeader name="Event" />
    <ion-content :fullscreen="true"> Coming soon Participation </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
  import { IonPage, IonContent } from '@ionic/vue'
  import EventHeader from '@/components/EventHeader.vue'
</script>
