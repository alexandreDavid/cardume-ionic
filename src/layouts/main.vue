<template>
  <ion-menu content-id="main-content" side="end">
    <ion-header>
      <ion-toolbar>
        <ion-title>Menu Content</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content class="ion-padding">This is the menu content.</ion-content>
  </ion-menu>
  <ion-page id="main-content" v-bind="$attrs">
    <ion-tabs>
      <ion-router-outlet></ion-router-outlet>
      <ion-tab-bar slot="bottom">
        <ion-tab-button tab="home" href="/home">
          <ion-icon aria-hidden="true" :icon="home" />
          <ion-label>Home</ion-label>
        </ion-tab-button>

        <ion-tab-button @click="showCreationModal = !showCreationModal">
          <ion-icon aria-hidden="true" :icon="add" />
          <ion-label>New group</ion-label>
        </ion-tab-button>

        <ion-tab-button tab="my-groups" href="/my-groups">
          <ion-icon aria-hidden="true" :icon="list" />
          <ion-label>My groups</ion-label>
        </ion-tab-button>

        <ion-tab-button tab="messages" href="/messages">
          <ion-icon aria-hidden="true" :icon="mail" />
          <ion-label>Messages</ion-label>
        </ion-tab-button>
      </ion-tab-bar>
    </ion-tabs>
    <NewGroupModal v-model="showCreationModal" />
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
    IonMenu,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
  } from '@ionic/vue'
  import { add, home, list, mail } from 'ionicons/icons'
  import { ref } from 'vue'
  import NewGroupModal from '@/components/NewGroupModal.vue'

  const showCreationModal = ref<boolean>(false)
</script>
