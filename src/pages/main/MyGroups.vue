<template>
  <ion-page>
    <MainHeader title="My groups" />
    <ion-content :fullscreen="true">
      <suspense>
        <MyGroupsList />
        <template #fallback> Loading... </template>
      </suspense>
      <ion-fab slot="fixed" vertical="bottom" horizontal="end">
        <ion-fab-button @click="showCreationModal = !showCreationModal">
          <ion-icon :icon="add"></ion-icon>
        </ion-fab-button>
      </ion-fab>
    </ion-content>
    <NewGroupModal v-model="showCreationModal" />
  </ion-page>
</template>

<script setup lang="ts">
  import { ref } from 'vue'
  import { IonPage, IonContent, IonFab, IonFabButton, IonIcon } from '@ionic/vue'
  import MyGroupsList from '@/components/MyGroupsList.vue'
  import MainHeader from '@/components/MainHeader.vue'
  import NewGroupModal from '@/components/NewGroupModal.vue'
  import { add } from 'ionicons/icons'

  const showCreationModal = ref<boolean>(false)
</script>
