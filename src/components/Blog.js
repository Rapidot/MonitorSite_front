import React, { useState } from 'react'
//import blogService from '../services/blogs'
import AddInfoForm from './AddBlogInfo'

const Blog = ({ blog, blogs, setBlogs, user }) => {

  const [IDList, setIDList] = useState([])
  console.log(IDList+'IDList---')

  /* Käsittelee avatun blogin id:n eli kaikki blogit avattavissa ja suljettavissa*/
  const handleBlogTitleClick = () => {
    if (IDList.includes(blog.id)){/* Jos blogi listassa, poistetaan se */
      const newIdList = IDList.filter(blogID =>  blogID!== blog.id)
      setIDList(newIdList)
    }
    else{/* Jos blogin id ei ole listassa, lisätään se listaan */
      setIDList([...IDList, blog.id])
    }
  }

  return (
    <div>
      <li key={blog.id}>
        <div onClick={() => handleBlogTitleClick()}>
          <h3>{blog.title}</h3>
        </div>
        {IDList.includes(blog.id) &&
        <AddInfoForm blog={blog} blogs={blogs} setBlogs={setBlogs} user={user}/>
        }
      </li>
    </div>
  )
}

export default Blog