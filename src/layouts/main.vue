<template>
  <MainMenu />
  <ion-page id="main-content" v-bind="$attrs">
    <ion-tabs>
      <ion-router-outlet></ion-router-outlet>
      <ion-tab-bar slot="bottom">
        <ion-tab-button tab="home" @click="$router.push('/agenda')">
          <ion-icon aria-hidden="true" :icon="calendar" />
          <ion-label>Agenda</ion-label>
        </ion-tab-button>

        <ion-tab-button tab="discover" @click="$router.push('/discover')">
          <ion-icon aria-hidden="true" :icon="search" />
          <ion-label>Discover</ion-label>
        </ion-tab-button>

        <ion-tab-button tab="my-groups" @click="$router.push('/my-groups')">
          <ion-icon aria-hidden="true" :icon="list" />
          <ion-label>My groups</ion-label>
        </ion-tab-button>

        <ion-tab-button tab="messages" @click="$router.push('/messages')">
          <ion-icon aria-hidden="true" :icon="mail" />
          <ion-label>Messages</ion-label>
        </ion-tab-button>
      </ion-tab-bar>
    </ion-tabs>
  </ion-page>
</template>

<script setup lang="ts">
  import {
    IonTabBar,
    IonTabButton,
    IonTabs,
    IonLabel,
    IonIcon,
    IonPage,
    IonRouterOutlet,
  } from '@ionic/vue'
  import { list, mail, search, calendar } from 'ionicons/icons'
  import MainMenu from '@/components/MainMenu.vue'
</script>
