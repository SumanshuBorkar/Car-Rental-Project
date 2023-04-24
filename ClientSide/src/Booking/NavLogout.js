import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './../Components/Style/navLog.css';

const NavLogout = () => {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
         
          <Nav className="me-auto" >
            <div id="nav">
            <Nav.Link href=" ExistBookings">MyBooking</Nav.Link>
            <Nav.Link href="/home" onClick={()=>localStorage.clear()} >LogOut</Nav.Link>
            </div>
          </Nav>
        </Container>
      </Navbar>
    </>
  )
}

export default NavLogout;