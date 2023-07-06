<template>
  <MainMenu />
  <ion-page id="main-content" v-bind="$attrs">
    <ion-router-outlet></ion-router-outlet>
  </ion-page>
</template>

<script setup lang="ts">
  import { IonPage, IonRouterOutlet } from '@ionic/vue'
  import MainMenu from '@/components/MainMenu.vue'
</script>
