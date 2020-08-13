import React from "react"
import { graphql } from "gatsby"
import { Jumbotron } from "react-bootstrap"
import Container from "../components/container"
import NavBarMain from "../components/navbar-main"
import DiscordLink from "../components/discord-link"
import Curated from "../components/curated"
import GithubBar from "../components/github-bar"
import "../styles/index.scss"
import { Helmet } from "react-helmet"

export default function Home({ data }) {
  return (
    <>
      <Helmet title="Home | Developers Guild" defer={false} />
      <NavBarMain />
      <br />
      <Container>
        <DiscordLink className="float-right" />
        <br />
        <br />
        <br />
        <Jumbotron>
          <div className="jumbo-container">
            <img
              className="jumbo-image"
              src={data.logo.publicURL}
              alt={data.logo.id}
            />
            <div>
              <h1>Developers Guild - De Anza</h1>
              <p>A project and contribution based programming club.</p>
              <p>
                Fridays 1:30PM-4:00PM
                <span style={{ textDecoration: "line-through" }}>AT311</span>
                <strong> Discord & Zoom</strong>
              </p>
            </div>
          </div>
        </Jumbotron>
        <br />
        <Curated curatedDataCollection={data.curated.nodes} />
        <br />
        <GithubBar />
        <br />
      </Container>
    </>
  )
}

export const query = graphql`
  query HomePageQuery {
    logo: file(relativePath: { eq: "logo.svg" }) {
      id
      publicURL
    }
    curated: allCuratedJson {
      nodes {
        id
        source
        recommendedBy
      }
    }
  }
`
