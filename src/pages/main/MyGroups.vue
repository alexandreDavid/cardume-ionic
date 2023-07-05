<template>
  <ion-page>
    <MainHeader title="My groups" />
    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">My groups</ion-title>
        </ion-toolbar>
      </ion-header>
      <ion-content>
        <suspense>
          <MyGroupsList />
          <template #fallback> Loading... </template>
        </suspense>
      </ion-content>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
  import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/vue'
  import MyGroupsList from '@/components/MyGroupsList.vue'
  import MainHeader from '@/components/MainHeader.vue'
</script>
