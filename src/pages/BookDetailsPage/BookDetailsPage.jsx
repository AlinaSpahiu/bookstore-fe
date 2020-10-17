import React from 'react'
import {Link} from 'react-router-dom'
import {Row, Col, Image, ListGroup, Card, Button, Container} from 'react-bootstrap'
import Raiting from '../../components/Raiting/Raiting'
import books from '../../books'

const BookDetailsPage = ({match}) => {
    const book = books.find(p => p._id === match.params.id)
    return (
        <>
        <Container>
           <Link className='btn btn-dark my-3' to='/books'>Go Back</Link>

           <Row className='justify-content-center my-3'>
               {/* IMAGE */}
               <Col md={6}>
                   <Image src={book.image} alt={book.title} fluid style={{height:'50vh', width:'80%'}}/>
               </Col>
                
                {/* DESCRIPTION */}
               <Col md={6}>
                   <ListGroup variant='flush'>
                       <ListGroup.Item>
                          <h3>{book.title}</h3>
                       </ListGroup.Item>

                       <ListGroup.Item>
                           <Raiting value={book.rating} text={`${book.numReviews} reviews`} />
                       </ListGroup.Item>

                       <ListGroup.Item>
                          <strong>Price:</strong>  ${book.price}
                       </ListGroup.Item>

                       <ListGroup.Item>
                         <strong> Description:</strong> {book.description}
                       </ListGroup.Item>
                   </ListGroup>
               </Col>
               </Row>

               {/* ADD TO CART */}
               <Row className='justify-content-center'>
                 <Card className='w-75 '>
                     <ListGroup.Item>
                         <Row>
                             <Col> Price:</Col>
                             <Col><strong>{book.price} $</strong></Col>
                         </Row>
                     </ListGroup.Item>

                     <ListGroup.Item>
                         <Row>
                             <Col> Status: </Col>
                             <Col> {book.countInStock > 0 ? 'In Stock' : 'Out of Stock'} </Col>
                         </Row>
                     </ListGroup.Item>

                     <ListGroup.Item>
                         <Button className='btn-block' type='button'> Add To Cart</Button>
                     </ListGroup.Item>
                 </Card>
               </Row>
           
        </Container>
        </>
    )
}

export default BookDetailsPage
