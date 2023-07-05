<template>
  <ion-header>
    <ion-toolbar>
      <ion-title>{{ title }}</ion-title>
      <ion-buttons slot="secondary">
        <ion-menu-button />
        <!-- <ion-button>
          <ion-avatar>
            <img
              alt="Silhouette of a person's head"
              src="https://ionicframework.com/docs/img/demos/avatar.svg"
            />
          </ion-avatar>
        </ion-button> -->
      </ion-buttons>
    </ion-toolbar>
  </ion-header>
</template>

<script setup lang="ts">
  import { IonHeader, IonToolbar, IonTitle, IonButtons, IonMenuButton } from '@ionic/vue'

  defineProps<{
    title: string
  }>()
</script>
