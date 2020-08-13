import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import "./component-styles/discord-link.scss"
import clsx from "clsx"
import SaferLink from "./safer-link"

const DiscordQuery = graphql`
  query DiscordQuery {
    discord: file(relativePath: { eq: "discord.svg" }) {
      id
      publicURL
    }
  }
`

function DiscordLink({ className, style }) {
  const data = useStaticQuery(DiscordQuery)
  return (
    <SaferLink
      className={clsx(
        "text-white font-bold py-2 px-4 rounded btn btn-primary discord-btn bounce-in-top",
        className
      )}
      style={style}
      href="https://discord.gg/BpaFS4h"
    >
      <strong>Join Our Discord</strong>
      <img
        className="discord-logo"
        src={data.discord.publicURL}
        alt={data.discord.id}
      />
    </SaferLink>
  )
}

export default DiscordLink
