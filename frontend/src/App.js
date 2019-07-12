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

  handleBookChange = e => {
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

  handlePutData = id => {
    books
      .put(`/books/${id}`)
      .then(
        this.setState(prevState => {
          return {
            books: prevState.books.map(book => {
              return {
                ...book,
                editing: false
              };
            })
          };
        })
      )
      .catch(e => {
        console.log(e);
      });
  };

  render() {
    return (
      <div className="App">
        <Header
          handlUpdateAdmin={this.handlUpdateAdmin}
          adminState={this.state.admin}
        />
        <div className="container">
          <div className="row">
            <div className="col-md-8">
              <Main
                books={this.state.books}
                AddToCart={this.handlerAddToCart}
                adminState={this.state.admin}
                handleDeleteBook={this.handleDeleteBook}
                handleEditBook={this.handleEditBook}
                handleBookChange={this.handleBookChange}
                handlePutData={this.handlePutData}
              />
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
