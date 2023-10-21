import React from 'react'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Switch from './Switch';
import Container from 'react-bootstrap/Container'
import { Link } from 'react-router-dom'

const style=
{
  display:"flex",
  gap:"2rem"
}
function Navbarr(props) {
  return (
    <>
      <Navbar bg={props.color} data-bs-theme="dark">
        <Container>
          <Navbar.Brand >{props.title}</Navbar.Brand>
          <Nav className="ms-auto">
            <Switch click={props.changecolor} />
            <ul style={style}>
              <Link to="/">
                Home
              </Link>
              <Link to="/about">
                About
              </Link>
            </ul>
          </Nav>
        </Container>
      </Navbar>
    </>
  )
}
export default Navbarr
