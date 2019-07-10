import React from 'react';

const Search = ({handleButtonSelect, handlSearchState, btn}) =>{

const handleButtonSelectSearch = (e)=>{
    const btnSelected = e.target.value;
    handleButtonSelect(btnSelected)
}

const handlSearchStateUpdateSearch = (e) =>{
    const searchValue = e.target.value;
    handlSearchState(searchValue)
}
    return(
        <div className="input-group mb-3 search">
                <div className="input-group-prepend">
                    <select className="btn btn-outline-secondary dropdown-toggle" name="btn-select" onChange={e => handleButtonSelectSearch(e)} value={btn}>
                    <option className="dropdown-item" value="0">Book</option>
                    <option className="dropdown-item" value="1">Author</option>
                    </select>
                </div>
                    <input type="text" className="form-control" placeholder="Search" onChange={(e) => handlSearchStateUpdateSearch(e)}/>
        </div>
    )
}

export default Search