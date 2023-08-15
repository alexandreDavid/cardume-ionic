<template>
  <component :is="comp" v-if="comp && event" :event="event" />
</template>

<script setup lang="ts">
  import { ref, shallowRef, defineAsyncComponent, onUnmounted } from 'vue'
  import { useRoute } from 'vue-router'
  import { doc, onSnapshot } from 'firebase/firestore'
  import { eventsRef } from '@/plugins/firebase'

  import type Event from '@/types/Event'
  import type { Component } from 'vue'

  const Trip = defineAsyncComponent(() => import('@/components/event/trip/Read.vue'))

  const id = useRoute().params.id as string

  const event = ref<Event | null>(null)
  const comp = shallowRef<Component | null>(null)

  const unsubscribe = onSnapshot(doc(eventsRef, id), (doc) => {
    event.value = { ...(doc.data() as Event), id: doc.id }
    comp.value = Trip
  })

  onUnmounted(() => unsubscribe())
</script>
