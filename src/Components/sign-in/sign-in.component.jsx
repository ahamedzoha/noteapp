import React from "react"
import "./sign-in.styles.scss"
import { signInWithGoogle } from "../../firebase/firebase.utils"
const SignIn = () => {
  return (
    <div className="sign-in-wrapper">
      <button onClick={signInWithGoogle}>Sign in</button>
    </div>
  )
}

export default SignIn
