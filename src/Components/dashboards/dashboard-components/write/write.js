import React from 'react'
import "./write.css"
import { Outlet,Link } from 'react-router-dom'

const Write = () => {
  return (
    <div>
        <div className="write-heading">
            <Link ><p className="draft-text">Drafts</p></Link>
            <Link to={'published'} ><p className="published-text">Published articles</p></Link>
        </div>
        <div className="write-content">
            <Outlet />
        </div>
        <button>New Post</button>
    </div>
  )
}

export default Write
