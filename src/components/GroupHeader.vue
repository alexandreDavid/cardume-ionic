<template>
  <ion-header>
    <ion-toolbar>
      <ion-buttons slot="start">
        <ion-back-button default-href="/"></ion-back-button>
      </ion-buttons>
      <ion-title>{{ group.name }}</ion-title>
    </ion-toolbar>
  </ion-header>
</template>

<script setup lang="ts">
  import { IonHeader, IonToolbar, IonTitle, IonButtons, IonBackButton } from '@ionic/vue'

  import type Group from '@/types/Group'

  defineProps<{
    group: Group
  }>()
</script>
