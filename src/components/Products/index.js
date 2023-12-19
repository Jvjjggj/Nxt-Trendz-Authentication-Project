import {Component} from 'react'

import Header from '../Header'
import './index.css'

class Products extends Component {
  render() {
    return (
      <div className="product-container11">
        <Header />
        <div className="product-img-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-products-icon.png"
            alt="nav products"
          />
        </div>
      </div>
    )
  }
}
export default Products
