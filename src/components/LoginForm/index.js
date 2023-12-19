/* eslint-disable react/no-unescaped-entities */
import {Component} from 'react'

import './index.css'

class LoginForm extends Component {
  // eslint-disable-next-line react/no-unused-state
  state = {
    username: '',
    password: '',
    onBtnClick: false,
    errorMsg: '',
  }

  userAuthorize = () => {
    const {history} = this.props
    history.replace('/')
  }

  onFailure = errorMsg => {
    this.setState({onBtnClick: true, errorMsg})
  }

  submitDetails = async event => {
    event.preventDefault()
    const {username, password} = this.state
    const userDetails = {username, password}
    const url = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(url, options)
    // eslint-disable-next-line no-unused-vars
    const data = await response.json()
    if (response.ok === true) {
      this.userAuthorize()
      this.setState(prevState => ({onBtnClick: !prevState.onBtnClick}))
    } else {
      this.onFailure(data.error_msg)
    }
  }

  getUser = event => {
    this.setState({username: event.target.value})
  }

  trackPassword = event => {
    this.setState({password: event.target.value})
  }

  passwordDetails = () => {
    // eslint-disable-next-line no-unused-vars
    const {password} = this.state
    return (
      <>
        <label htmlFor="passwordId">Password</label>
        <input
          id="passwordId"
          placeholder="password"
          type="password"
          className="user-input"
          onChange={this.trackPassword}
        />
      </>
    )
  }

  userDetails = () => {
    // eslint-disable-next-line no-unused-vars
    const {username} = this.state

    return (
      <>
        <label htmlFor="usernameId">Username</label>
        <input
          id="usernameId"
          placeholder="Username"
          type="text"
          className="user-input"
          onChange={this.getUser}
        />
      </>
    )
  }

  render() {
    // eslint-disable-next-line no-unused-vars
    const {onBtnClick, errorMsg} = this.state
    console.log(onBtnClick)
    return (
      <div className="bg-login-container">
        <div className="website-login-img-container">
          <img
            className="website-login-img"
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-login-img.png"
            alt="website login"
          />
        </div>
        <form className="login-container">
          <img
            className="website-logo-img"
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
            alt="website logo"
          />
          <div className="username-container">{this.userDetails()}</div>
          <div className="username-container">{this.passwordDetails()}</div>
          <button
            onClick={this.submitDetails}
            className="login-button"
            type="submit"
          >
            Login
          </button>
          {onBtnClick && <p className="paraa">*{errorMsg}</p>}
        </form>
      </div>
    )
  }
}
export default LoginForm
