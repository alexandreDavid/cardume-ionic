<template>
  <ion-page>
    <MainHeader title="New event" />
    <ion-content fullscreen>
      <ion-list>
        <ion-item>
          <ion-input
            v-model="form.name"
            type="text"
            label="Event name"
            placeholder="The event name"
            autocapitalize="on"
          ></ion-input>
        </ion-item>
        <ion-item>
          <ion-label>Date</ion-label>
          <ion-datetime-button v-model="form.date" datetime="datetime"></ion-datetime-button>
          <ion-modal :keep-contents-mounted="true">
            <ion-datetime id="datetime" v-model="form.date"></ion-datetime>
          </ion-modal>
        </ion-item>
        <ion-item>
          <ion-select
            v-model="form.group"
            label="Add an group to the event"
            placeholder="Select a group"
          >
            <ion-select-option v-for="(grp, key) in groups" :key="key" :value="grp.id">{{
              grp.name
            }}</ion-select-option>
          </ion-select>
        </ion-item>
        <ion-item>
          <ion-textarea
            v-model="form.description"
            type="text"
            label="Enter the description"
            placeholder="The event description"
            autocapitalize="on"
          ></ion-textarea>
        </ion-item>
        <ion-item>
          <ColorPicker v-model="form.color" label="Color" />
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
  import { reactive } from 'vue'
  import { useRouter } from 'vue-router'
  import { addDoc } from 'firebase/firestore'
  import { eventsRef } from '@/plugins/firebase'
  import { useGroups } from '@/composables/groups'
  import { useCurrentUser } from 'vuefire'

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
    IonSelect,
    IonSelectOption,
    loadingController,
  } from '@ionic/vue'
  import ColorPicker from '@/components/ColorPicker.vue'

  import MainHeader from '@/components/MainHeader.vue'

  import { save } from 'ionicons/icons'

  const router = useRouter()
  const { getGroups } = useGroups()

  const groups = getGroups()

  const user = useCurrentUser()

  const form = reactive<{
    name: string
    date: string
    group: string | undefined
    description: string
    color: string
  }>({
    name: '',
    date: new Date().toISOString(),
    group: undefined,
    description: '',
    color: '',
  })

  const confirm = async () => {
    const loading = await loadingController.create({
      duration: 3000,
    })
    loading.present()
    if (!form.group) {
      delete form.group
    }
    await addDoc(eventsRef, {
      ...form,
      members: [user.value?.uid],
      admins: [user.value?.uid],
    })
    loading.dismiss()
    form.name = ''
    form.date = new Date().toISOString()
    form.group = undefined
    form.description = ''
    form.color = ''
    router.push(`/agenda`)
  }
</script>
