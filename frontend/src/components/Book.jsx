import React from 'react'

const Book = ({book}) =>{
    console.log(book)
    return (
        <div className="col-sm-6 book-item-container">
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title">{book.title}</h5>
                    <p className="card-text">{book.subtitle}</p>
                    <p className="card-text">{book.Author}</p>
                    <p className="card-text">{book.description}</p>
                    <p className="card-text">{book.published} by {book.publisher}</p>
                    <a href="#" className="btn btn-primary">Go somewhere</a>
                </div>
            </div>
        </div>
    )
}

export default Book