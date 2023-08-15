<template>
  <h2>{{ event.name }}</h2>
  <div v-html="output" />
</template>

<script setup lang="ts">
  import { computed } from 'vue'
  import { marked } from 'marked'

  import type Event from '@/types/Event'

  const props = defineProps<{
    event: Event
  }>()

  const output = computed(() => marked(props.event.description))
</script>
