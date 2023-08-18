import { reactive, onUnmounted } from 'vue'
import { onSnapshot, query, or, where, orderBy } from 'firebase/firestore'
import { groupsRef } from '@/plugins/firebase'
import { useCurrentUser } from 'vuefire'

export const useGroups = () => {
  const user = useCurrentUser()
  return {
    getGroups: () => {
      const groups = reactive<{ id: string; name: string }[]>([])

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
  }
}
