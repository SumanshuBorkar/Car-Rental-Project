import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Logo from "./images/Logo.png"
import "./Style/Navig.css"

const Navigation = () => {
  return (
    <>
      <Navbar className='navbar'>
        <Container >
          <Navbar.Brand href="#home" >
          <img src={Logo} alt="not available" className='Logo' />
          </Navbar.Brand>
          <Nav className='navholder' >
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="features" >Features</Nav.Link>
            <Nav.Link href="/pricing">Pricing</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  )
}

export default Navigation