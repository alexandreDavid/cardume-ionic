<template>
  <component :is="comp" v-if="comp && group" :group="group" />
</template>

<script setup lang="ts">
  import { onMounted, shallowRef, defineAsyncComponent } from 'vue'
  import { useRoute } from 'vue-router'
  import { useGroups } from '@/composables/groups'

  import type { Component } from 'vue'

  const Trip = defineAsyncComponent(() => import('@/components/group/trip/read/Read.vue'))

  const id = useRoute().params.id as string
  const { getGroupById } = useGroups()

  const { group } = getGroupById(id)
  const comp = shallowRef<Component | null>(null)
  onMounted(async () => {
    comp.value = Trip
  })
</script>
