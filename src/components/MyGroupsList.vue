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
  import { reactive } from 'vue'
  import { getDocs, query, or, where } from 'firebase/firestore'
  import { groupsRef } from '@/plugins/firebase'
  import { IonLabel, IonContent, IonButton } from '@ionic/vue'
  import { useCurrentUser } from 'vuefire'

  const user = useCurrentUser()

  const groups = reactive<{ id: string; name: string }[]>([])
  const querySnapshot = await getDocs(
    query(
      groupsRef,
      or(
        where('members', 'array-contains-any', [user.value?.uid]),
        where('admins', 'array-contains-any', [user.value?.uid]),
      ),
    ),
  )
  querySnapshot.forEach((doc) => {
    groups.push({
      id: doc.id,
      name: doc.data().name,
    })
  })
</script>
