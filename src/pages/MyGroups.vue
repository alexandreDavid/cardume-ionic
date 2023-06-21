<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>My groups</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">My groups</ion-title>
        </ion-toolbar>
      </ion-header>

      <ion-button tab="tab3" href="/groups/1/members">
        <ion-label>Group 1</ion-label>
      </ion-button>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
  import {
    IonPage,
    IonHeader,
    IonToolbar,
    IonLabel,
    IonTitle,
    IonContent,
    IonButton,
  } from '@ionic/vue'
</script>
