<template>
  <ion-header>
    <ion-toolbar>
      <ion-buttons slot="start">
        <ion-button href="/">
          <ion-icon slot="start" aria-hidden="true" :icon="arrowBack"></ion-icon>
          Back
        </ion-button>
      </ion-buttons>
      <ion-title>{{ name }}</ion-title>
    </ion-toolbar>
  </ion-header>
</template>

<script setup lang="ts">
  import { IonIcon, IonHeader, IonToolbar, IonTitle, IonButtons, IonButton } from '@ionic/vue'

  import { arrowBack } from 'ionicons/icons'

  defineProps<{
    name: string
  }>()
</script>
