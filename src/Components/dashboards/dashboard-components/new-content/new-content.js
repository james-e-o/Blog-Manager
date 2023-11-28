import React from 'react'
import "./new-content.css"

const NewContent = () => {
  return (
    <div className='mobile-new'>
      <form className="new-main">
       <div className="heading-wrap">
        <h3 className='heading'>New post</h3>
        <button id='post'>Post</button>
       </div>
        <div className="title-wrap">
          <p className='title'>Title</p>
          <input id='new-post-title' type="text" />
        </div>
        <div className="content-wrap">
          <p className='content'>Content</p>
          <textarea name="new-post" id="new-post-body" cols="30" rows="10"></textarea>
        </div>
        <div className="hashtags">
          #newpost #webdev
          <input id='hashtag' type="search" />
        </div>

      </form>
    </div>
  )
}

export default NewContent