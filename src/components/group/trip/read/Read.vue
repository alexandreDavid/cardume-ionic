<template>
  <ion-page>
    <GroupHeader :group="group" />
    <ion-content :fullscreen="true" class="ion-padding">
      <Events v-if="curTab === 'events'" :group="group" />
      <Info v-else-if="curTab === 'info'" :group="group" />
      <Chat v-else-if="curTab === 'chat'" :group="group" />
    </ion-content>
    <ion-tab-bar slot="bottom">
      <ion-tab-button tab="tab1" @click="curTab = 'events'">
        <ion-icon aria-hidden="true" :icon="triangle" />
        <ion-label>Events</ion-label>
      </ion-tab-button>

      <ion-tab-button tab="tab2" @click="curTab = 'info'">
        <ion-icon aria-hidden="true" :icon="ellipse" />
        <ion-label>Info</ion-label>
      </ion-tab-button>

      <ion-tab-button tab="tab3" @click="curTab = 'chat'">
        <ion-icon aria-hidden="true" :icon="square" />
        <ion-label>Chat</ion-label>
      </ion-tab-button>
    </ion-tab-bar>
  </ion-page>
</template>

<script setup lang="ts">
  import { ref } from 'vue'

  import GroupHeader from '@/components/GroupHeader.vue'
  import Events from './Events.vue'
  import Info from './Info.vue'
  import Chat from './Chat.vue'
  import { IonTabBar, IonTabButton, IonLabel, IonIcon, IonPage, IonContent } from '@ionic/vue'

  import { ellipse, square, triangle } from 'ionicons/icons'

  import type Group from '@/type/group'

  defineProps<{
    group: Group
  }>()

  const curTab = ref<string>('events')
</script>
