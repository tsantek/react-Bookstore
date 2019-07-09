import React from 'react';

import Books from './Books';


const Main =({books, AddToCart}) => {
    return ( 
        <div>
            <Books books={books}  AddToCart={AddToCart}/>
        </div>
    );
}
 
export default Main;