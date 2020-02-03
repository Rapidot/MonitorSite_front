import React, { useState } from 'react'
//import blogService from '../services/blogs'
import blogService from '../services/blogs'
import AddBlogForm from '../components/AddBlogForm'
import Togglable from '../components/Togglable'

const AddBlog = ({ user, blogs, setBlogs }) => {

  const [title, setTitle] = useState('')
  const [author, setAuthor] = useState('')
  const [url, setUrl] = useState('')

  const AddBlogFormRef = React.createRef()

  const handleSubmit = async (event) => {
    event.preventDefault()
    console.log('handleSubmit--'+title+author+url)
    AddBlogFormRef.current.toggleVisibility()
    console.log('addBlog')
    const blogObject = {
      title: title,
      author:author,
      url:url,
      likes:0
    }

    const userObject = {
      username:user.username,
      name:user.name,
      id:''
    }

    blogService
      .create(blogObject)
      .then(data => {
      //1.Kantaan lisätyn blogin responseen lisätään user ja lisätään blogs:iin
        userObject.id = data.user
        data.user = userObject
        setBlogs(blogs.concat(data))
        console.log(data)
        console.log(blogs)
        console.log(userObject)
        setTitle('')
        setAuthor('')
        setUrl('')
      })
  }

  return (
    <Togglable buttonLabel= "ok" ref={AddBlogFormRef}>
      <AddBlogForm
        title={title} setTitle={setTitle}
        author={author} setAuthor={setAuthor}
        url={url} setUrl={setUrl}
        handleNewBlog={handleSubmit}
      />
    </Togglable>
  )}

export default AddBlog