import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import Main from './components/Main';
import Cart from './components/Cart';
import books from './api/books'
import Search from './components/Search';

class App extends Component {

  state = {
    books: []
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
          }),
          totalCheckout: 0
        })
      }
      else {
        // throw error and go to catch block
        throw new Error("Error");
      }
    }catch (e){
      console.log(e)
      // create msg in state to show error if something is wrong
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
    console.log(id)
    this.setState( prevState => {
      return {
          ...prevState,
          books: prevState.books.map( book => book.id === id ? {...book, inCart: false, total: 0}: book)
          }
      })
  }

  render() { 
    return (
      <div className="App">
        <Header />
      <div className="container">
        <div className="row">
          <div className="col-md-8">
             <Search />
              <Main books={this.state.books} AddToCart={this.handlerAddToCart} />
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