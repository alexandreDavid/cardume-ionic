import { ref, reactive, onUnmounted } from 'vue'
import { onSnapshot, query, or, where, orderBy, doc } from 'firebase/firestore'
import { groupsRef } from '@/plugins/firebase'
import { useCurrentUser } from 'vuefire'

import type Group from '@/types/Group'

export const useGroups = () => {
  const user = useCurrentUser()
  return {
    getGroups: () => {
      const groups = reactive<Group[]>([])

      const unsubscribe = onSnapshot(
        query(
          groupsRef,
          or(
            where('members', 'array-contains-any', [user.value?.uid]),
            where('admins', 'array-contains-any', [user.value?.uid]),
          ),
          orderBy('name'),
        ),
        (snapshot) => {
          snapshot.docChanges().forEach((change) => {
            const doc = change.doc
            if (change.type === 'added') {
              const data = doc.data()
              groups.push({
                id: doc.id,
                name: data.name,
              })
            } else {
              const idx = groups.findIndex((group) => group.id === doc.id)
              if (change.type === 'modified') {
                const data = doc.data()
                groups[idx] = {
                  id: doc.id,
                  name: data.name,
                }
              }
              if (change.type === 'removed') {
                groups.splice(idx, 1)
              }
            }
          })
        },
      )

      onUnmounted(() => unsubscribe())

      return groups
    },
    getGroupById: (id: string) => {
      const group = ref<Group | null>(null)
      const loading = ref<boolean>(true)
      const unsubscribe = onSnapshot(doc(groupsRef, id), (docSnap) => {
        if (docSnap.exists()) {
          group.value = { ...(docSnap.data() as Group), id: docSnap.id }
        }
        loading.value = false
      })

      onUnmounted(() => unsubscribe())

      return { group, loading }
    },
  }
}
