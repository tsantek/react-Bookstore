import React, { Component } from 'react';

import Books from './Books';

class Main extends Component {
        state = { 
            search : ""
             }

    handlSearchStateUpdateSearch = (input) => {
        const str = input.target.value;
        this.setState(prevState =>{
            return{
                ...prevState,
                search: str
            }
        })
      }

       
    render() {
        let filterd=[];

        if(this.state.search.length > 0){
            Object.keys(this.props.books).forEach(key => {
                if(this.props.books[key].title.includes(this.state.search) || this.props.books[key].author.includes(this.state.search)){
                   filterd.push(this.props.books[key])
                }   
            })
        }else{
            filterd = this.props.books;
        }
   
       return (
        <div>
            <div className="input-group mb-3 search">
                    <input type="text" className="form-control" placeholder="Search" onChange={e => this.handlSearchStateUpdateSearch(e)}/>
             </div>
                 <Books books={filterd} btn={this.state.btn} AddToCart={this.props.AddToCart}/>
        </div>
         )
    }
}
 
export default Main ;