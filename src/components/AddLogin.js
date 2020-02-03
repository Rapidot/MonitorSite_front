import React, { useState } from 'react'
import AddLoginForm from '../components/AddLoginForm'
//import loginService from '../services/login'
//import blogService from '../services/blogs'

const AddLogin = ({ username, setUsername, password, setPassword, handleLogin }) => {

  const [loginVisible, setLoginVisible] = useState(false)

  const hideWhenVisible = { display: loginVisible ? 'none' : '' }
  const showWhenVisible = { display: loginVisible ? '' : 'none' }
  console.log(username+'---AddLogin')
  return (
    <div>
      <div style={hideWhenVisible}>
        <button onClick={() => setLoginVisible(true)}>login</button>
      </div>
      <div style={showWhenVisible}>
        <AddLoginForm
          username={username}
          setUsername={setUsername}
          password={password}
          setPassword={setPassword}
          handleLogin={handleLogin}
        />
        <button onClick={() => setLoginVisible(false)}>cancel</button>
      </div>
    </div>
  )
}

export default AddLogin