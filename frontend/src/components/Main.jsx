import React, { Component } from 'react';

import Books from './Books';
import Search from './Search';

class Main extends Component {
    constructor(props){
        super(props)
        this.state = { 
            search : "",
            btn: 0
             }
    
    }


   
    handlSearchStateUpdate = (value) =>{
        this.setState({ search : value})
    }

    handleButtonSelect = (btnIndex) =>{ 
        this.setState({
            btn: btnIndex
        })
    }

    render() { 
            let searchedBook;
            if(this.state.btn == 0){
                 searchedBook = this.props.books.filter( item => {
                    return item.title.indexOf(this.state.search) !== -1; 
                })
            }else{
                searchedBook = this.props.books.filter( item => { 
                    return item.author.indexOf(this.state.search) !== -1; 
                })
            } 

       return (
        <div>
                 <Search handlSearchState={this.handlSearchStateUpdate} handleButtonSelect={this.handleButtonSelect} />
                 <Books books={searchedBook}  AddToCart={this.props.AddToCart}/>
        </div>
         )
    }
}
 
export default Main ;