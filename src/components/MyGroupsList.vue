<template>
  <ion-content>
    <ion-button v-for="(group, key) in groups" :key="key" :href="`/groups/${group.id}`">
      <ion-label>{{ group.name }}</ion-label>
    </ion-button>
  </ion-content>
</template>

<script setup lang="ts">
  import { reactive } from 'vue'
  import { getDocs } from 'firebase/firestore'
  import { groupsRef } from '@/plugins/firebase'
  import { IonLabel, IonContent, IonButton } from '@ionic/vue'

  const groups = reactive<{ id: string; name: string }[]>([])
  const querySnapshot = await getDocs(groupsRef)
  querySnapshot.forEach((doc) => {
    groups.push({
      id: doc.id,
      name: doc.data().name,
    })
  })
</script>
