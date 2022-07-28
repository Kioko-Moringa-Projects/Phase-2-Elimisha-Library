import React from "react";
import Book from "./Book";
import Row from 'react-bootstrap/Row';

function BooksContainer({books, removeBook, addToBorrowed}) {
  return (
    <div className="book-card">
      <Row xs={4} md={4} className="g-8">
      {books.map(book => {
        return (
          <Book 
            key={book.id} 
            book={book} 
            removeBook={removeBook} 
            addToBorrowed={addToBorrowed} 
          />
        )
        })}
     </Row>   
    </div>
  );
}

export default BooksContainer;