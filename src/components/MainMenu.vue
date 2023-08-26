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
        <ion-item button color="danger" @click="logout">
          <ion-label>Logout</ion-label>
        </ion-item>
      </ion-list>
    </ion-content>
  </ion-menu>
</template>

<script setup lang="ts">
  import { getAuth, signOut } from 'firebase/auth'

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

  const auth = getAuth()
  const logout = async () => {
    try {
      await signOut(auth)
    } catch (e) {
      console.error(e)
    }
    window.location.assign('/')
  }
</script>
