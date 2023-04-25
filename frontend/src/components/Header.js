import React from 'react'
import { Navbar, Nav, Container,  } from 'react-bootstrap'


const Header = () => {
  return (

    <header>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/">Mobilicis</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/male-users">Male Users</Nav.Link>
            <Nav.Link href="/last-name-users">Last Name Users</Nav.Link>
            <Nav.Link href="/email-users">Email Users</Nav.Link>
            <Nav.Link href="/top-cities">Top Cities</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </header>
  )
}

export default Header
