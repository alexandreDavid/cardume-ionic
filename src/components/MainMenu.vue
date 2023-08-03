<template>
  <ion-menu content-id="main-content">
    <ion-header>
      <ion-toolbar>
        <ion-title>Menu Content</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content class="ion-padding">
      <ion-list>
        <ion-item button @click="$router.push('account/me')">
          <ion-label>My account</ion-label>
        </ion-item>
      </ion-list>
    </ion-content>
  </ion-menu>
</template>

<script setup lang="ts">
  import {
    IonHeader,
    IonToolbar,
    IonTitle,
    IonMenu,
    IonContent,
    IonList,
    IonItem,
    IonLabel,
  } from '@ionic/vue'
</script>
