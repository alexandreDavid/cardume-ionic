<template>
  <ion-header>
    <ion-toolbar>
      <ion-buttons slot="start">
        <ion-back-button default-href="/"></ion-back-button>
      </ion-buttons>
      <ion-buttons slot="end">
        <ion-button id="open-action-sheet-event"><ion-icon :icon="pencil" /></ion-button>
      </ion-buttons>
      <ion-title>{{ event.name }}</ion-title>
    </ion-toolbar>
    <ion-action-sheet
      trigger="open-action-sheet-event"
      header="Actions"
      :buttons="actionSheetButtons"
      @did-dismiss="setResult"
    ></ion-action-sheet>
  </ion-header>
</template>

<script setup lang="ts">
  import { doc, deleteDoc } from 'firebase/firestore'
  import { db } from '@/plugins/firebase'
  import { useRouter } from 'vue-router'
  import {
    IonHeader,
    IonToolbar,
    IonTitle,
    IonButton,
    IonButtons,
    IonBackButton,
    IonIcon,
    IonActionSheet,
  } from '@ionic/vue'

  import { pencil } from 'ionicons/icons'

  import Event from '@/types/Event'

  const router = useRouter()

  const props = defineProps<{
    event: Event
  }>()

  const actionSheetButtons = [
    {
      text: 'Delete',
      role: 'destructive',
      data: {
        action: 'delete',
      },
    },
    {
      text: 'Edit',
      data: {
        action: 'edit',
      },
    },
    {
      text: 'Cancel',
      role: 'cancel',
      data: {
        action: 'cancel',
      },
    },
  ]

  const setResult = async (ev: CustomEvent) => {
    const detail = ev.detail
    if (!detail.data) {
      return
    }
    const docRef = doc(db, 'events', props.event.id)

    if (detail.data.action === 'delete') {
      await deleteDoc(docRef)
      router.back()
    }
  }
</script>
