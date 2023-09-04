<template>
  <ion-content>
    <ion-button
      v-for="(group, key) in groups"
      :key="key"
      @click="$router.push(`/groups/${group.id}`)"
    >
      <ion-label>{{ group.name }}</ion-label>
    </ion-button>
  </ion-content>
</template>

<script setup lang="ts">
  import { IonLabel, IonContent, IonButton } from '@ionic/vue'
  import { useGroups } from '@/composables/groups'

  const { getGroups } = useGroups()

  const groups = getGroups()
</script>
