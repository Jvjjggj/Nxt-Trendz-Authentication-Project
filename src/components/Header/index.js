// eslint-disable-next-line no-unused-vars
import {Link} from 'react-router-dom'
import './index.css'
import {Component} from 'react'

class Header extends Component {
  render() {
    return (
      <header className="header">
        <img
          className="web-logo"
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
          alt="website logo"
        />
        <ul className="links-container">
          <Link className="link" to="/">
            <li>Home</li>
          </Link>
          <Link className="link" to="./products">
            <li>Products</li>
          </Link>
          <Link className="link" to="./cart">
            <li>Cart</li>
          </Link>
          <Link to="./logout">
            <button type="submit" className="btn-logout">
              Logout
            </button>
          </Link>
        </ul>
      </header>
    )
  }
}

export default Header
