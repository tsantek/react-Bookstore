import React, { Component } from 'react';


class Search extends Component {
    render() { 

        const onChangeValue = (e) =>{
            let value = e.target.value
            return  this.props.handlSearchState(value)
        } 

        return (
            <div className="input-group search">
                <input type="text" className="form-control" placeholder="Search" onChange={onChangeValue}/>
                <div className="input-group-append" id="button-addon4">
                    <button  className="btn btn-outline-secondary" type="button">Search Books</button>
                    <button className="btn btn-outline-secondary" type="button">Search Authors</button>
                </div>
                </div>
        )
    }
}
 

export default Search;