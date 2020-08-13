import React from "react"

function SaferLink({ className, style, href, children }) {
  return (
    <a
      rel="noreferrer noopener"
      target="__blank"
      className={className}
      style={style}
      href={href}
    >
      {children}
    </a>
  )
}

export default SaferLink
