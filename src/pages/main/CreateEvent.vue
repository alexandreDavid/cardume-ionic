<template>
  <ion-page>
    <MainHeader title="New event" />
    <ion-content fullscreen>
      <ion-list>
        <ion-item>
          <ion-input
            v-model="name"
            type="text"
            label="Event name"
            placeholder="The event name"
          ></ion-input>
        </ion-item>
        <ion-item>
          <ion-label>Date</ion-label>
          <ion-datetime-button v-model="date" datetime="datetime"></ion-datetime-button>
          <ion-modal :keep-contents-mounted="true">
            <ion-datetime id="datetime" v-model="date"></ion-datetime>
          </ion-modal>
        </ion-item>
        <ion-item>
          <ion-textarea
            v-model="description"
            type="text"
            label="Enter the description"
            placeholder="The event description"
          ></ion-textarea>
        </ion-item>
      </ion-list>
    </ion-content>
    <ion-fab slot="fixed" vertical="bottom" horizontal="end">
      <ion-fab-button @click="confirm">
        <ion-icon :icon="save"></ion-icon>
      </ion-fab-button>
    </ion-fab>
  </ion-page>
</template>

<script setup lang="ts">
  import { ref } from 'vue'
  import { useRouter } from 'vue-router'
  import { addDoc } from 'firebase/firestore'
  import { eventsRef } from '@/plugins/firebase'
  import {
    IonPage,
    IonContent,
    IonDatetime,
    IonDatetimeButton,
    IonModal,
    IonInput,
    IonTextarea,
    IonItem,
    IonList,
    IonFab,
    IonFabButton,
    IonIcon,
    IonLabel,
  } from '@ionic/vue'

  import MainHeader from '@/components/MainHeader.vue'

  import { save } from 'ionicons/icons'

  const router = useRouter()

  const name = ref<string>('')
  const date = ref<string>(new Date().toISOString())
  const description = ref<string>('')

  const confirm = async () => {
    await addDoc(eventsRef, {
      name: name.value,
      date: date.value,
      description: description.value,
    })
    router.push(`/agenda`)
  }
</script>