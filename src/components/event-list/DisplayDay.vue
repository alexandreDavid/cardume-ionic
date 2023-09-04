<template>
  <ion-grid>
    <ion-row class="ion-align-items-center">
      <ion-col size="auto">
        <ion-button fill="outline" size="small" @click="goToday"> Today </ion-button>
      </ion-col>
      <ion-col size="auto">
        <ion-button fill="clear" size="small" @click="goPrevDay">
          <ion-icon slot="icon-only" :icon="chevronBack"></ion-icon>
        </ion-button>
      </ion-col>
      <ion-col>
        <ion-datetime-button v-model="pickerDate" datetime="datetime"></ion-datetime-button>
        <ion-modal :keep-contents-mounted="true">
          <ion-datetime
            id="datetime"
            v-model="pickerDate"
            presentation="date"
            :highlighted-dates="highlightedDates"
          ></ion-datetime>
        </ion-modal>
      </ion-col>
      <ion-col size="auto">
        <ion-button fill="clear" size="small" @click="goNextDay">
          <ion-icon slot="icon-only" :icon="chevronForward"></ion-icon>
        </ion-button>
      </ion-col>
    </ion-row>
  </ion-grid>
  <ion-list>
    <ion-item v-for="(event, key) in dayEvents" :key="key">
      <AgendaCard :event="event" />
    </ion-item>
  </ion-list>
</template>

<script setup lang="ts">
  import { ref, computed } from 'vue'
  import { isSameDay, addDays, subDays, formatDateForDatePicker } from '@/utils/date'

  import {
    IonList,
    IonItem,
    IonButton,
    IonIcon,
    IonGrid,
    IonRow,
    IonCol,
    IonDatetime,
    IonDatetimeButton,
    IonModal,
  } from '@ionic/vue'
  import AgendaCard from '@/components/agenda/AgendaCard.vue'

  import { chevronBack, chevronForward } from 'ionicons/icons'

  import type Event from '@/types/Event'

  const props = defineProps<{
    events: Event[]
  }>()

  const displayedDate = ref<Date>(new Date())

  const goPrevDay = () => (displayedDate.value = subDays(displayedDate.value, 1))
  const goNextDay = () => (displayedDate.value = addDays(displayedDate.value, 1))
  const goToday = () => (displayedDate.value = new Date())

  const pickerDate = computed<string>({
    get: () => displayedDate.value.toISOString(),
    set: (d) => (displayedDate.value = new Date(d)),
  })

  const dayEvents = computed<Event[]>(() =>
    props.events.filter((event) => isSameDay(new Date(event.date), displayedDate.value)),
  )

  const highlightedDates = computed<{ date: string; textColor: string; backgroundColor: string }[]>(
    () =>
      props.events.map((event) => ({
        date: formatDateForDatePicker(event.date),
        textColor: `var(--ion-color-${event.color || 'primary'}-contrast)`,
        backgroundColor: `var(--ion-color-${event.color || 'primary'})`,
      })),
  )
</script>
