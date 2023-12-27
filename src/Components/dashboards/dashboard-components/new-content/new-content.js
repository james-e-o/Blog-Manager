import React, { useEffect, useState } from 'react'
import "./new-content.css"
import "./menu-drop.css"
import {Menu_icon, Plus } from '../../../svg'

const NewContent = () => {
  const [activeMenu, setActiveMenu] = useState(false)
  const [textState, setTextState] = useState("auto")
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
//   const resizeTextarea = (e)=> {
//     const text_Area = document.getxgvElementById("textarea-content")
//     text_Area.style.height = "auto"
//     setTextState(text_Area.scrollHeight + 2)

//     // text_Area.style.height = "auto"
//     // text_Area.style.height = (text_Area.scrollHeight + 2)
//     // console.log("kinbott")
// }
  // useEffect(()=>{
  //   const text_Area = document.getElementById("textarea-content")
  //   const text_Wrap = document.getElementById("wysiwyg-wrap")
  //   text_Area.style.height = textState
  //   text_Wrap.style.height = textState
  //   console.log("kinbott")
  // })
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
        <div className="content-wrap">
          <div className="editor">
            <div className="editor-controls">
              <button>B</button>
              <button><i>I</i></button>
              <button>U</button>
              <button>hi</button>
              <button>hi</button>
              <input type="text" />
              <button>hi</button>
              <button>hi</button>
            </div>
            <div className="editor-inputs" id='wysiwyg-wrap'>
              <textarea onKeyUp={(e)=>{
                const text_Area = document.getElementById("wysiwyg-wrap")
                let scHeight = e.target.scrollHeight
                console.log(scHeight)
              }} id="textarea-content" placeholder='type something here...'></textarea>
            </div>
          </div>  
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
