<template>
  <EventsList :group-id="group.id" />
</template>

<script setup lang="ts">
  import EventsList from '@/components/event-list/EventList.vue'

  import type Group from '@/types/Group'

  defineProps<{
    group: Group
  }>()
</script>
