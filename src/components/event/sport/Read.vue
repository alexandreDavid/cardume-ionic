<template>
  <ion-page>
    <EventHeader :event="event" />
    <ion-content :fullscreen="true" class="ion-padding">
      <Info v-if="curTab === 'info'" :event="event" />
      <Participation v-else-if="curTab === 'participation'" :event="event" />
      <Result v-else-if="curTab === 'result'" :event="event" />
    </ion-content>
    <ion-tab-bar slot="bottom">
      <ion-tab-button tab="tab1" @click="curTab = 'info'">
        <ion-icon aria-hidden="true" :icon="triangle" />
        <ion-label>Info</ion-label>
      </ion-tab-button>

      <ion-tab-button tab="tab2" @click="curTab = 'participation'">
        <ion-icon aria-hidden="true" :icon="ellipse" />
        <ion-label>Participation</ion-label>
      </ion-tab-button>

      <ion-tab-button tab="tab3" @click="curTab = 'result'">
        <ion-icon aria-hidden="true" :icon="square" />
        <ion-label>Result</ion-label>
      </ion-tab-button>
    </ion-tab-bar>
  </ion-page>
</template>

<script setup lang="ts">
  import { ref } from 'vue'

  import { IonTabBar, IonTabButton, IonLabel, IonIcon, IonPage, IonContent } from '@ionic/vue'
  import EventHeader from '@/components/EventHeader.vue'
  import Info from './Info.vue'
  import Participation from './Participation.vue'
  import Result from './Result.vue'

  import { ellipse, square, triangle } from 'ionicons/icons'

  import type Event from '@/types/Event'

  defineProps<{
    event: Event
  }>()

  const curTab = ref<string>('info')
</script>
