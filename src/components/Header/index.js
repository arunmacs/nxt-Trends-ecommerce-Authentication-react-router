import {Component} from 'react'
import './index.css'

class Header extends Component {
  onClickLogOut = () => {
    const {props} = this.props
    const {history} = props
    history.replace('/login')
  }

  render() {
    return (
      <nav className="nav-container">
        <div className="nav-top-section">
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
            alt="website logo"
            className="website-header-logo"
          />
          <button
            type="button"
            onClick={this.onClickLogOut}
            className="logout-icon-button"
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-log-out-img.png"
              alt="nav logout"
              className="website-nav-logout"
            />
          </button>
        </div>
        <div className="nav-icon-link-section">
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-icon.png"
            alt="nav home"
            className="nav-link"
          />
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-products-icon.png"
            alt="nav products"
            className="nav-link"
          />
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-cart-icon.png"
            alt="nav cart"
            className="nav-link"
          />
        </div>
        <div className="nav-link-section">
          <p className="nav-link">Home</p>
          <p className="nav-link">Products</p>
          <p className="nav-link">Cart</p>
          <button
            type="button"
            onClick={this.onClickLogOut}
            className="logout-button"
          >
            Logout
          </button>
        </div>
      </nav>
    )
  }
}

export default Header
