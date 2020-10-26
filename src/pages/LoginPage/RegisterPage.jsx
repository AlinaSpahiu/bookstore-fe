import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Form, Button, Row, Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import Message from "../../components/MessageLoader/Message";
import Loader from "../../components/MessageLoader/Loader";
import { register } from "../../actions/userActions";
import FormContainer from "../../components/FormContainer/FormContainer";

const RegisterPage = ({location, history}) => {
  const [name, setName] = useState('')
  const [surname, setSurname] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [message, setMessage] = useState(null)

  const dispatch = useDispatch()

  const userRegister = useSelector((state) => state.userRegister)
  const { loading, error, userInfo } = userRegister

  // redirect: 
  const redirect = location.search ? location.search.split('=')[1] : '/'

  useEffect(() => {
    if (userInfo) {
      history.push(redirect)
    }
  }, [history, userInfo, redirect])

  // submitHandler:
  const submitHandler = (e) => {
    e.preventDefault()
    if(password !== confirmPassword) {
        setMessage('passwords do not match!')
    } else {
        dispatch(register(name, surname, email, password))
    }
   
  }

  return (
    <FormContainer>
      <h1> Sign Up</h1>
      {message && <Message variant='danger'> {message} </Message>}
      {error && <Message variant='danger'> {error} </Message>}
      {loading && <Loader />}
      <Form onSubmit={submitHandler}>
          {/* Email */}
        <Form.Group controlId="name">
          <Form.Label> Name</Form.Label>
          <Form.Control
            type="name"
            placeholder="Enter name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          ></Form.Control>
        </Form.Group>

        {/* Email */}
        <Form.Group controlId="surname">
          <Form.Label> Surname</Form.Label>
          <Form.Control
            type="surname"
            placeholder="Enter e-mail"
            value={surname}
            onChange={(e) => setSurname(e.target.value)}
          ></Form.Control>
        </Form.Group>

              {/* Email */}
        <Form.Group controlId="email">
          <Form.Label> Email Address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter e-mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          ></Form.Control>
        </Form.Group>

        {/* Password */}
        <Form.Group controlId="password">
          <Form.Label> Password </Form.Label>
          <Form.Control
            type="password"
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          ></Form.Control>
        </Form.Group>

         {/* Password */}
         <Form.Group controlId="confirmpassword">
          <Form.Label> Confirm Password </Form.Label>
          <Form.Control
            type="password"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          ></Form.Control>
        </Form.Group>

        <Button type='submit' variant='dark'>
            Register
        </Button>
      </Form>

      <Row className='py-3'>
          <Col>
              Have an Account?!
              <Link to={redirect ?`/login?redirect=${redirect}` : '/login'}>
                 Login
              </Link>
          </Col>
      </Row>
    </FormContainer>
  );
};

export default RegisterPage;
