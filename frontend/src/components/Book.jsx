import React from 'react'

const Book = ({book, AddToCart}) =>{

    let date = new Date(book.published);
    let convertedDate = `${date.getMonth() + 1}/${date.getFullYear()} `
   
    const AddToCartFunction = () =>{
        return  AddToCart(book);
    }

    return (
        <div className="col-sm-6 book-item-container">
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title">{book.title}</h5>
                    <p className="card-text"><b>{book.subtitle}</b></p>
                    <p className="card-text">{book.Author}</p>
                    <p className="card-text">{book.description}</p>
                    <p className="card-text">Published: {convertedDate} by {book.publisher}</p>
                    <p>Pages: ${book.pages}</p>
                    <p>Price: <b>${book.price}</b></p>
                    <button style={{float:"right"}} onClick={AddToCartFunction} className="btn btn-primary">Add to Cart</button>
                </div>
            </div>
        </div>
    )
}

export default Book