<template>
  <ion-page>
    <MainHeader title="Messages" />
    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Messages</ion-title>
        </ion-toolbar>
      </ion-header>

      <ExploreContainer name="Messages" />
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
  import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/vue'
  import ExploreContainer from '@/components/ExploreContainer.vue'
  import MainHeader from '@/components/MainHeader.vue'
</script>
