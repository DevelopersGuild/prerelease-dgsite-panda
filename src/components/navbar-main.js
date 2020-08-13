import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import { Navbar, Nav } from "react-bootstrap"
import "./component-styles/navbar-main.scss"

const NavbarQuery = graphql`
  query NavbarQuery {
    logo: file(relativePath: { eq: "logo.svg" }) {
      id
      publicURL
    }
  }
`

function NavbarMain() {
  const data = useStaticQuery(NavbarQuery)
  return (
    <>
      <Navbar className="navbar-main" variant="light" expand="lg">
        <Navbar.Brand href="/">
          <img
            id={data.logo.id}
            src={data.logo.publicURL}
            alt="Logo"
            width="30"
            height="30"
            className="d-inline-block align-top"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav
            className="mr-auto"
            style={{ color: "black", fontWeight: "bold" }}
          >
            <Nav.Item>
              <Link className="nav-link" to="/about">
                About
              </Link>
            </Nav.Item>
            <Nav.Item>
              <Link className="nav-link" to="/contributing">
                Contributing
              </Link>
            </Nav.Item>
            <Nav.Item>
              <Link className="nav-link" to="/contact">
                Contact
              </Link>
            </Nav.Item>
            <Nav.Item>
              <Link className="nav-link" to="/roles">
                Roles
              </Link>
            </Nav.Item>
            <Nav.Item>
              <Link className="nav-link" to="/constitution">
                Constitution
              </Link>
            </Nav.Item>
            <Nav.Item>
              <Link className="nav-link" to="/lab">
                The Lab
              </Link>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  )
}

export default NavbarMain
