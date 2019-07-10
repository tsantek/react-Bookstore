import React, { Component } from 'react';

import './App.css';
import Header from './components/Header';
import Main from './components/Main';
import Cart from './components/Cart';
import books from './api/books'

class App extends Component {

  state = {
    books: [],
    admin: false
  };
  
 componentDidMount = async() => {
    try {
      const response = await books.get('/books');
      
      if (response.status === 200) {
        //proceed...
        this.setState({
          books: response.data.map( book =>{
            return{
              ...book,
              total : 0,
          }
          })
        })
      }
      else {
        throw new Error("Error");
      }
    }catch (e){
      console.log(e)
    }
    }
  
  handlerAddToCart = (newItem) =>{
    this.setState( prevState => {
      return {
          ...prevState,
          books: prevState.books.map( book => book.id === newItem.id ? {...book, inCart: true, total: parseInt(book.total) + 1}: book)
          }
      })
  }

  handlerUpdateQ = (num, item) =>{
    this.setState( prevState => {
      return {
          ...prevState,
          books: prevState.books.map( book => book.id === item ? {...book, total: num}: book),
          }
      })
  }

  handlerRemoveFromCart = (id) =>{
    this.setState( prevState => {
      return {
          ...prevState,
          books: prevState.books.map( book => book.id === id ? {...book, inCart: false, total: 0}: book)
          }
      })
  }
  handlUpdateAdmin = () =>{
    this.setState( prevState =>{
      return{
        ...prevState,
        admin: !this.state.admin
      }
    })
  }



  render() { 
    return (
        <div className="App">
          <Header handlUpdateAdmin={this.handlUpdateAdmin} adminState={this.state.admin} />
        <div className="container">
          <div className="row">
            <div className="col-md-8">
                <Main books={this.state.books} AddToCart={this.handlerAddToCart} adminState={this.state.admin} />
            </div>
              <div className="col-md-4 cart-container-app">
                  <Cart books={this.state.books} handlerRemoveFromCart={this.handlerRemoveFromCart} totalCheckout={this.state.totalCheckout} handlerUpdateQ={this.handlerUpdateQ}/>
              </div>
            </div>
          </div>
      </div>
    );
  }
}
 
export default App; 