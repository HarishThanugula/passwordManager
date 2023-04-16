import './index.css'

const PasswordItem = props => {
  const {passwordItem, onDeletePasswordItem, isShow} = props
  const {inputWebsite, inputUserName, inputPassword, id} = passwordItem

  const onDeletePassword = () => {
    onDeletePasswordItem(id)
  }

  return (
    <li className="password-item">
      <div className="card">
        <p className="website">{inputWebsite}</p>
        <p className="username">{inputUserName}</p>
        {isShow ? (
          <p className="password">{inputPassword}</p>
        ) : (
          <img
            src="https://assets.ccbp.in/frontend/react-js/password-manager-stars-img.png"
            alt="stars"
            className="star-image"
          />
        )}
      </div>
      <button type="button" data-testId="delete" onClick={onDeletePassword}>
        <img
          src="https://assets.ccbp.in/frontend/react-js/password-manager-delete-img.png"
          alt="delete"
          className="delete-image"
        />
      </button>
    </li>
  )
}

export default PasswordItem
