import React from 'react';
import { Col, Row, Container } from 'react-bootstrap';
import Book from '../components/Book/Book'
import books from '../books';


const BooksPage = () => {
    return (
        <Row className="justify-content-center">
            <h1> Our Books!</h1>
            <Row>
                {books.map(book => (
                    <Col key={book._id} sm={12} md={6} lg={4} xl={2} className="">
                       <Book book={book} />
                    </Col>
                ))}
            </Row>
        </Row>
    )
}

export default BooksPage
