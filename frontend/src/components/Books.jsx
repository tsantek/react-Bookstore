import React from "react";
import Book from "./Book";

const Books = ({
  books,
  AddToCart,
  btn,
  adminState,
  handleDeleteBook,
  handleEditBook
}) => {
  return (
    <div className="books">
      <div className="row">
        {books.map(book => {
          return (
            <Book
              key={book.id}
              book={book}
              AddToCart={AddToCart}
              btn={btn}
              adminState={adminState}
              handleDeleteBook={handleDeleteBook}
              handleEditBook={handleEditBook}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Books;
