import React from "react"
import "./sign-in.styles.scss"
import { signInWithGoogle } from "../../firebase/firebase.utils"
const SignIn = () => {
  return (
    <button className="sign-in-button" onClick={signInWithGoogle}>
      Sign in with <strong>Google</strong>
    </button>
  )
}

export default SignIn
