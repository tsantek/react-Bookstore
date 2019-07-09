import React from 'react';

const Cart = ({books}) =>{

    return(
        <div className="cart">
            Cart:

            <div className="cart-container">   
            { books.map( book => {
               if(book.inCart == true){
                   return(   
                        <div className="row">
                            <div className="col-6">
                             {book.title} 
                           </div>

                           <div className="col-4">
                            Q: 1
                           </div>

                           <div className="col-2">
                           ${book.price}  
                           </div>
                        </div>
                )
               }
            })}
            </div>
                {/* if is true &&  */}
        </div>
    )
}

export default Cart;