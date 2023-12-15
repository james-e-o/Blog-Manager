import React, { useEffect, useState } from 'react'
import "./new-content.css"
import "./menu-drop.css"
import { Menu, Menu_icon } from '../../../svg'


const NewContent = () => {
  const [activeMenu, setActiveMenu] = useState()
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
              <button id='post'>Post</button>
              <figure onClick={()=>setActiveMenu(!activeMenu)}>
                <Menu_icon/>
                <Menu_Drop />
              </figure>     
            </nav>
      </div>
      <form className="new-main">
       <div className="heading-wrap">
        <h3 className='heading'>New post</h3>
       </div>
        <div className="title-wrap">
          <p className='title'>Title</p>
          <input id='new-post-title' type="text" />
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
            <button id='hashtag'>+</button>
          </div>
          <div className="hashtags">
            <p className="hashtag">#newpost</p>
            <p className="hashtag">#webdev</p>
            <p className="hashtag">#newpost</p>
            <button id='hashtag'>+</button>
          </div>
        </div>

      </form>
    </div>
  )
}

export default NewContent


export const Menu_Drop = () => {
  return (
    <div className='menu-drop'>
      Menu_Drop hrllo
    </div>
  )
}
