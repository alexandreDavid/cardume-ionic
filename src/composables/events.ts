import { ref, onUnmounted } from 'vue'
import { doc, onSnapshot } from 'firebase/firestore'
import { eventsRef } from '@/plugins/firebase'

import type Event from '@/types/Event'

export const useEvents = () => ({
  getEventById: (id: string) => {
    const event = ref<Event | null>(null)
    const loading = ref<boolean>(true)
    const unsubscribe = onSnapshot(doc(eventsRef, id), (docSnap) => {
      if (docSnap.exists()) {
        event.value = { ...(docSnap.data() as Event), id: docSnap.id }
      }
      loading.value = false
    })

    onUnmounted(() => unsubscribe())
    return { event, loading }
  },
})
