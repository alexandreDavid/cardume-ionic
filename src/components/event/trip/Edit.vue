<template>
  <ion-page>
    <EventHeader :event="event" />
    <ion-content :fullscreen="true" class="ion-padding">
      <ion-list>
        <ion-item>
          <ion-input
            v-model="name"
            type="text"
            label="Event name"
            placeholder="The event name"
            autocapitalize="on"
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
          <ion-select
            v-model="group"
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
            v-model="description"
            auto-grow
            type="text"
            label="Enter the description"
            placeholder="The event description"
            autocapitalize="on"
          ></ion-textarea>
        </ion-item>
        <ion-item>
          <ColorPicker v-model="color" label="Color" />
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
  import { doc, updateDoc } from 'firebase/firestore'
  import { eventsRef } from '@/plugins/firebase'
  import { useRouter } from 'vue-router'
  import { useGroups } from '@/composables/groups'

  import {
    IonPage,
    IonContent,
    IonLabel,
    IonTextarea,
    IonInput,
    IonList,
    IonItem,
    IonDatetime,
    IonDatetimeButton,
    IonModal,
    IonFab,
    IonFabButton,
    IonIcon,
    IonSelect,
    IonSelectOption,
    loadingController,
  } from '@ionic/vue'
  import EventHeader from '@/components/EventHeader.vue'
  import ColorPicker from '@/components/ColorPicker.vue'

  import { save } from 'ionicons/icons'

  import type Event from '@/types/Event'

  const router = useRouter()
  const { getGroups } = useGroups()

  const groups = getGroups()

  const props = defineProps<{
    event: Event
  }>()

  const name = ref<string>(props.event.name)
  const date = ref<string>(new Date(props.event.date).toISOString())
  const group = ref<string | undefined>(props.event.group)
  const description = ref<string>(props.event.description)
  const color = ref<string>(props.event.color)

  const confirm = async () => {
    const docRef = doc(eventsRef, props.event.id)
    const loading = await loadingController.create({
      duration: 3000,
    })
    loading.present()
    await updateDoc(docRef, {
      name: name.value,
      date: date.value,
      group: group.value,
      description: description.value,
      color: color.value,
    })
    loading.dismiss()
    router.back()
  }
</script>
