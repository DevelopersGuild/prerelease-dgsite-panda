import React from "react"
import "./component-styles/container.scss"
import clsx from "clsx"

function Container({ style, className, children }) {
  return (
    <div style={style} className={clsx("custom-container", className)}>
      {children}
    </div>
  )
}

export default Container
