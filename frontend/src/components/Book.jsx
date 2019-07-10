import React, { Component } from 'react';

class  Book extends Component {
    render() { 
    
    const {book, AddToCart, btn} = this.props;
    
    let date = new Date(book.published);
    let convertedDate = `${date.getMonth() + 1}/${date.getFullYear()} `
   
    const AddToCartFunction = () =>{
        return  AddToCart(book);
    }

    const styleColor = '#007bff';

    return (
        <div className="col-sm-6 book-item-container">
            {btn}
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title">{book.title}</h5>
                    <p className="card-text"><b>{book.subtitle}</b></p>
                    <p className="card-text">{book.author}</p>
                    <p className="card-text">{book.description}</p>
                    <a href={book.website} target="__blank" className="card-text"><span style={{color:'black'}}>Web:</span> {book.website}</a>
                    <p className="card-text published">Published: {convertedDate} by {book.publisher}</p>
                    <p>Pages: ${book.pages}</p>
                    <p>Price: <b>${book.price}</b></p>
                    <button style={{float:"right", backgroundColor: styleColor}} onClick={AddToCartFunction} className="btn btn-primary">{!book.inCart ? 'Add to Cart' : 'In Cart' }</button>
                </div>
            </div>
        </div>
    )

    }
}
 
export default Book ;