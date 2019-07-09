import React from 'react';
import Book from './Book';

const Books = ({books, AddToCart}) => {

    return(
        <div className="books">
            <div className="row">
                {books.map( book => {
                    return <Book key={book.id} book={book} AddToCart={AddToCart}/>
                })}
            </div>
        </div>
    )
}

export default Books;