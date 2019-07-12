import React, { Component } from "react";

class Cart extends Component {
  render() {
    const { books, handlerUpdateQ, handlerRemoveFromCart } = this.props;
    let totalCheckout = 0;
    const handleChangeQ = (e, book) => {
      let total = e.target.value;
      handlerUpdateQ(parseInt(total), book);
    };

    const handleRemoveItemFromCart = (e, id) => {
      return handlerRemoveFromCart(id);
    };

    return (
      <div className="cart">
        <h3>Cart:</h3>
        <div className="cart-container">
          {books.map(book => {
            if (book.inCart === true) {
              totalCheckout += book.price * book.total;
              return (
                <div key={book.id} className="row cart-item">
                  <div className="col-6">{book.title}</div>

                  <div className="col-6">
                    <div className="row">
                      <div className="col-6">
                        Q:
                        <select
                          name="quantity"
                          value={book.total}
                          onChange={e => handleChangeQ(e, book.id)}
                        >
                          <option value="1">1</option>
                          <option value="2">2</option>
                          <option value="3">3</option>
                          <option value="4">4</option>
                          <option value="5">5</option>
                          <option value="6">6</option>
                          <option value="7">7</option>
                          <option value="8">8</option>
                          <option value="9">9</option>
                          <option value="10">10</option>
                          <option value="11">11</option>
                          <option value="12">12</option>
                          <option value="13">13</option>
                          <option value="14">14</option>
                          <option value="15">15</option>
                          <option value="16">16</option>
                          <option value="17">17</option>
                          <option value="18">18</option>
                          <option value="19">19</option>
                          <option value="20">20</option>
                        </select>
                      </div>

                      <div className="col-3">${book.price}</div>

                      <div className="col-3">
                        <p
                          className="close-btn"
                          onClick={e => handleRemoveItemFromCart(e, book.id)}
                        >
                          X
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            }
            return null;
          })}
          <h4 className="total-cart">
            {totalCheckout > 0
              ? `Total: $ ${totalCheckout}`
              : "Your Cart is empty"}
          </h4>
        </div>
      </div>
    );
  }
}

export default Cart;
