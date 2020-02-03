import React from 'react'
import  { useField } from '../hooks/index'

const AddBlogForm = ({ title, setTitle, author, setAuthor, url, setUrl, handleNewBlog }) => {

  const { reset: resetTitle, ...title_ } = useField('text', 'Title', title, setTitle)
  const { reset: resetAuthor, ...author_ } = useField('author', 'Author', author, setAuthor)
  const { reset: resetUrl, ...url_ } = useField('url', 'Url', url, setUrl)
  //const { reset: resetPassword, ...password_ } = useField('password', 'Password', password, setPassword)


  return (<div>
    <h2>add blog</h2>
    <form onSubmit={handleNewBlog}>
      <div>
        title
        <input {...title_} />
      </div>
      <div>
        author
        <input {...author_} />
      </div>
      <div>
        url
        <input {...url_} />
      </div>
      <button type="submit">create</button>
      <button type="button" onClick={resetTitle} >reset title</button>
      <button type="button" onClick={resetAuthor} >reset author</button>
      <button type="button" onClick={resetUrl} >reset url</button>
    </form>
  </div>)
}

export default AddBlogForm