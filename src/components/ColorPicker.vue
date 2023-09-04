<template>
  <ion-label v-if="label" :color="color">{{ label }}</ion-label>
  <div>
    <ion-button
      v-for="(c, key) in colors"
      :key="key"
      shape="round"
      size="small"
      :color="c"
      @click="color = c"
    >
      <ion-icon v-if="color === c" :icon="checkmark" />
      <span v-else>-</span>
    </ion-button>
    <ion-button shape="round" fill="outline" color="danger" size="small" @click="color = ''">
      <ion-icon :icon="closeCircle" />
    </ion-button>
  </div>
</template>

<script setup lang="ts">
  import { computed } from 'vue'

  import { IonButton, IonIcon, IonLabel } from '@ionic/vue'

  import { closeCircle, checkmark } from 'ionicons/icons'

  const colors = [
    'tomato',
    'flamingo',
    'tangerine',
    'banana',
    'sage',
    'basil',
    'peacock',
    'blueberry',
    'lavender',
    'grape',
    'graphite',
  ]

  const emit = defineEmits(['update:modelValue'])

  const props = defineProps<{
    modelValue: string | undefined
    label?: string
  }>()

  const color = computed<string | undefined>({
    get: () => props.modelValue,
    set: (val) => emit('update:modelValue', val),
  })
</script>
