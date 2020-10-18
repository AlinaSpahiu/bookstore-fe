import React, {useEffect } from 'react';
import {useDispatch, useSelector} from 'react-redux'
import { Col, Row, Container } from 'react-bootstrap';
import Book from '../components/Book/Book'
import Message from '../components/MessageLoader/Message'
import Loader from '../components/MessageLoader/Loader'
import {listBooks} from '../actions/bookActions'


const BooksPage = () => {
      
      const dispatch = useDispatch()

      const bookList = useSelector(state => state.bookList)
      const {loading, error, books} = bookList

      useEffect(() => {
          dispatch(listBooks())

    }, [dispatch])

    return (
        <Container>
            <Row className="justify-content-center">
                <h1> Our Books!</h1>
            </Row>
        { 
            loading 
            ?  <Loader />
            : error ? <Message> {error} </Message> 
            
            : <Row>
                {books.map(book => (
                    <Col key={book._id} sm={12} md={6} lg={4} xl={3} className="">
                        <Book book={book} />
                    </Col>
                ))}
              </Row>
        }
        </Container>       
    )
}

export default BooksPage
