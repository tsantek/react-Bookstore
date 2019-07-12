import React, { Component } from "react";

import "./App.css";
import Header from "./components/Header";
import Main from "./components/Main";
import Cart from "./components/Cart";
import books from "./api/books";
import AddNewBook from "./components/AddNewBook";

class App extends Component {
  state = {
    books: [],
    admin: false
  };

  componentDidMount = async () => {
    try {
      const response = await books.get("/books");
      if (response.status === 200) {
        //proceed...
        this.setState({
          books: response.data.map(book => {
            return {
              ...book,
              total: 0
            };
          })
        });
      } else {
        throw new Error("Error");
      }
    } catch (e) {
      console.log(e);
    }
  };

  handlerAddToCart = newItem => {
    this.setState(prevState => {
      return {
        books: prevState.books.map(book =>
          book.id === newItem.id
            ? {
                ...book,
                inCart: true,
                total: parseInt(book.total) + 1
              }
            : book
        )
      };
    });
  };

  handlerUpdateQ = (num, item) => {
    this.setState(prevState => {
      return {
        books: prevState.books.map(book =>
          book.id === item ? { ...book, total: num } : book
        )
      };
    });
  };

  handlerRemoveFromCart = id => {
    this.setState(prevState => {
      return {
        books: prevState.books.map(book =>
          book.id === id ? { ...book, inCart: false, total: 0 } : book
        )
      };
    });
  };

  handlUpdateAdmin = () => {
    this.setState({
      admin: !this.state.admin
    });
  };

  handleDeleteBook = async bookId => {
    // axios
    try {
      const response = await books.delete(`/books/${bookId}`);
      if (response.status === 200) {
        //proceed..
        this.setState(prevState => {
          return {
            books: prevState.books.filter(book => book.id !== bookId)
          };
        });
      } else {
        throw new Error("Error");
      }
    } catch (e) {
      console.log(e);
    }
    // end of axios
  };

  handleAddNewBook = async newBook => {
    try {
      const response = await books.post("/books", newBook);
      if (response.status === 200) {
        //proceed...
        console.log(response.data);
        this.setState(prevState => {
          return {
            books: [...prevState.books, response.data]
          };
        });
      } else {
        throw new Error("Error");
      }
    } catch (e) {
      console.log(e);
    }
  };

  handleEditBook = id => {
    this.setState(prevState => {
      return {
        books: prevState.books.map(book => {
          return {
            ...book,
            editing: book.id === id
          };
        })
      };
    });
  };

  onChange = e => {
    const newBody = e.target.value;
    const myName = e.target.name;

    this.setState(prevState => {
      return {
        books: prevState.books.map(book => {
          if (book.editing) {
            return {
              ...book,
              [myName]: newBody
            };
          } else {
            return { ...book };
          }
        })
      };
    });
  };

  patchEditPost = async (id, changedData) => {
    try {
      await books.put(`/books/${id}`, changedData);
      this.setState(prevState => {
        return {
          books: prevState.books.map(book => {
            return {
              ...book,
              editing: false
            };
          })
        };
      });
    } catch (e) {
      console.log(e);
    }
  };

  render() {
    const postBeingEdited = this.state.books.find(book => book.editing);
    const editBook = e => {
      e.preventDefault();
      this.patchEditPost(postBeingEdited.id, postBeingEdited);
    };

    return (
      <div className="App">
        <Header
          handlUpdateAdmin={this.handlUpdateAdmin}
          adminState={this.state.admin}
        />
        <div className="container">
          <div className="row">
            <div className="col-md-8">
              {postBeingEdited ? (
                <div>
                  <h4>Add a new Book</h4>
                  <form onSubmit={editBook}>
                    <div className="form-group">
                      <label>Title</label>
                      <input
                        type="text"
                        name="title"
                        className="form-control"
                        id="title"
                        placeholder="Enter title"
                        onChange={this.onChange}
                        value={postBeingEdited.title}
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
                        onChange={this.onChange}
                        value={postBeingEdited.subtitle}
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
                        onChange={this.onChange}
                        value={postBeingEdited.author}
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
                        onChange={this.onChange}
                        value={postBeingEdited.published}
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
                        onChange={this.onChange}
                        value={postBeingEdited.publisher}
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
                        onChange={this.onChange}
                        value={postBeingEdited.pages}
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
                        onChange={this.onChange}
                        value={postBeingEdited.description}
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
                        onChange={this.onChange}
                        value={postBeingEdited.website}
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
                        onChange={this.onChange}
                        value={postBeingEdited.price}
                      />
                    </div>
                    <button type="submit" className="btn btn-primary">
                      Done
                    </button>
                  </form>
                </div>
              ) : (
                <Main
                  books={this.state.books}
                  AddToCart={this.handlerAddToCart}
                  adminState={this.state.admin}
                  handleDeleteBook={this.handleDeleteBook}
                  handleEditBook={this.handleEditBook}
                />
              )}
            </div>
            {!this.state.admin ? (
              <div className="col-md-4 cart-container-app">
                <Cart
                  adminState={this.state.admin}
                  books={this.state.books}
                  handlerRemoveFromCart={this.handlerRemoveFromCart}
                  totalCheckout={this.state.totalCheckout}
                  handlerUpdateQ={this.handlerUpdateQ}
                />
              </div>
            ) : (
              <AddNewBook handleAddNewBook={this.handleAddNewBook} />
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
