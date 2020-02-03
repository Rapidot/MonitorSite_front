import React from 'react'
import PropTypes from 'prop-types'
import  { useField } from '../hooks/index'


const AddLoginForm = ({
  username, setUsername,
  password, setPassword,
  handleLogin
}) => {

  const { reset: resetUsername, ...username_ } = useField('text', 'Username', username, setUsername)
  const { reset: resetPassword, ...password_ } = useField('password', 'Password', password, setPassword)

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <div>
          username
          <input {...username_} />
        </div>
        <div>
          password
          <input {...password_} />
        </div>
        <button type="submit">ok</button>
        <button type="button" onClick={resetUsername} >reset username</button>
        <button type="button" onClick={resetPassword} >reset password</button>
      </form>
    </div>
  )
}

AddLoginForm.propTypes = {
  username: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired
}

export default AddLoginForm