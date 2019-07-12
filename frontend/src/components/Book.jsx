import React from "react";

const Book = ({
  book,
  AddToCart,
  btn,
  adminState,
  handleDeleteBook,
  handleEditBook,
  handleBookChange,
  handlePutData
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

  const onChange = e => {
    handleBookChange(e);
  };

  const onSubmit = e => {
    e.preventDefault();
    // document.querySelector("#exampleModal").modal("toggle");
    handlePutData(book.id);
  };

  const styleColor = "#007bff";

  let button = !book.inCart ? "Add to Cart" : "In Cart";
  buttonText = !adminState ? button : "Remove";

  let editBtn = (
    <button
      type="button"
      className="btn btn-success"
      data-toggle="modal"
      data-target={`#exampleModal${book.id}`}
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
      {/* MODAL */}
      <div
        className="modal fade"
        id={`exampleModal${book.id}`}
        // tabindex="-1"
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                {book.title}
              </h5>
            </div>
            <div className="modal-body">
              {/* body modal */}
              <form onSubmit={onSubmit}>
                <div className="form-group">
                  <label>Title</label>
                  <input
                    type="text"
                    name="title"
                    className="form-control"
                    id="title"
                    defaultValue={book.title}
                    onChange={onChange}
                  />
                </div>
                <div className="form-group">
                  <label>Subtitle</label>
                  <input
                    type="text"
                    name="subtitle"
                    className="form-control"
                    id="title"
                    placeholder="Enter subtitile"
                    defaultValue={book.subtitle}
                    onChange={onChange}
                  />
                </div>
                <div className="form-group">
                  <label>Author</label>
                  <input
                    type="text"
                    name="author"
                    className="form-control"
                    id="title"
                    placeholder="Enter author"
                    defaultValue={book.author}
                    onChange={onChange}
                  />
                </div>
                <div className="form-group">
                  <label>Published</label>
                  <input
                    type="date"
                    name="published"
                    className="form-control"
                    id="title"
                    placeholder="Enter published"
                    defaultValue={book.published}
                    onChange={onChange}
                  />
                </div>
                <div className="form-group">
                  <label>Publisher</label>
                  <input
                    type="text"
                    name="publisher"
                    className="form-control"
                    id="title"
                    placeholder="Enter publisher"
                    defaultValue={book.publisher}
                    onChange={onChange}
                  />
                </div>
                <div className="form-group">
                  <label>Pages</label>
                  <input
                    type="text"
                    name="pages"
                    className="form-control"
                    id="title"
                    placeholder="Enter pages"
                    defaultValue={book.pages}
                    onChange={onChange}
                  />
                </div>
                <div className="form-group">
                  <label>Description</label>
                  <input
                    type="text"
                    name="description"
                    className="form-control"
                    id="title"
                    placeholder="Enter description"
                    defaultValue={book.description}
                    onChange={onChange}
                  />
                </div>
                <div className="form-group">
                  <label>Website</label>
                  <input
                    type="text"
                    name="website"
                    className="form-control"
                    id="title"
                    placeholder="Enter website"
                    defaultValue={book.website}
                    onChange={onChange}
                  />
                </div>
                <div className="form-group">
                  <label>Price</label>
                  <input
                    type="number"
                    name="price"
                    className="form-control"
                    id="price"
                    placeholder="Enter price"
                    defaultValue={book.price}
                    onChange={onChange}
                  />
                </div>
                <button
                  type="submit"
                  style={{ float: "right" }}
                  className="btn btn-primary"
                  data-dismiss="modal"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* MODAL */}
    </div>
  );
};

export default Book;
