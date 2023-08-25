<template>
  <h2>Information</h2>
  <ion-card style="width: 100%">
    <ion-card-content v-if="group.description">
      <!-- eslint-disable-next-line vue/no-v-html -->
      <div v-html="output" />
    </ion-card-content>
  </ion-card>
  <ion-card style="width: 100%">
    <ion-card-header>
      <ion-card-subtitle>Members</ion-card-subtitle>
    </ion-card-header>

    <ion-card-content>
      <ion-list>
        <ion-item v-for="(member, key) in members" :key="key">
          {{ member }}
        </ion-item>
      </ion-list>
    </ion-card-content>
  </ion-card>
  <ion-card style="width: 100%">
    <ion-card-content>
      <div>Leave the group</div>
      <div>Signal the group</div>
    </ion-card-content>
  </ion-card>
</template>

<script setup lang="ts">
  import { computed } from 'vue'
  import { marked } from 'marked'

  import {
    IonCard,
    IonCardHeader,
    IonCardContent,
    IonCardSubtitle,
    IonList,
    IonItem,
  } from '@ionic/vue'

  import type Group from '@/types/Group'

  const props = defineProps<{
    group: Group
  }>()

  const output = computed<string>(() =>
    props.group.description ? marked(props.group.description) : '',
  )

  const members: string[] = ['Alex', 'Thais']
</script>
