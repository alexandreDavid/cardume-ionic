<template>
  <div class="ion-page">
    <ion-content class="ion-padding">
      <h1>Bienvenu sur Cardume</h1>
      <div id="firebaseui-auth-container"></div>
    </ion-content>
  </div>
</template>

<script lang="ts" setup>
  import { onMounted } from 'vue'
  import firebase from 'firebase/compat/app'
  import * as firebaseui from 'firebaseui'
  import { useFirebaseAuth } from 'vuefire'

  import { IonContent } from '@ionic/vue'

  const auth = useFirebaseAuth()

  onMounted(() => {
    const uiConfig = {
      signInSuccessUrl: '/',
      signInOptions: [
        // Leave the lines as is for the providers you want to offer your users.
        firebase.auth.GoogleAuthProvider.PROVIDER_ID,
        firebase.auth.EmailAuthProvider.PROVIDER_ID,
      ],
      // tosUrl and privacyPolicyUrl accept either url string or a callback
      // function.
      // Terms of service url/callback.
      tosUrl: '/',
      // Privacy policy url/callback.
      privacyPolicyUrl: function () {
        window.location.assign('/')
      },
    }

    // Initialize the FirebaseUI Widget using Firebase.
    const ui = new firebaseui.auth.AuthUI(auth)
    // The start method will wait until the DOM is loaded.
    ui.start('#firebaseui-auth-container', uiConfig)
  })
</script>
