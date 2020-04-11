import React from "react"
import "./login-signup.styles.scss"
import SignIn from "../../Components/sign-in/sign-in.component"

const LoginSignUp = () => {
  return (
    <div className="login-signup-wrapper">
      <h1 className="logotext">SimplyNote</h1>
      <div className="box">
        <h1 className="welcome">Welcome!</h1>
        <p className="welcome-text">
          Login to start using this handy note taking application
        </p>
        <div className="button-wrapper">
          <SignIn />
        </div>
      </div>
      <footer>
        <p>
          Created with lots of{" "}
          <span role="img" aria-label="love">
            🧡
          </span>{" "}
          and{" "}
          <span role="img" aria-label="coffee">
            ☕
          </span>{" "}
          by Azaz Ahamed Zoha{" "}
        </p>
      </footer>
    </div>
  )
}

export default LoginSignUp
