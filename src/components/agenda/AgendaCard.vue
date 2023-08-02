<template>
  <ion-card>
    <ion-card-header>
      <ion-card-title>Football</ion-card-title>
      <ion-card-subtitle>05/08/2023</ion-card-subtitle>
    </ion-card-header>

    <ion-card-content>
      Here's a small text description for the card content. Nothing more, nothing less.
    </ion-card-content>

    <ion-button fill="clear" :href="`/events/1`">See the event</ion-button>
    <ion-button fill="clear">See the group</ion-button>
  </ion-card>
</template>

<script setup lang="ts">
  import {
    IonCard,
    IonCardHeader,
    IonCardTitle,
    IonCardSubtitle,
    IonCardContent,
    IonButton,
  } from '@ionic/vue'
</script>
