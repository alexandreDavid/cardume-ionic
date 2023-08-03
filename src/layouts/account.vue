<template>
  <ion-page id="main-content" v-bind="$attrs">
    <ion-header>
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-back-button default-href="/"></ion-back-button>
        </ion-buttons>
        <ion-title>{{ groupName }}</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-router-outlet></ion-router-outlet>
  </ion-page>
</template>

<script setup lang="ts">
  import {
    IonPage,
    IonRouterOutlet,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonButtons,
    IonBackButton,
  } from '@ionic/vue'

  const groupName = 'ureh'
</script>
