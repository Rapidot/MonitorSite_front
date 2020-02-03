import React, { useState, useEffect } from 'react'

import Notification from './components/Notification'
import Footer from './components/Footer'
import AddLogin from './components/AddLogin'
import AddBlog from './components/AddBlog'
import BlogListForm from './components/BlogListForm'

import blogService from './services/blogs'
import loginService from './services/login'

const App = () => {
  const [blogs, setBlogs] = useState([])
  const [errorMessage, setErrorMessage] = useState(null)
  const [username, setUsername] = useState('hpakkane')
  const [password, setPassword] = useState('salainen')
  const [user, setUser] = useState(null)

  /* Blogit APIsta vain alustuksessa ->[] */
  useEffect(() => {
    blogService
      .getAll()
      .then(initBlogs =>
        setBlogs(initBlogs))
  }, [])

  /* User localStorage:sta vain alustuksessa ->[] */
  useEffect(() => {
    const loggedUserJSON = window.localStorage.getItem('loggedBlogAppUser')
    if (loggedUserJSON) {
      const user = JSON.parse(loggedUserJSON)
      setUser(user)
      blogService
        .setToken(user.token)
    }
  }, [])

  const handleLogin = async (event) => {
    event.preventDefault()
    console.log('logging in with', username, password)
    try {
      const user = await loginService.login({
        username, password,
      })
      //Talletetaan user localStorage:en
      window.localStorage.setItem('loggedBlogAppUser', JSON.stringify(user)
      )
      blogService.setToken(user.token)
      setUser(user)
      setUsername('')
      setPassword('')
    } catch (exception) {
      setErrorMessage('wrong credentials')
      setTimeout(() => {
        setErrorMessage(null)
      }, 5000)
    }
  }

  const handleLogout = (event) => {
    event.preventDefault()
    if(window.confirm('Do you really want to leave?')){
      console.log('logging out')
      //Poistetaan user localStorage:sta
      window.localStorage.removeItem('loggedBlogAppUser')
      window.location.reload()
    }
  }

  if (user === null) {
    return (
      <div>
        <Notification message={errorMessage} />
        <AddLogin username={username} setUsername={setUsername}
          password={password} setPassword={setPassword}
          handleLogin={handleLogin}
        />
        <Footer />
      </div>
    )
  }

  return (
    <div>
      <h2>blogs</h2>
      <div>
        <p>{user.name} logged in</p>
      </div>
      <button onClick={handleLogout}>logout</button>
      <h2>create new</h2>
      <div>
        <AddBlog user={user} blogs={blogs} setBlogs={setBlogs} />
      </div>
      {BlogListForm(blogs, setBlogs, user)}
      <Footer />
    </div>
  )
}

export default App
