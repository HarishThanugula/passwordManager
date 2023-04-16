import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import PasswordItem from '../PasswordItem'
import './index.css'

class Password extends Component {
  state = {
    passwordList: [],
    inputWebsite: '',
    inputUserName: '',
    inputPassword: '',
    searchInput: '',
    isShow: false,
  }

  showPassword = event => {
    if (event.target.checked) {
      this.setState({isShow: true})
    } else {
      this.setState({isShow: false})
    }
  }

  getPasswordList = event => {
    event.preventDefault()
    const {inputWebsite, inputUserName, inputPassword} = this.state
    const newPassword = {
      id: uuidv4(),
      inputWebsite,
      inputUserName,
      inputPassword,
    }

    this.setState(prevState => ({
      passwordList: [...prevState.passwordList, newPassword],
      inputWebsite: '',
      inputUserName: '',
      inputPassword: '',
    }))
  }

  getInputWebsite = event => {
    this.setState({inputWebsite: event.target.value})
  }

  getInputUserName = event => {
    this.setState({inputUserName: event.target.value})
  }

  getInputPassword = event => {
    this.setState({inputPassword: event.target.value})
  }

  onDeletePasswordItem = id => {
    const {passwordList} = this.state
    const filterList = passwordList.filter(
      eachPassword => eachPassword.id !== id,
    )

    this.setState({passwordList: filterList})
  }

  getFilteredPassword = event => {
    this.setState({searchInput: event.target.value})
  }

  render() {
    const {
      inputWebsite,
      inputUserName,
      inputPassword,
      passwordList,
      searchInput,
      isShow,
    } = this.state
    const count = passwordList.length
    const searchResults = passwordList.filter(eachPasswordItem =>
      eachPasswordItem.inputWebsite
        .toLowerCase()
        .includes(searchInput.toLowerCase()),
    )

    return (
      <div className="bg-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/password-manager-logo-img.png"
          alt="app logo"
          className="app-logo"
        />
        <div className="header-container">
          <div className="input-container">
            <form className="content-container" onSubmit={this.getPasswordList}>
              <h1 className="main-heading">Add New Password</h1>
              <div className="input-card">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/password-manager-website-img.png"
                  alt="website"
                  className="input-image"
                />
                <input
                  type="text"
                  className="input-element"
                  placeholder="Enter Website"
                  onChange={this.getInputWebsite}
                  value={inputWebsite}
                />
              </div>
              <div className="input-card">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/password-manager-username-img.png"
                  alt="username"
                  className="input-image"
                />
                <input
                  type="text"
                  className="input-element"
                  placeholder="Enter Username"
                  onChange={this.getInputUserName}
                  value={inputUserName}
                />
              </div>
              <div className="input-card">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/password-manager-password-img.png"
                  alt="password"
                  className="input-image"
                />
                <input
                  type="password"
                  className="input-element"
                  placeholder="Enter Password"
                  onChange={this.getInputPassword}
                  value={inputPassword}
                />
              </div>
              <button type="submit" className="add-btn">
                Add
              </button>
            </form>
            <div>
              <img
                src="https://assets.ccbp.in/frontend/react-js/password-manager-sm-img.png"
                alt="password manager"
                className="password-image"
              />
            </div>
          </div>
        </div>

        <div className="footer-container">
          <div className="count-container">
            <h1 className="counter-heading">
              Your Passwords <p className="counter">{count}</p>
            </h1>
            <div className="search-input-card">
              <img
                src="https://assets.ccbp.in/frontend/react-js/password-manager-search-img.png "
                alt="search"
                className="input-image"
              />
              <input
                type="search"
                className="search-element"
                placeholder="Search"
                onChange={this.getFilteredPassword}
                value={searchInput}
              />
            </div>
          </div>
          <hr className="divide-line" />
          <div className="checkbox-card">
            <input
              id="check"
              type="checkbox"
              className="checkbox-element"
              placeholder="Search"
              onChange={this.showPassword}
            />
            <label htmlFor="check" className="show-password">
              Show passwords
            </label>
          </div>

          {passwordList.length === 0 ? (
            <div className="no-password-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/no-passwords-img.png"
                alt="no passwords"
                className="no-password-image"
              />
              <p className="no-password">No Passwords</p>
            </div>
          ) : (
            <ul className="password-items-container">
              {searchResults.map(eachItem => (
                <PasswordItem
                  passwordItem={eachItem}
                  key={eachItem.id}
                  onDeletePasswordItem={this.onDeletePasswordItem}
                  isShow={isShow}
                />
              ))}
            </ul>
          )}
        </div>
      </div>
    )
  }
}

export default Password
