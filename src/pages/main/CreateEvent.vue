<template>
  <ion-page>
    <MainHeader title="New event" />
    <ion-content fullscreen>
      <ExploreContainer name="New event" />
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
  import { IonPage, IonContent } from '@ionic/vue'
  import ExploreContainer from '@/components/ExploreContainer.vue'
  import MainHeader from '@/components/MainHeader.vue'
</script>
