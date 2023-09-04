<template>
  <component :is="comp" v-if="comp && event" :event="event" />
</template>

<script setup lang="ts">
  import { onMounted, shallowRef, defineAsyncComponent } from 'vue'
  import { useRoute } from 'vue-router'
  import { useEvents } from '@/composables/events'

  import type { Component } from 'vue'

  const Trip = defineAsyncComponent(() => import('@/components/event/trip/Edit.vue'))

  const id = useRoute().params.id as string
  const { getEventById } = useEvents()

  const { event } = getEventById(id)
  const comp = shallowRef<Component | null>(null)
  onMounted(async () => {
    comp.value = Trip
  })
</script>
