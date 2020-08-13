import React from "react"
import "../styles/main.scss"
import Container from "../components/container"
import NavBarMain from "../components/navbar-main"

export default function Home() {
  return (
    <>
      <NavBarMain />
      <Container>
        <h1>Hello world!</h1>
        <p>
          Kickstarter plaid kitsch, hexagon waistcoat cray stumptown DIY.
          Kinfolk raclette prism messenger bag freegan man bun pitchfork keytar
          hoodie fingerstache. Hella sriracha forage shoreditch, cronut etsy
          pork belly man braid man bun thundercats typewriter. Irony craft beer
          paleo yr polaroid roof party, cliche pinterest waistcoat fanny pack
          PBR&B viral green juice live-edge 3 wolf moon. Activated charcoal
          craft beer cold-pressed hoodie occupy. Pug four loko tattooed ramps,
          man braid enamel pin paleo fingerstache artisan polaroid fixie
          church-key. Messenger bag chillwave chartreuse celiac occupy.
        </p>
      </Container>
    </>
  )
}
