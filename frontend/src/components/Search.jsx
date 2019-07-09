import React from 'react'

const  Search = () =>{
    return (
        <div className="input-group search">
            <input type="text" className="form-control" placeholder="Search"/>
            <div className="input-group-append" id="button-addon4">
                <button className="btn btn-outline-secondary" type="button">Search Books</button>
                <button className="btn btn-outline-secondary" type="button">Search Authors</button>
            </div>
            </div>
    )
}

export default Search;