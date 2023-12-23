import React, { useEffect, useState } from 'react'
import "./new-content.css"
import "./menu-drop.css"
import {Menu_icon, Plus } from '../../../svg'


const NewContent = () => {
  const [activeMenu, setActiveMenu] = useState(false)
  useEffect(()=>{
    const menuDrop = document.querySelector("div.menu-drop")
    document.addEventListener('click', (e)=>{  
      if(!e.target.closest("div.icon-wrap") && menuDrop.classList.contains("roll-down")){
        console.log("hoolaritha")
        setActiveMenu(false)
        menuDrop.classList.replace("roll-down","roll-up")
      }
    })
  },[])
  return (
    <div className='mobile-new'>
      <div className="new-header">
            <div className="user">
              <figure></figure>
            </div>
            <nav >
              <button id='post'>Post</button>
              <div className='icon-wrap' >
                <div className='' onClick={()=>setActiveMenu(!activeMenu)}><Menu_icon /></div>
                <div className={!activeMenu?"menu-drop roll-up":"menu-drop roll-down"}>
                  Menu_Drop hrllo
                </div>
              </div>     
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
          <div className="add-categories">
            <p className="category">newpost</p>
            <p className="category">webdev</p>
            <p className="category">newpost</p>
            <button id='hashtag'><Plus/></button>
          </div>
          <div className="add-hashtags">
            <p className="hashtag">#newpost</p>
            <p className="hashtag">#webdev</p>
            <p className="hashtag">#newpost</p>
            <button id='hashtag'><Plus/></button>
          </div>
        </div>

      </form>
    </div>
  )
}

export default NewContent


// const Menu_Drop = (activeState) => {
//   console.log(activeState)
//   return (
//     "hello"
//   )
// }
