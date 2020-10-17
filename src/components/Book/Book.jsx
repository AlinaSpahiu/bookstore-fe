import React from "react";
import { Card, Container, Row, Button } from "react-bootstrap";
import "./Book.css";
import Raiting from '../Raiting/Raiting'

const Book = ({ book }) => {
  return (
    <Row className="justify-content-center">
      <Card style={{ width: "18rem" }}>
        <a href={`/book/${book._id}`}>
          {" "}
          <Card.Img variant="top" src={book.image} />{" "}
        </a>

        <Card.Body>
          <a href={`/book/${book._id}`}>
            <Card.Title>{book.title}</Card.Title>
          </a>

          <Card.Text as="div">
            <Raiting value={book.rating} text={`${book.numReviews} reviews`}/>
          </Card.Text>

          <Button variant="primary w-50">Buy</Button>
        </Card.Body>
      </Card>
    </Row>
  );
};

export default Book;
