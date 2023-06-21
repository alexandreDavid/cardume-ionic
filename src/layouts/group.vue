<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-button href="/">
            <ion-icon slot="start" aria-hidden="true" :icon="arrowBack"></ion-icon>
            Back
          </ion-button>
        </ion-buttons>
        <ion-title>Group name</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-tabs>
      <ion-router-outlet></ion-router-outlet>
      <ion-tab-bar slot="bottom">
        <ion-tab-button tab="tab1" href="/groups/1/next-event">
          <ion-icon aria-hidden="true" :icon="triangle" />
          <ion-label>NextEvent</ion-label>
        </ion-tab-button>

        <ion-tab-button tab="tab2" href="/groups/1/events">
          <ion-icon aria-hidden="true" :icon="ellipse" />
          <ion-label>Events</ion-label>
        </ion-tab-button>

        <ion-tab-button tab="tab3" href="/groups/1/members">
          <ion-icon aria-hidden="true" :icon="square" />
          <ion-label>Members</ion-label>
        </ion-tab-button>

        <ion-tab-button tab="chat" href="/groups/1/chat">
          <ion-icon aria-hidden="true" :icon="chatbubbles" />
          <ion-label>Chat</ion-label>
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
    IonHeader,
    IonToolbar,
    IonTitle,
    IonButtons,
    IonButton,
  } from '@ionic/vue'
  import { ellipse, square, triangle, chatbubbles, arrowBack } from 'ionicons/icons'
</script>
