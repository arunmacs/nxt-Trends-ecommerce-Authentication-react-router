import {Component} from 'react'
import Loader from 'react-loader-spinner'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import './index.css'

class LoginForm extends Component {
  state = {
    username: '',
    password: '',
    stillLoading: null,
    error: false,
    errorMsg: '',
  }

  changeStateUserName = event => {
    this.setState({username: event.target.value, error: false})
  }

  changeStateUserPassword = event => {
    this.setState({password: event.target.value, error: false})
  }

  validateInputs = () => {
    const {username, password} = this.state

    if (username === '' || password === '') {
      this.setState({error: true, errorMsg: 'Input Fields Should not be Empty'})
    }
  }

  onClickSubmitForm = async event => {
    this.validateInputs()
    event.preventDefault()
    this.setState({stillLoading: true})
    const {username, password} = this.state
    const userDetails = {username, password}

    const url = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(url, options)
    const data = await response.json()
    console.log(data)

    if (response.ok) {
      const {history} = this.props
      this.setState({stillLoading: false})
      history.replace('/')
    } else {
      this.setState({error: true, errorMsg: data.error_msg})
      this.setState({stillLoading: false})
    }
  }

  renderUserNameInput = () => {
    const {username} = this.state

    return (
      <>
        <label htmlFor="username" className="label-input">
          USERNAME
        </label>
        <input
          id="username"
          type="text"
          className="user-input"
          onChange={this.changeStateUserName}
          value={username}
          placeholder="Username"
        />
      </>
    )
  }

  renderPasswordInput = () => {
    const {password} = this.state

    return (
      <>
        <label htmlFor="password" className="label-input">
          PASSWORD
        </label>
        <input
          id="password"
          type="password"
          className="user-input"
          onChange={this.changeStateUserPassword}
          value={password}
          placeholder="Password"
        />
      </>
    )
  }

  renderErrorMsg = () => {
    const {errorMsg} = this.state

    return (
      <div className="error-msg-container">
        <p className="error-msg">*{errorMsg}</p>
      </div>
    )
  }

  renderLoaderAnimation = () => (
    <div className="loader">
      <Loader
        type="Oval"
        color="#00bfff"
        className="loader"
        height={40}
        width={40}
      />
    </div>
  )

  render() {
    const {error, stillLoading} = this.state

    return (
      <div className="login-form-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
          alt="website logo"
          className="login-form-website-logo-mobile"
        />
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-login-img.png"
          alt="website login"
          className="login-form-website-banner"
        />
        <form className="form-container" onSubmit={this.onClickSubmitForm}>
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
            alt="website logo"
            className="login-form-website-logo-desktop"
          />
          <div className="input-container">{this.renderUserNameInput()}</div>
          <div className="input-container">{this.renderPasswordInput()}</div>
          <button type="submit" className="login-button">
            Login
          </button>
          {stillLoading ? this.renderLoaderAnimation() : ''}
          {error ? this.renderErrorMsg() : ''}
        </form>
      </div>
    )
  }
}

export default LoginForm
