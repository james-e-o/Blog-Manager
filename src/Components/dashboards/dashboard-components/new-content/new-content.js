import React, { useEffect } from 'react'
import "./new-content.css"
import { Menu } from '../../../svg'


const NewContent = () => {
  useEffect(()=>{
   const wrap = document.querySelector("div.mobile-new")
   wrap.scrollTo(0, 10)
  })
  return (
    <div className='mobile-new'>
      <div className="new-header">
            <div className="user">
              <figure></figure>
            </div>
            <nav >
              <figure><Menu/></figure>     
            </nav>
      </div>
      <form className="new-main">
       <div className="heading-wrap">
        <h3 className='heading'>New post</h3>
        <button id='post'>Post</button>
       </div>
        <div className="title-wrap">
          <p className='title'>Title</p>
          <input id='new-post-title' type="text" value={'+'} />
        </div>
        <div className="content-wrap">
          <p className='content'>Content</p>
          <textarea name="new-post" id="new-post-body" cols="30" rows="18"></textarea>
        </div>
        <div className="hashtag-niche-wrap">
          <div className="categories">
            <p className="category">newpost</p>
            <p className="category">webdev</p>
            <p className="category">newpost</p>
          </div>
          <input id='hashtag' type="search" />
          <div className="hashtags">
            <p className="hashtag">#newpost</p>
            <p className="hashtag">#webdev</p>
            <p className="hashtag">#newpost</p>
          </div>
          <input id='hashtag' type="search" />
        </div>

      </form>
    </div>
  )
}

export default NewContent