<template>
  <ion-page>
    <EventHeader :event="event" />
    <ion-content :fullscreen="true" class="ion-padding">
      <h1>
        <span v-if="groupName">{{ groupName }} - </span>{{ event.name }}
      </h1>
      <template v-if="event.date">
        <p>{{ formattedDate }}</p>
      </template>
      <template v-if="event.description">
        <!-- eslint-disable-next-line vue/no-v-html -->
        <p v-html="output" />
      </template>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
  import { computed } from 'vue'
  import { marked } from 'marked'
  import { useGroups } from '@/composables/groups'

  import { IonPage, IonContent } from '@ionic/vue'
  import EventHeader from '@/components/EventHeader.vue'

  import type Event from '@/types/Event'

  const { getGroups } = useGroups()

  const groups = getGroups()

  const props = defineProps<{
    event: Event
  }>()

  const groupName = computed<string | undefined>(
    () => props.event.group && groups.find((group) => group.id === props.event.group)?.name,
  )

  const formattedDate = computed<string>(() => {
    const date = new Date(props.event.date)
    return date.toLocaleDateString() + ' ' + date.toLocaleTimeString()
  })

  const output = computed(() => marked(props.event.description))
</script>
