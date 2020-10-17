import React from "react";
import { Form, FormControl, Button, Navbar, Nav } from "react-bootstrap";
import "./Header.css"

const Header = () => {
  return (
    <header>
      <Navbar bg="dark" variant="dark" expand="lg">
        <Navbar.Brand href="/">BookStore</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">

          <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-success">Search</Button>
          </Form>

          <Nav className="links">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/books">Books</Nav.Link>
            <Nav.Link href="/cart">Cart<i className="fas fa-shopping-cart ml-"></i></Nav.Link>
            <Nav.Link href="/cart">Login<i className="fas fa-user ml-1"></i></Nav.Link>
          </Nav>

        </Navbar.Collapse>
      </Navbar>
    </header>
  );
};

export default Header;
