<template>
  <ion-card style="width: 100%" :color="event.color" @click="$router.push(`/events/${event.id}`)">
    <ion-card-header>
      <ion-card-title>{{ event.name }}</ion-card-title>
      <ion-card-subtitle>{{ formattedDate }} </ion-card-subtitle>
    </ion-card-header>

    <ion-card-content>
      {{ event.description }}
    </ion-card-content>

    <ion-button fill="clear">See the event</ion-button>
    <ion-button
      v-if="event.group"
      fill="clear"
      @click.stop="$router.push(`/groups/${event.group}`)"
    >
      See the group
    </ion-button>
  </ion-card>
</template>

<script setup lang="ts">
  import { computed } from 'vue'
  import {
    IonCard,
    IonCardHeader,
    IonCardTitle,
    IonCardSubtitle,
    IonCardContent,
    IonButton,
  } from '@ionic/vue'

  import Event from '@/types/Event.d'

  const props = defineProps<{
    event: Event
  }>()

  const formattedDate = computed<string>(() => {
    const date = new Date(props.event.date)
    return date.toLocaleDateString() + ' ' + date.toLocaleTimeString()
  })
</script>
