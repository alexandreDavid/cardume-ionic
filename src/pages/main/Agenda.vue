<template>
  <ion-page>
    <MainHeader title="Agenda" />
    <ion-content fullscreen>
      <suspense>
        <EventsList />
        <template #fallback> Loading... </template>
      </suspense>
      <ion-fab slot="fixed" vertical="bottom" horizontal="end">
        <ion-fab-button @click="$router.push('/new-event')">
          <ion-icon :icon="add"></ion-icon>
        </ion-fab-button>
      </ion-fab>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
  import { IonPage, IonContent, IonFab, IonFabButton, IonIcon } from '@ionic/vue'

  import MainHeader from '@/components/MainHeader.vue'
  import EventsList from '@/components/EventsList.vue'

  import { add } from 'ionicons/icons'
</script>
