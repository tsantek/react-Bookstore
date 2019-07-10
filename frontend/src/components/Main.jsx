import React, { Component } from 'react';

import Books from './Books';
// import Search from './Search';

class Main extends Component {
    constructor(props){
        super(props)
        this.state = { 
            search : "",
            btn: 0
             }
        
    }
   
    handlSearchStateUpdate(value){
        this.setState({ search : value.target.value})
    }

    handleButtonSelect(e){ 
        let btnIndex = e.target.value;
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

                <div className="input-group mb-3 search">
                <div className="input-group-prepend">
                    <select className="btn btn-outline-secondary dropdown-toggle" name="btn-select" onChange={e => this.handleButtonSelect(e) }>
                    <option className="dropdown-item" value="0">Book</option>
                    <option className="dropdown-item" value="1">Author</option>
                    </select>
                </div>
                    <input type="text" className="form-control" placeholder="Search" onChange={(e) => this.handlSearchStateUpdate(e)}/>
                </div>

                 {/* <Search handlSearchState={this.handlSearchStateUpdate} /> */}
                 <Books books={searchedBook}  AddToCart={this.props.AddToCart}/>
        </div>
         )
    }
}
 
export default Main ;