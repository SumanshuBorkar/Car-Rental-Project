import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./../Components/Style/Form.css"

function UserSign() {
  return (
    <>
    <Form className="container d-flex justify-content-center flex-column " id='form'>
    <h2 className='fom'>User Signup</h2>
  <Form.Group className="mb-3" controlId="formBasicName">
    <Form.Label>Name</Form.Label>
    <Form.Control type="text" placeholder="Enter your name" />
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter email" />
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicContact">
    <Form.Label>Contact</Form.Label>
    <Form.Control type="tel" placeholder="Enter your contact number" />
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" placeholder="Password" />
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicConfirmPassword">
    <Form.Label>Confirm Password</Form.Label>
    <Form.Control type="password" placeholder="Confirm Password" />
  </Form.Group>

  <Button variant="primary" type="submit">
    Submit
  </Button>
</Form>

    </>
  )
}

export default UserSign