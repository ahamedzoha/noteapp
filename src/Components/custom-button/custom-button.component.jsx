import React from "react"
import "./custom-button.styles.scss"
const CustomButton = ({ children, card, ...otherProps }) => (
  <button className={`button ${card ? "card" : ""}`} {...otherProps}>
    {children}
  </button>
)

export default CustomButton
