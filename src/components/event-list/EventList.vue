<template>
  <ion-grid>
    <ion-row>
      <ion-col size="8">
        <ion-searchbar v-model="search"></ion-searchbar>
      </ion-col>
      <ion-col>
        <ion-select v-model="display" placeholder="Display">
          <ion-select-option value="planning">Planning</ion-select-option>
          <ion-select-option value="day">Day</ion-select-option>
          <!-- <ion-select-option value="3days">3 days</ion-select-option>
          <ion-select-option value="week">Week</ion-select-option>
          <ion-select-option value="month">Month</ion-select-option> -->
        </ion-select>
      </ion-col>
    </ion-row>
  </ion-grid>
  <component :is="displayedComponent" v-if="displayedComponent" :events="filteredEvents" />
</template>

<script setup lang="ts">
  import { ref, computed } from 'vue'
  import { useEvents } from '@/composables/events'

  import { IonGrid, IonRow, IonCol, IonSelect, IonSelectOption, IonSearchbar } from '@ionic/vue'
  import DisplayPlanning from './DisplayPlanning.vue'
  import DisplayDay from './DisplayDay.vue'

  import type { Component } from 'vue'
  import type Event from '@/types/Event'

  const { getEvents, getEventsFromGroup } = useEvents()

  const props = defineProps<{
    groupId?: string
  }>()

  const events = props.groupId ? getEventsFromGroup(props.groupId) : getEvents()

  const filteredEvents = computed<Event[]>(() => {
    if (!search.value) {
      return events
    }
    const s = search.value.toUpperCase()
    return events.filter((event) => event.name.toUpperCase().includes(s))
  })

  const search = ref<string>('')
  const display = ref<string>('planning')

  const displayedComponent = computed<Component | null>(() => {
    switch (display.value) {
      case 'planning':
        return DisplayPlanning
      case 'day':
        return DisplayDay
    }
    return null
  })
</script>
