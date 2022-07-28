import React, { useState, useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';

import Navigation from './Navigation'
import Header from "./Header";
import BooksContainer from './BooksContainer';
import AddBook from './AddBook';
import About from './About';
import Footer from './Footer';


const bookAPI = " http://localhost:3000/books";
function App() 
{
    const [books, setBooks] = useState([]);
    const [isDarkMode, setIsDarkMode] = useState(false);
    const [borrowedVisible, setBorrowedVisible] = useState(true);
    const booksToDisplay = books.filter((book) => borrowedVisible || book.isBorrowed);
   


    function handleDarkModeClick() {
        setIsDarkMode((isDarkMode) => !isDarkMode);
      }

      useEffect(() => {
        fetch(bookAPI)
          .then(res => res.json())
          .then(data => setBooks(data))
      }, []);
    
      function addBook(newBook) {
        setBooks([...books, newBook]);
      }
    
      function removeBook(bookToRemove) {
        setBooks(books.filter(book => book.id !== bookToRemove.id))
      }

      function addToBorrowed(borBook) {
        setBooks(books.map(book => {
          return book.id === borBook.id ? {...borBook, isBorrowed: !borBook.isBorrowed} : book
          }  
        ))
      }
    
        function renderBookView() {
            if (booksToDisplay.length === 0 && !borrowedVisible) {
              return (<h1>No books have been borrowed yet</h1>)
            } else {
              return (
                <BooksContainer 
                  books={booksToDisplay} 
                  removeBook={removeBook} 
                  addToBorrowed={addToBorrowed}
                />
              )
            }
          }

    return (
        <div className={"App " + (isDarkMode ? "dark" : "light")}>
            <Navigation isDarkMode={isDarkMode} onDarkModeClick={handleDarkModeClick} />
            <Header  />
            <button onClick={() => setBorrowedVisible(!borrowedVisible)} > Borrowed</button>
            <Switch>
                <Route path="/addbook">
                  <AddBook addBook={addBook}/>
                </Route>
                <Route path="/home">
                {renderBookView()}
                
                </Route>
                <Route path="/about">
                <About />
                </Route>
        
            </Switch>
            <Footer />
                 
        </div>
        
    );
}

        
export default App;