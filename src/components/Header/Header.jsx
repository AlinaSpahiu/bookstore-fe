import React, {useState, useEffect} from "react";
import {useDispatch, useSelector} from 'react-redux'
import {  Navbar, Nav, NavDropdown } from "react-bootstrap";
import { LinkContainer } from 'react-router-bootstrap'
import "./Header.css"
import {logout} from '../../actions/userActions'
import transitions from "@material-ui/core/styles/transitions";

const Header = () => {
  const dispatch = useDispatch()
  const userLogin = useSelector(state => state.userLogin)
  const {userInfo} = userLogin

  const logoutHandler = () => {
    dispatch(logout())
  }
  return (
    
      <Navbar className='navbar active' expand="lg">
       
          <LinkContainer to='/' >
            <Navbar.Brand>BoOk<span className="span">st♥rǝ</span></Navbar.Brand>
          </LinkContainer>

          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">

            {/* <Form inline>
              <FormControl type="text" placeholder="Search" className="mr-sm-2" />
              <Button variant="outline-success">Search</Button>
            </Form> */}

            <Nav className="links ml-auto">
              <LinkContainer to='/'>
                <Nav.Link> Home </Nav.Link>
              </LinkContainer>

              <LinkContainer to='/books'>
                <Nav.Link> Books </Nav.Link>
              </LinkContainer>

              <LinkContainer to='/cart'>
                <Nav.Link> Cart <i className="fas fa-shopping-cart ml-"></i> </Nav.Link>
              </LinkContainer>

              {userInfo ? (
               <NavDropdown title={userInfo.name} id='username'>
                 <LinkContainer to='/profile'>
                   <NavDropdown.Item> Profile </NavDropdown.Item>
                 </LinkContainer>
                   <NavDropdown.Item onClick={logoutHandler}>
                     LogOut
                   </NavDropdown.Item>
               </NavDropdown>
              ) : 
              <LinkContainer to='/login'>
                <Nav.Link> Login <i className="fas fa-user ml-1"></i> </Nav.Link>
              </LinkContainer>
          }
            </Nav>
          </Navbar.Collapse>

      </Navbar> 
    
              
  );
};

export default Header;
