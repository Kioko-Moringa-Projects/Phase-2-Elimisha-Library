import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';

import Button from 'react-bootstrap/Button';
import React, { useState } from 'react';

const bookAPI = " http://localhost:3000/books";

function Book({book, removeBook, addToBorrowed}) {
  const {title, isbn, pageCount, publishedDate, thumbnailUrl, shortDescription, longDescription, status, authors, categories} = book;

  function onDeleteClick(e) {
    e.preventDefault();
    fetch(`${bookAPI}/${book.id}`, {
      method: "DELETE",
    });
    removeBook(book);
  }

  return (
    <div >
        <Col>
          <Card>
            <Card.Img variant="top" src={thumbnailUrl} />
            <Card.Body>
              <Card.Title>{title}</Card.Title>
              <Card.Text>{shortDescription}</Card.Text>
              <Card.Text>{authors}</Card.Text>
              <Card.Text>{publishedDate}</Card.Text>
              <Card.Text>{categories}</Card.Text>
              <Button variant="primary" onClick={() => addToBorrowed(book)}>{book.isBorrowed ? "❌Borrowed" : "✅ in Library" } </Button>
              <Button variant="danger" onClick={onDeleteClick}>Delete</Button>
            </Card.Body>
            
          </Card>
        </Col>
    
    </div>
  );
}

export default Book;