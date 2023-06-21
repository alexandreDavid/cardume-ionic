<template>
  <ion-modal :is-open="isOpen">
    <ion-header>
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-button @click="cancel()">Cancel</ion-button>
        </ion-buttons>
        <ion-title>Welcome</ion-title>
        <ion-buttons slot="end">
          <ion-button :strong="true" @click="confirm()">Confirm</ion-button>
        </ion-buttons>
      </ion-toolbar>
    </ion-header>
    <ion-content class="ion-padding">
      <ion-list>
        <ion-item>
          <ion-input
            v-model="name"
            type="text"
            label="Enter your name"
            placeholder="Your name"
          ></ion-input>
        </ion-item>
        <ion-item>
          <ion-input
            v-model="name"
            type="text"
            label="Enter your name"
            placeholder="Your name"
          ></ion-input>
        </ion-item>
      </ion-list>
    </ion-content>
  </ion-modal>
</template>

<script setup lang="ts">
  import {
    IonButtons,
    IonButton,
    IonModal,
    IonHeader,
    IonContent,
    IonToolbar,
    IonTitle,
    IonItem,
    IonInput,
    IonList,
  } from '@ionic/vue'
  import { ref, computed } from 'vue'

  const props = defineProps<{
    modelValue: boolean
  }>()

  const emits = defineEmits(['update:modelValue'])

  const name = ref<string>('')

  const isOpen = computed<boolean>({
    get: () => props.modelValue,
    set: (val) => emits('update:modelValue', val),
  })

  const cancel = () => {
    isOpen.value = false
  }

  const confirm = () => {
    isOpen.value = false
  }
</script>
