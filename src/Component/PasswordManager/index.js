import {Component} from 'react'
import {v4} from 'uuid'
import CardItem from '../CardItem'
import './index.css'

class PasswordManager extends Component {
  state = {
    passwordsList: [],
    website: '',
    user: '',
    password: '',
  }

  onChangeWebsite = event => {
    this.setState({website: event.target.value})
  }

  onChangeUsername = event => {
    this.setState({user: event.target.value})
  }

  onChangePassword = event => {
    this.setState({password: event.target.value})
  }

  deleteItem = id => {
    this.setState(prevState => ({
      passwordsList: prevState.passwordsList.filter(
        eachItem => eachItem.id !== id,
      ),
    }))
  }

  addItemsToList = event => {
    event.preventDefault()
    const {website, user, password, isPasswordsVisible} = this.state

    const newItem = {
      id: v4(),
      website,
      user,
      password,
      isPasswordsVisible: false,
    }
    this.setState(prevState => ({
      passwordsList: [...prevState.passwordsList, newItem],
    }))
    this.setState({user: '', website: '', password: ''})
  }

  updateVisiblePassWords = event => {
    this.setState(prevState => ({
      passwordsList: prevState.passwordsList.map(eachItem => ({
        ...eachItem,
        isPasswordsVisible: !prevState.isPasswordsVisible,
      })),
    }))
  }

  render() {
    const {passwordsList, website, user, password} = this.state
    return (
      <div className="bg">
        <div>
          <img
            src="https://assets.ccbp.in/frontend/react-js/password-manager-logo-img.png"
            alt="app logo"
            className="logo"
          />
        </div>
        <div className="top-card">
          <div className="form-img-container">
            <form className="form-details" onSubmit={this.addItemsToList}>
              <h1 className="heading">Add New Password</h1>
              <div>
                <div className="input-container">
                  <img
                    src="https://assets.ccbp.in/frontend/react-js/password-manager-website-img.png"
                    alt="website"
                    className="icons"
                  />
                  <input
                    value={website}
                    type="text"
                    placeholder="Enter Website"
                    onChange={this.onChangeWebsite}
                  />
                </div>
                <div className="input-container">
                  <img
                    src="https://assets.ccbp.in/frontend/react-js/password-manager-username-img.png"
                    alt="username"
                    className="icons"
                  />
                  <input
                    value={user}
                    type="text"
                    placeholder="Enter Username"
                    onChange={this.onChangeUsername}
                  />
                </div>
                <div className="input-container">
                  <img
                    src="https://assets.ccbp.in/frontend/react-js/password-manager-password-img.png"
                    alt="password"
                    className="icons"
                  />
                  <input
                    value={password}
                    type="password"
                    placeholder="Enter Password"
                    onChange={this.onChangePassword}
                  />
                </div>
              </div>
              <button className="add-btn" type="submit">
                Add
              </button>
            </form>
            <img
              src="https://assets.ccbp.in/frontend/react-js/password-manager-lg-img.png"
              alt="password manager"
              className="top-section-img"
            />
          </div>
        </div>
        <div className="bottom-section">
          <div className="heading-searchBar">
            <h1 className="heading">Your Passwords</h1>
            <div className="input-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/password-manager-search-img.png"
                alt="search"
                className="icons"
              />
              <input type="search" placeholder="Search" />
            </div>
          </div>
          <hr className="line" />
          <div className="show-password">
            <input
              type="checkbox"
              id="show"
              onClick={this.updateVisiblePassWords}
            />
            <label className="label-text" htmlFor="show">
              Show Passwords
            </label>
          </div>
          <ul>
            {passwordsList.map(eachItem => (
              <CardItem
                key={eachItem.id}
                eachItem={eachItem}
                deleteItem={this.deleteItem}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default PasswordManager
