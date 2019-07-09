import React from 'react'

const Book = ({book}) =>{


    let date = new Date(book.published);
    let convertedDate = `${date.getMonth() + 1}/${date.getFullYear()} `
   


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
                    <a style={{float:"right"}} href="#" className="btn btn-primary">Add to Cart</a>
                </div>
            </div>
        </div>
    )
}

export default Book