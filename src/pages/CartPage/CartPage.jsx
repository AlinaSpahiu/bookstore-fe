import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Message from '../../components/MessageLoader/Message'
import { Row, Col, ListGroup, Image, Form, Button, Card, Container } from 'react-bootstrap'
import { addToCart, removeFromCart } from '../../actions/cartActions'
import {Link} from 'react-router-dom'

const CartPage = ({ match, location, history }) => {

    const bookId = match.params.id

    const qty = location.search ? Number(location.search.split('=')[1]) : 1

    const dispatch = useDispatch()

    const cart = useSelector(state => state.cart)
    const {cartItems} = cart

    useEffect(() => {
        if (bookId) {
            dispatch(addToCart(bookId, qty))
        }
    }, [dispatch, bookId, qty])

    const removeFromCartHandler = (id) =>{
        dispatch(removeFromCart(id))
    }

    const checkOutHandler = () => {
        history.push('/login?redirect=shipping')
    }

    return (
        <Container>
        <Row>
           <Col md={8}>
              <h1> Shopping Cart </h1>
              { 
                 cartItems.length === 0 
                 ? <Message variant='info'>Your Cart is Empty 
                         <Link to='/'> Go Back </Link>
                   </Message>
                 : (
                     <ListGroup variant='flush'>
                         { cartItems.map( item => (
                             <ListGroup.Item key={item.book}>
                                 <Row>
                                     <Col md={2}>  <Image src ={item.image} alt={item.title} fluid rounded />  </Col>
                                     <Col md={3}>  <Link to={`/book/${item.book}`}> {item.title} </Link>  </Col>
                                     <Col md={2}>  ${item.price}  </Col>
                                     <Col md={2}>  
                                           <Form.Control as='select' value={item.qty} onChange={(e) => dispatch(addToCart(item.book, Number(e.target.value)))}>
                                              {
                                                  [ ...Array(item.countInStock).keys()].map(x => (
                                                  <option key={x+1} value={x+1}> {x+1} </option>
                                                  ))
                                              }
                                           </Form.Control>
                                     </Col>
                                     <Col md={2}>
                                         <Button type='button' variant='light' onClick={() => removeFromCartHandler(item.book)}>
                                             <i className='fas fa-trash'></i>
                                         </Button>
                                     </Col>
                                 </Row>
                             </ListGroup.Item>
                         ))}
                     </ListGroup>
                 )
              }
           </Col>

           <Col md={4}>
                <Card>
                    <ListGroup variant='flush'>
                        <ListGroup.Item>
                            <h2> Subtotal ({cartItems.reduce((acc, item) => acc + item.qty, 0)}) items</h2>
                            ${cartItems.reduce((acc, item) => acc + item.qty * item.price, 0).toFixed(2)}
                        </ListGroup.Item>

                        <ListGroup.Item>
                            <Button type='button' className='btn-block' variant='dark' disabled={cartItems.length === 0} onClick={checkOutHandler} >Proceed to Checkout</Button>
                        </ListGroup.Item>
                    </ListGroup>
                </Card>
           </Col>
        </Row>
        </Container>
    )
}

export default CartPage
