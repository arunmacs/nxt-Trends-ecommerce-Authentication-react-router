import {Component} from 'react'
import './index.css'

class LoginForm extends Component {
  state = {username: '', password: '', error: false, errorMsg: ''}

  changeStateUserName = event => {
    this.setState({username: event.target.value, error: false})
  }

  changeStateUserPassword = event => {
    this.setState({password: event.target.value, error: false})
  }

  onClickSubmitForm = async event => {
    event.preventDefault()
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
      history.replace('/')
    } else {
      this.setState({error: true, errorMsg: data.error_msg})
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

  render() {
    const {error} = this.state

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
          {error ? this.renderErrorMsg() : ''}
        </form>
      </div>
    )
  }
}

export default LoginForm
