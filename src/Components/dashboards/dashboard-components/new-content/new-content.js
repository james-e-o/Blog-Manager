import React, { useEffect, useState } from 'react'
import "./new-content.css"
import "./menu-drop.css"
import {Menu_icon, Plus } from '../../../svg'
import alignLeft from "../../../contents/images/align-left.png"
import alignCentre from "../../../contents/images/align-center.png"
import alignRight from "../../../contents/images/align-right.png"
import alignJustify from "../../../contents/images/align-justify.png"
import Indent from "../../../contents/images/indent.png"
import Outdent from "../../../contents/images/outdent.png"
import Paragraph from "../../../contents/images/paragraph.png"
import Image from "../../../contents/images/image-60.png"
import Undo from "../../../contents/images/undo-48.png"
import Redo from "../../../contents/images/redo-48.png"

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
            <div className='art'></div>
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
              <div className="font-section">
                <button onClick={(e)=>{e.preventDefault()}}>B</button>
                <button onClick={(e)=>{e.preventDefault()}}><i>I</i></button>
                <button onClick={(e)=>{e.preventDefault()}}>U</button>
                <select name="font-family" id="f-family">
                  <option value="inter">Inter</option>
                  <option value="cambria">Cambria</option>
                  <option value="cambria">Helvetica</option>
                  <option value="sans">Sans</option>
                </select>
                <select name="font-sizes" id="f-size">
                  <option value="inter">12</option>
                  <option value="cambria">16</option>
                  <option value="sans">20</option>
                  <option value="sans">24</option>
                </select>
              </div>
              <div className="align-section">
                <button><img src={alignLeft} height={"15px"} width={"20px"}/></button>
                <button><img src={alignCentre} height={"15px"} width={"20px"}/></button>
                <button><img src={alignRight} height={"15px"} width={"20px"}/></button>
                <button><img src={alignJustify} height={"15px"} width={"20px"}/></button>
                <button><img src={Indent} height={"15px"} width={"20px"}/></button>
                <button><img src={Outdent} height={"15px"} width={"20px"}/></button>
                <button><img src={Paragraph} height={"15px"} width={"20px"}/></button>
              </div>
              <div className="insert-section">
                <button><img src={Image} height={"15px"} width={"20px"}/></button>
                <button><img src={Undo} height={"15px"} width={"20px"}/></button>
                <button><img src={Redo} height={"15px"} width={"20px"}/></button>
              </div>
            </div>
            <div className="editor-inputs" id='wysiwyg-wrap'>
              <textarea onKeyUp={(e)=>{
                const text_Area = document.getElementById("wysiwyg-wrap")
                let scHeight = e.target.scrollHeight
                text_Area.style.height = `auto`
                text_Area.style.height = `${scHeight}px`
                console.log(scHeight)
              }} 
              onSelect={(e)=>{
                const selection = e.target.value.substring(
                  e.target.selectionStart,
                  e.target.selectionEnd,
                )
                console.log(selection)
              }}
              id="textarea-content" placeholder='type something here...'></textarea>
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
