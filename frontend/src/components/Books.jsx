import React from 'react';
import Book from './Book';

const Books = ({books, AddToCart, btn}) => {

    return(
        <div className="books">
            <div className="row">
                {books.map( book => {
                    return <Book key={book.id} book={book} AddToCart={AddToCart} btn={btn}/>
                })}
            </div>
        </div>
    )
}

export default Books;