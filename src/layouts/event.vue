<template>
  <ion-page>
    <ion-tabs>
      <ion-router-outlet></ion-router-outlet>
      <ion-tab-bar slot="bottom">
        <ion-tab-button tab="tab1" :href="`/events/${id}/info`">
          <ion-icon aria-hidden="true" :icon="triangle" />
          <ion-label>Info</ion-label>
        </ion-tab-button>

        <ion-tab-button tab="tab2" :href="`/events/${id}/participation`">
          <ion-icon aria-hidden="true" :icon="ellipse" />
          <ion-label>Participation</ion-label>
        </ion-tab-button>

        <ion-tab-button tab="tab3" :href="`/events/${id}/result`">
          <ion-icon aria-hidden="true" :icon="square" />
          <ion-label>Result</ion-label>
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
  import { ellipse, square, triangle } from 'ionicons/icons'

  const id = useRoute().params.id as string

  const eventName = ref<string>('')
  onMounted(async () => {
    const docSnap = await getDoc(doc(groupsRef, id))
    if (docSnap.exists()) {
      eventName.value = docSnap.data().name
    }
  })
</script>
