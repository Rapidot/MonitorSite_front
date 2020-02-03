import React from 'react'
import blogService from '../services/blogs'

const AddInfoForm = ({ blog, blogs, setBlogs, user }) => {

  const handleLikeClick = () => {
    const blogObject = { ...blog, likes: blog.likes + 1 }

    blogService
      .update(blog.id, blogObject)
      .then(() => {
        //const blogIndex = blogs.findIndex(obj => obj.id === blog.id)
        //blogs[blogIndex].likes = blogs[blogIndex].likes + 1 //ei renderöi
        setBlogs(blogs.map(blog => blog.id !== blogObject.id ? blog : blogObject))
        //console.log(blogs[blogIndex].likes+'-handleLikeClick')
      })
  }

  /* Poista blogi kannasta ja bloglistasta */
  const handleRemoveClick =() => {
    if(window.confirm('Do you really want to remove the blog?')){
      blogService
        .remove(blog.id)
        .then(() => {
          const filteredBlogList = blogs.filter(blogID =>  blogID.id!== blog.id)
          setBlogs(filteredBlogList)
        })
    }
  }

  /* Etsitään blogs:sta ID:llä oikea blogi ja tarkistetaan onko se userin*/
  const currentUser = () => {
    if(user.name.includes(blog.user.name)) return true
    return false
  }

  return (
    <div>
      <p>{blog.author}</p>
      <p><a href={blog.url}>{blog.url}</a></p>
      <p>{blog.likes} likes</p>
      <button
        type="button"
        onClick={() => handleLikeClick()}>like
      </button>
      <p>added by {blog.user.name}</p>

      {currentUser () &&
          <div>
            <button
              type="button"
              onClick={() => handleRemoveClick()}>remove blog</button>
          </div>
      }
    </div>
  )
}

export default AddInfoForm