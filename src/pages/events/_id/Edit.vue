<template>
  <component :is="comp" v-if="comp && event" :event="event" />
</template>

<script setup lang="ts">
  import { onMounted, ref, shallowRef, defineAsyncComponent } from 'vue'
  import { useRoute } from 'vue-router'
  import { doc, getDoc } from 'firebase/firestore'
  import { eventsRef } from '@/plugins/firebase'

  import type Event from '@/types/Event'
  import type { Component } from 'vue'

  const Trip = defineAsyncComponent(() => import('@/components/event/trip/Edit.vue'))

  const id = useRoute().params.id as string

  const event = ref<Event | null>(null)
  const comp = shallowRef<Component | null>(null)
  onMounted(async () => {
    const docSnap = await getDoc(doc(eventsRef, id))
    if (docSnap.exists()) {
      event.value = { ...(docSnap.data() as Event), id: docSnap.id }
      comp.value = Trip
    }
  })
</script>
