<template>
  <ion-page>
    <ion-tabs>
      <ion-router-outlet></ion-router-outlet>
      <ion-tab-bar slot="bottom">
        <ion-tab-button tab="tab1" @click="$router.push(`/groups/${id}/next-event`)">
          <ion-icon aria-hidden="true" :icon="triangle" />
          <ion-label>NextEvent</ion-label>
        </ion-tab-button>

        <ion-tab-button tab="tab2" @click="$router.push(`/groups/${id}/events`)">
          <ion-icon aria-hidden="true" :icon="ellipse" />
          <ion-label>Events</ion-label>
        </ion-tab-button>

        <ion-tab-button tab="tab3" @click="$router.push(`/groups/${id}/members`)">
          <ion-icon aria-hidden="true" :icon="square" />
          <ion-label>Members</ion-label>
        </ion-tab-button>

        <ion-tab-button tab="chat" @click="$router.push(`/groups/${id}/chat`)">
          <ion-icon aria-hidden="true" :icon="chatbubbles" />
          <ion-label>Chat</ion-label>
        </ion-tab-button>
      </ion-tab-bar>
    </ion-tabs>
  </ion-page>
</template>

<script setup lang="ts">
  import { onMounted, ref } from 'vue'
  import { useRoute } from 'vue-router'
  import { doc, getDoc } from 'firebase/firestore'
  import { groupsRef } from '@/plugins/firebase'
  import {
    IonTabBar,
    IonTabButton,
    IonTabs,
    IonLabel,
    IonIcon,
    IonPage,
    IonRouterOutlet,
  } from '@ionic/vue'
  import { ellipse, square, triangle, chatbubbles } from 'ionicons/icons'

  const id = useRoute().params.id as string

  const groupName = ref<string>('')
  onMounted(async () => {
    const docSnap = await getDoc(doc(groupsRef, id))
    if (docSnap.exists()) {
      groupName.value = docSnap.data().name
    }
  })
</script>
