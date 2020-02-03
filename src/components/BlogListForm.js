import React from 'react'
import Blog from '../components/Blog'

const BlogListForm = ( blogs, setBlogs, user ) => {
  console.log('BlogListForm---')

  return(
    <div>
      <h2>blogs</h2>
      {blogs
        .sort((a, b) => (a.likes > b.likes) ? 1 : -1)
        .map(blog => <Blog key={blog.id} blog={blog} blogs={blogs} setBlogs={setBlogs} user={user}/>)}
    </div>
  )
}

export default BlogListForm