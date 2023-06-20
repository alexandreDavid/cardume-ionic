import { computed, reactive } from 'vue'

const state = reactive({
  authToken: localStorage.getItem('token'),
})

export const useAuthentication = () => {
  return {
    setToken: (token: string) => (state.authToken = token),
    isAuthenticated: computed<boolean>(() => !!state.authToken),
  }
}
