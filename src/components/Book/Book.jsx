import React from "react";
import {Link} from 'react-router-dom'
import { Card, Row, Button } from "react-bootstrap";
import "./Book.css";
import Raiting from '../Raiting/Raiting'

const Book = ({ book }) => {

  return (
    <Row className="justify-content-center">
      <Card style={{ width: "15rem"}}>
        <Link to={`/book/${book._id}`}>
          <Card.Img variant="top" src={book.image} />
        </Link>

        <Card.Body>
          <Link to={`/book/${book._id}`}>
            <Card.Title>{book.title}</Card.Title>
          </Link>

          <Card.Text as="div">
            <Raiting value={book.rating} text={`${book.numReviews} reviews`}/>
            <h5> Price: {book.price} € </h5>
          </Card.Text>

          <Button variant="primary w-50">Buy</Button>
        </Card.Body>
      </Card>
    </Row>
  );
};

export default Book;
