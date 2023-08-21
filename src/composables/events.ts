import { ref, reactive, watch, onUnmounted } from 'vue'
import { doc, onSnapshot, query, or, where, orderBy, Unsubscribe } from 'firebase/firestore'
import { eventsRef } from '@/plugins/firebase'
import { useCurrentUser } from 'vuefire'
import { useGroups } from './groups'

import type Event from '@/types/Event'

export const useEvents = () => {
  const user = useCurrentUser()
  const { getGroups } = useGroups()
  const groups = getGroups()
  return {
    getEvents: () => {
      const events = reactive<Event[]>([])
      const constraints = [
        where('members', 'array-contains-any', [user.value?.uid]),
        where('admins', 'array-contains-any', [user.value?.uid]),
      ]
      let unsubscribe: Unsubscribe | null = null

      watch(
        groups,
        (groups) => {
          if (groups.length) {
            constraints.push(
              where(
                'group',
                'in',
                groups.map((g) => g.id),
              ),
            )
          }

          unsubscribe && unsubscribe()
          unsubscribe = onSnapshot(
            query(eventsRef, or(...constraints), orderBy('date')),
            (snapshot) => {
              snapshot.docChanges().forEach((change) => {
                const doc = change.doc
                if (change.type === 'added') {
                  const data = doc.data()
                  events.push({
                    id: doc.id,
                    name: data.name,
                    date: data.date,
                    description: data.description,
                    group: data.group,
                  })
                } else {
                  const idx = events.findIndex((evt) => evt.id === doc.id)
                  if (change.type === 'modified') {
                    const data = doc.data()
                    events[idx] = {
                      id: doc.id,
                      name: data.name,
                      date: data.date,
                      description: data.description,
                    }
                  }
                  if (change.type === 'removed') {
                    events.splice(idx, 1)
                  }
                }
              })

              events.sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime())
            },
          )
        },
        { immediate: true },
      )

      onUnmounted(() => unsubscribe && unsubscribe())

      return events
    },
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
  }
}
