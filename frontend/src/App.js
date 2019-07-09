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
        this.setState({books: response.data})
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
          books: prevState.books.map( book => book.id === newItem.id ? {...book, inCart: true}: book)
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
            <div className="col-md-4">
                <Cart booksv={this.state.books}/>
            </div>
          </div>
        </div>
    </div>
    );
  }
}
 
export default App; 