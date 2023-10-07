import React, { Component } from "react";

class Cart extends Component {
  render() {
    const { savedProducts } = this.props;
    return (
      <div>
        <h2>Cart</h2>
        <ul>
          {savedProducts.map((product, index) => (
            <li key={index}>
              {product.name} - {product.price}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Cart;

