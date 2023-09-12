<template>
  <ion-page>
    <MainHeader title="My account" />
    <ion-content :fullscreen="true" class="ion-padding">
      <ion-button id="present-alert" color="danger">Delete my account</ion-button>
      <ion-alert
        trigger="present-alert"
        header="Confirm delete"
        :buttons="alertButtons"
      ></ion-alert>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
  import { getAuth, deleteUser } from 'firebase/auth'

  import { IonPage, IonContent, IonButton, IonAlert } from '@ionic/vue'
  import MainHeader from '@/components/MainHeader.vue'

  const auth = getAuth()
  const user = auth.currentUser

  const alertButtons = [
    {
      text: 'Cancel',
      role: 'cancel',
    },
    {
      text: 'Delete',
      role: 'destructive',
      handler: async () => {
        try {
          user && (await deleteUser(user))
        } catch (e) {
          console.error(e)
        }
        window.location.assign('/')
      },
    },
  ]
</script>
