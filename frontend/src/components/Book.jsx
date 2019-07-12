import React from "react";

const Book = ({
  book,
  AddToCart,
  btn,
  adminState,
  handleDeleteBook,
  handleEditBook
}) => {
  let buttonText;

  let date = new Date(book.published);
  let convertedDate = `${date.getMonth() + 1}/${date.getFullYear()} `;

  const AddFunction = () => {
    if (adminState) {
      return handleDeleteBook(book.id);
    } else {
      return AddToCart(book);
    }
  };

  const styleColor = "#007bff";

  let button = !book.inCart ? "Add to Cart" : "In Cart";
  buttonText = !adminState ? button : "Remove";

  let editBtn = (
    <button
      type="button"
      className="btn btn-success"
      onClick={() => handleEditBook(book.id)}
    >
      Edit
    </button>
  );

  return (
    <div className="col-sm-6 book-item-container">
      {btn}
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">{book.title}</h5>
          <p className="card-text">
            <b>{book.subtitle}</b>
          </p>
          <p className="card-text">{book.author}</p>
          <p className="card-text">{book.description}</p>
          <a href={book.website} target="__blank" className="card-text">
            <span style={{ color: "black" }}>Web:</span> {book.website}
          </a>
          <p className="card-text published">
            Published: {convertedDate} by {book.publisher}
          </p>
          <p>Pages: ${book.pages}</p>
          <p>
            Price: <b>${book.price}</b>
          </p>
          {adminState && editBtn}
          <button
            style={{ float: "right", backgroundColor: styleColor }}
            onClick={AddFunction}
            className="btn btn-primary"
          >
            {buttonText}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Book;
