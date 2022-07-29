import React, { useState } from "react";





const bookAPI = " https://elimishajson.herokuapp.com/books";

function AddBook ({addBook})
 {
  
  const [title, setTitle] = useState("");
  const [isbn, setIsbn] = useState("");
  const [pageCount, setPageCount] = useState("");
  const [publishedDate, setPublishedDate] = useState("");
  const [thumbnailUrl, setThumbnailUrl] = useState("");
  const [shortDescription, setShortDescription] = useState("");
  const [longDescription, setLongDescription] = useState("");
  const [status, setStatus] = useState("");
  const [authors, setAuthors] = useState("");
  const [categories, setCategories] = useState("");

  
  function handleSubmit(e) {
    e.preventDefault();
    fetch(bookAPI, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title,
        isbn,
        pageCount,
        publishedDate,
        thumbnailUrl,
        shortDescription,
        longDescription,
        status,
        authors,
        categories,
      }),
    })
      .then((r) => r.json())
      .then((newBook) => addBook(newBook));

    setTitle("");
    setIsbn("");
    setPageCount("");
    setPublishedDate("");
    setThumbnailUrl("");
    setShortDescription("");
    setLongDescription("");
    setStatus("");
    setAuthors("");
    setCategories("");
  }

 


  return (
    <div>
    <form className="new-book-form" onSubmit={handleSubmit} >
      <input 
        placeholder="Title" 
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <input 
        placeholder="Isbn" 
        value={isbn}
        onChange={(e) => setIsbn(e.target.value)}
      />

      <input 
        placeholder="PageCount" 
        value={pageCount}
        onChange={(e) => setPageCount(e.target.value)}
      />

      <input 
        placeholder="PublishedDate" 
        value={publishedDate}
        onChange={(e) => setPublishedDate(e.target.value)}
      />

      <input 
        placeholder="ThumbnailUrl" 
        value={thumbnailUrl}
        onChange={(e) => setThumbnailUrl(e.target.value)}
      />

      <textarea 
        placeholder="Write the short description..." 
        rows={10} 
        value={shortDescription}
        onChange={(e) => setShortDescription(e.target.value)}
      />

      <textarea 
        placeholder="Write the long description..." 
        rows={10} 
        value={longDescription}
        onChange={(e) => setLongDescription(e.target.value)}
      />

      <input 
        placeholder="Status" 
        value={status}
        onChange={(e) => setStatus(e.target.value)}
      />

      <input 
        placeholder="Authors" 
        value={authors}
        onChange={(e) => setAuthors(e.target.value)}
      />

      <input 
        placeholder="Categories" 
        value={categories}
        onChange={(e) => setCategories(e.target.value)}
      />
      
      
      <input 
        type="submit" 
        value="Add book to library" 
      />
    </form>
    </div>
  );
};

export default AddBook;