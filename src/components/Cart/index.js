import {Component} from 'react'

import Header from '../Header'

import './index.css'

class Cart extends Component {
  render() {
    return (
      <div className="cart-conatiner">
        <Header />
        <div className="product-img-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-cart-icon.png"
            alt="nav cart"
          />
        </div>
      </div>
    )
  }
}
export default Cart
