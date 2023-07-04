import { initializeApp } from 'firebase/app'
import { getFirestore, collection } from 'firebase/firestore'
import { getAnalytics } from 'firebase/analytics'
import { getAuth } from 'firebase/auth'
// ... other firebase imports

export const firebaseApp = initializeApp({
  apiKey: 'AIzaSyCh_tyBcu0lUG2bADBl9V6bqVUXleanowk',
  authDomain: 'cardume-8b4bf.firebaseapp.com',
  projectId: 'cardume-8b4bf',
  storageBucket: 'cardume-8b4bf.appspot.com',
  messagingSenderId: '1043354344923',
  appId: '1:1043354344923:web:1c1bd4948c0382f2399bfe',
  measurementId: 'G-J63DN665NZ',
})

// used for the firestore refs
export const db = getFirestore(firebaseApp)

// Analytics
getAnalytics(firebaseApp)

export const auth = getAuth()

// here we can export reusable database references
export const groupsRef = collection(db, 'groups')
