<template>
  <ion-page id="main-content" v-bind="$attrs">
    <ion-header>
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-button href="/">
            <ion-icon slot="start" aria-hidden="true" :icon="arrowBack"></ion-icon>
            Back
          </ion-button>
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
    IonButton,
    IonIcon,
  } from '@ionic/vue'

  import { arrowBack } from 'ionicons/icons'

  const groupName = 'ureh'
</script>
