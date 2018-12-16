import React from "react"
import subtitleStyles from "./subtitle.module.scss"

export default ({ children }) => (
  <h3 className={subtitleStyles.subtitle}>{children}</h3>
)