import React from 'react';
import './NavbarMenu.css';
import img from '../../../images/logo2.png';
import { Container, Nav, Navbar } from 'react-bootstrap';

const NavbarMenu = () => {
  return (
    <div>
      <Navbar bg='light' expand='lg'>
        <Container fluid>
          <div className='nav-logo'>
            <img src={img} alt='' />
          </div>
          <Navbar.Toggle aria-controls='navbarScroll' />
          <Navbar.Collapse id='navbarScroll'>
            <Nav
              className='me-auto my-2 my-lg-0'
              style={{ maxHeight: '100px' }}
              navbarScroll
            ></Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};
export default NavbarMenu;
