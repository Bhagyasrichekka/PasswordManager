import './index.css'

const CardItem = props => {
  const {eachItem, deleteItem} = props
  const {id, user, website, password, isPasswordVisible} = eachItem
  const initial = user[0].toUpperCase()
  const passwordText = isPasswordVisible ? password : '********'

  const callDeleteFun = () => {
    deleteItem(id)
  }

  return (
    <li className="card">
      <div className="profile-details">
        <p className="profile">{initial}</p>
        <p>
          {website}
          <br />
          {user}
          <br />
          {passwordText}
        </p>
      </div>
      <button type="button" onClick={callDeleteFun}>
        <img
          src="https://assets.ccbp.in/frontend/react-js/password-manager-delete-img.png"
          alt="delete"
          data-testId="delete"
          className="icons"
        />
      </button>
    </li>
  )
}
export default CardItem
