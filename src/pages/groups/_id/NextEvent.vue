<template>
  <ion-page>
    <GroupHeader name="Group name" />
    <ion-content :fullscreen="true"> Coming soon Next event </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
  import { IonPage, IonContent } from '@ionic/vue'
  import GroupHeader from '@/components/GroupHeader.vue'
</script>
