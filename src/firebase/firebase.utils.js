import firebase from "firebase/app"
import "firebase/firestore"
import "firebase/auth"

const config = {
  apiKey: "AIzaSyDM7t4K09hCADAwHwclm8fUSlLjBZi4AQM",
  authDomain: "simplynote-portfolio.firebaseapp.com",
  databaseURL: "https://simplynote-portfolio.firebaseio.com",
  projectId: "simplynote-portfolio",
  storageBucket: "simplynote-portfolio.appspot.com",
  messagingSenderId: "393618738762",
  appId: "1:393618738762:web:d3a4ec256efef74370e0b3",
  measurementId: "G-ZJWRGFZMH0",
}

firebase.initializeApp(config)

const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({ prompt: "select_account" })

export const signInWithGoogle = () => auth.signInWithPopup(provider)

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return

  const userRef = firestore.doc(`users/${userAuth.uid}`)

  const snapShot = await userRef.get()

  if (!snapShot.exists) {
    const { displayName, email } = userAuth
    const createdAt = new Date()

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      })
    } catch (error) {
      console.log(error)
    }
  }

  console.log(snapShot)

  return userRef
}

export const auth = firebase.auth()
export const firestore = firebase.firestore()
export default firebase
