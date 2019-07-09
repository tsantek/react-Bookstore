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
  
  async  componentDidMount(){
    const response = await books.get('/books');
    this.setState({books: response.data})
  }
  

  render() { 
    return (
      <div className="App">
        <Header />
      <div className="container">
        <div className="row">
          <div className="col-md-8">
             <Search />
              <Main books={this.state.books}  />
           </div>
            <div className="col-md-4">
              <Cart />
            </div>
          </div>
        </div>
    </div>
    );
  }
}
 
export default App; 