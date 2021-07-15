import {Component} from 'react'
import Header from '../Header'
import './index.css'

class Home extends Component {
  RedirectProductsPage = () => {
    const {history} = this.props
    console.log(history)
  }

  render() {
    return (
      <div className="home-container">
        <Header props={this.props} />
        <div className="product-content-section">
          <div className="product-content">
            <h1 className="product-title">Clothes That Get YOU Noticed</h1>
            <img
              src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-img.png"
              alt="clothes that get you noticed"
              className="home-product-mobile-image"
            />
            <p className="home-product-description">
              Fashion is part of the daily air and does not quit help that it
              changes all the time. Clothes have always been a marker of the era
              and we are in a revolution. Your fashion makes you been seen and
              heard that way you are. So, celebrate the seasons new and exciting
              fashion in your own way
            </p>
            <button
              type="button"
              onClick={this.RedirectProductsPage}
              className="shop-now-button"
            >
              Shop Now
            </button>
          </div>
          <div className="home-product-desktop-image-section">
            <img
              src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-img.png"
              alt="clothes that get you noticed"
              className="home-product-desktop-image"
            />
          </div>
        </div>
      </div>
    )
  }
}

export default Home
