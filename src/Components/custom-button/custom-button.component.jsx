import React from "react"

const CustomButton = ({ children, card, ...otherProps }) => (
  <button className={`${card ? "card" : ""}  button`} {...otherProps}>
    {children}
  </button>
)

export default CustomButton
