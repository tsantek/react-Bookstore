import React from 'react';
import './App.css';
import Header from './components/Header';
import Main from './components/Main';
import Cart from './components/Cart';

function App() {
  return (
    <div className="App">
        <Header />
        <div className="container">
          <div className="row">
            <div className="col-md-8">
              <Main  />
            </div>
            <div className="col-md-4">
              <Cart />
            </div>
          </div>
        </div>
        
    </div>
  );
}

export default App;
