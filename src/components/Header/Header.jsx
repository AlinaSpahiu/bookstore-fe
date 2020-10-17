import React from "react";
import { Form, FormControl, Button, Navbar, Nav, Container } from "react-bootstrap";
import { LinkContainer } from 'react-router-bootstrap'
import "./Header.css"

const Header = () => {
  return (
    <header>
      <Navbar bg="dark" variant="dark" expand="lg">
        <Container>
          <LinkContainer to='/' >
            <Navbar.Brand>BookStore</Navbar.Brand>
          </LinkContainer>

          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">

            <Form inline>
              <FormControl type="text" placeholder="Search" className="mr-sm-2" />
              <Button variant="outline-success">Search</Button>
            </Form>

            <Nav className="links">
              <LinkContainer to='/'>
                <Nav.Link> Home </Nav.Link>
              </LinkContainer>

              <LinkContainer to='/books'>
                <Nav.Link> Books </Nav.Link>
              </LinkContainer>

              <LinkContainer to='/cart'>
                <Nav.Link> Cart <i className="fas fa-shopping-cart ml-"></i> </Nav.Link>
              </LinkContainer>

              <LinkContainer to='/login'>
                <Nav.Link> Login <i className="fas fa-user ml-1"></i> </Nav.Link>
              </LinkContainer>
            </Nav>

          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
