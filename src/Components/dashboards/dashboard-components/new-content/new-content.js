import React, { useEffect, useState, useCallback, createContext, useContext } from 'react'
import "./new-content.css"
import "./editor.css"
import {Menu_icon, Plus } from '../../../svg'
import ParagraphI from "../../../contents/images/icons/para.png"
import Pic from "../../../contents/images/icons/images.png"
import Undo from "../../../contents/images/icons/undo.png"
import Redo from "../../../contents/images/icons/redo.png"
import Bullet from "../../../contents/images/icons/bullet.png"
import Numbered from "../../../contents/images/icons/number.png"
import Code from "../../../contents/images/icons/code.png"
import Strike from "../../../contents/images/icons/strike.png"
import Bold from "../../../contents/images/icons/bold.png"
import Italics from "../../../contents/images/icons/italic.png"
import Under from "../../../contents/images/icons/underline.png"
import Line from "../../../contents/images/icons/line.png"
import BlockQ from "../../../contents/images/icons/quote.png"
import CodeBlock from "../../../contents/images/icons/codeblock.png"
import Emoji from "../../../contents/images/icons/emoji.png"


import { useEditor, EditorProvider, FloatingMenu, BubbleMenu, useCurrentEditor} from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import Underline from '@tiptap/extension-underline'
import ListItem from '@tiptap/extension-list-item'
import Image from '@tiptap/extension-image'
import Paragraph from '@tiptap/extension-paragraph'
import TextAlign from '@tiptap/extension-text-align'
import Placeholder from '@tiptap/extension-placeholder'
import Dialog from './dialog-template/dialog'


export const imageProvider = createContext("")

const NewContent = () => {
  const [activeMenu, setActiveMenu] = useState(false) 
  let selection;
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
            </div>
            <nav >
              <button id='post'>Post</button>
              <div className='icon-wrap' >
                <div className='' onClick={()=>setActiveMenu(!activeMenu)}>{menu}</div>
                <div className={!activeMenu?"menu-drop roll-up":"menu-drop roll-down"}>
                  Hi this is the menu bar
                </div>
              </div>     
            </nav>
      </div>
      <form className="new-main">
        <div className="editor-wrap">
          <Editor />
        </div>
      </form>
      <div className="form-footer">
            <div className="hashtag-niche-wrap">
              <div className="add-categories">
                <p className="category"><span>newpost</span></p>
                <p className="category"><span>webdev</span></p>
                <p className="category"><span>newpost</span></p>
                <button id='hashtag'><Plus/></button>
              </div>
              <div className="add-hashtags">
                <p className="hashtag">#newpost</p>
                <p className="hashtag">#webdev</p>
                <p className="hashtag">#newpost</p>
                <button id='hashtag'><Plus/></button>
              </div>
            </div>
        </div>
    </div>
  )
}

export default NewContent



const extensions = [
  StarterKit, 
  Underline,
  Image.configure({
    inline: true,
    allowBase64: true
  }), 
  TextAlign,
  Placeholder.configure({
    placeholder: 'Write something …',
  })
]

const ScrollMenu = () => {
  const {editor} = useCurrentEditor()
  const controlsScroll = document.getElementById("controls-scroll")
  const menuLeftArr = document.getElementById("leftarr")
  const menuRightArr = document.getElementById("rightarr")

  const addImage = useCallback(() => {
  const url = window.prompt('URL')

  if (url) {
    editor.chain().focus().setImage({ src: url }).run()
  }
}, [editor])

  if (!editor) {
    return null
  }

  return (
    <div className='editor-controls' onClick={(e) => e.preventDefault()}>
      <p id="leftarr" onClick={()=>{
          controlsScroll.scrollTo({
            top: 0,
            left: (controlsScroll.scrollLeft - 180%(controlsScroll.scrollWidth - controlsScroll.offsetWidth)) || (controlsScroll.scrollLeft - 20%(controlsScroll.scrollWidth - controlsScroll.offsetWidth)),
            behavior: "smooth",
          });
      }} ></p>
      <p id="rightarr" onClick={()=>{
          controlsScroll.scrollTo({
            top: 0,
            left: (controlsScroll.scrollLeft + 180%(controlsScroll.scrollWidth - controlsScroll.offsetWidth)) || (controlsScroll.scrollLeft + 20%(controlsScroll.scrollWidth - controlsScroll.offsetWidth)),
            behavior: "smooth",
          });
      }}></p>
      <div id="controls-scroll" className="controls-scroll" onScroll={(e)=>{
          if (e.target.scrollLeft > 34){
            menuLeftArr.style.zIndex = "1"
            menuLeftArr.style.opacity="1"
          } else if(e.target.scrollLeft < 14){
            menuLeftArr.style.zIndex = "-1"
            menuLeftArr.style.opacity="0"
          } 
          if (e.target.scrollLeft >= (e.target.scrollWidth - (e.target.offsetWidth + 10))){
            menuRightArr.style.zIndex = "-1"
            menuRightArr.style.opacity="0"
          } else if(e.target.scrollLeft <= (e.target.scrollWidth - (e.target.offsetWidth + 20))) {
            menuRightArr.style.zIndex = "1"
            menuRightArr.style.opacity="1"
          }
      }}>
      <button onClick={() => editor.chain().focus().toggleStrike().run()} className={editor.isActive('strike') ? 'is-active' : ''}>
        <img src={Strike} height={15} width={15}/>
      </button>
      <button
        onClick={(e) => {e.preventDefault(), editor.chain().focus().toggleCode().run()}}
        disabled={
          !editor.can()
            .chain()
            .focus()
            .toggleCode()
            .run()
        }
        className={editor.isActive('code') ? 'is-active' : ''}
      >
        <img src={Code} height={19} width={19}/>
      </button>
      <button
        onClick={() => editor.chain().focus().toggleCodeBlock().run()}
        className={editor.isActive('codeBlock') ? 'is-active' : ''}
      >
         <img src={CodeBlock} height={20} width={20} />
      </button>
      {/* <button onClick={(e) => {e.preventDefault(), editor.chain().focus().unsetAllMarks().run()}}>
        clear marks
      </button>
      <button onClick={() => editor.chain().focus().clearNodes().run()}>
        clear nodes
      </button> */}
      <button
        onClick={() => editor.chain().focus().setParagraph().run()}
        className={
        
        editor.isActive('paragraph') ? 'is-active' : ''}
      >
        <img src={ParagraphI} height={15} width={15} alt="" />
      </button>

      <button
        onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
        className={editor.isActive('heading', { level: 1 }) ? 'is-active' : ''}
      >
       <h4 style={{color:"#9500BA"}}>H1</h4>
      </button>
      <button
        onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
        className={editor.isActive('heading', { level: 2 }) ? 'is-active' : ''}
      >
        <h4 style={{color:"#9500BA"}}>H2</h4>
      </button>
      <button
        onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()}
        className={editor.isActive('heading', { level: 3 }) ? 'is-active' : ''}
      >
        <h4 style={{color:"#9500BA"}}>H3</h4>
      </button>
      <button
        onClick={() => editor.chain().focus().toggleHeading({ level: 4 }).run()}
        className={editor.isActive('heading', { level: 4 }) ? 'is-active' : ''}
      >
        <h4 style={{color:"#9500BA"}}>H4</h4>
      </button>
      <button
        onClick={() => editor.chain().focus().toggleHeading({ level: 5 }).run()}
        className={editor.isActive('heading', { level: 5 }) ? 'is-active' : ''}
      >
        <h4 style={{color:"#9500BA"}}>H5</h4>
      </button>
      <button
        onClick={() => editor.chain().focus().toggleBulletList().run()}
        className={editor.isActive('bulletList') ? 'is-active' : ''}
      >
        <img src={Bullet} height={19} width={19}/>
      </button>
      <button
        onClick={() => editor.chain().focus().toggleOrderedList().run()}
        className={editor.isActive('orderedList') ? 'is-active' : ''}
      >
        <img src={Numbered} height={19} width={19} alt="" />
      </button>
      <button onClick={() => editor.chain().focus().setHorizontalRule().run()}>
        <img src={Line} height={20} width={20} />
      </button>
  
      </div>
    </div>
  )
}

const BasicMenu = ({inputMode}) =>{
  const {editor} = useCurrentEditor()
  const imageContext = useContext(imageProvider)
   

  if (!editor) {
    return null
  }

  return (
    <div className="quick-edit" onClick={(e) => e.preventDefault()}>
         <button
        onClick={(e) => {e.preventDefault(), editor.chain().focus().toggleBold().run()}}
        disabled={
          !editor.can()
            .chain()
            .focus()
            .toggleBold()
            .run()
        }
        className={editor.isActive('bold') ? 'is-active' : ''}
      >
        <img src={Bold} height={15} width={15}/>
      </button>
      <button
        onClick={(e) => {e.preventDefault(), editor.chain().focus().toggleItalic().run()}}
        disabled={
          !editor.can()
            .chain()
            .focus()
            .toggleItalic()
            .run()
        }
        className={editor.isActive('italic') ? 'is-active' : ''}
      >
        <img src={Italics} height={15} width={15}/>
      </button>
      <button
        onClick={(e) => {e.preventDefault(),editor.chain().focus().toggleUnderline().run()}}
 
        className={editor.isActive('underline') ? 'is-active' : ''}
      >
       <img src={Under} height={15} width={15}/>
      </button>
      <button
        onClick={() => editor.chain().focus().undo().run()}
        disabled={
          !editor.can()
            .chain()
            .focus()
            .undo()
            .run()
        }
      >
        <img src={Undo} height={15} width={15} alt="" />
      </button>
      <button
        onClick={() => editor.chain().focus().redo().run()}
        disabled={
          !editor.can()
            .chain()
            .focus()
            .redo()
            .run()
        }
      >
        <img src={Redo} height={15} width={15} alt="" />
      </button>
      <button
        onClick={() => editor.chain().focus().toggleBlockquote().run()}
        className={editor.isActive('blockquote') ? 'is-active' : ''}
      >
       <img src={BlockQ} height={16} width={16} />
      </button>
      <button onClick={inputMode} id="image-upload" >
        <img src={Pic} height={19} width={19} />
      </button>
    </div>
  )
}

const Emojis = () => {
  return(
    <div className='emojis'><img src={Emoji} height={26} width={26} /></div>
  )
}



const Editor = () => {
  const [inputImage, setInputImage] = useState(false)
  const imageContext = useContext(imageProvider)
  useEffect(()=>console.log(imageContext))
  
  return (
      <imageProvider.Provider  value=''>
        <EditorProvider slotAfter={<div className='scroll-emoji'><ScrollMenu /><Emojis /></div>} slotBefore={<BasicMenu inputMode={()=>setInputImage(!inputImage)} />} extensions={extensions}>
          <Dialog status={inputImage} alterStatus={()=>setInputImage(!inputImage)} addImage={()=>setInputImage(!inputImage)}/>
        </EditorProvider>
      </imageProvider.Provider>
  )
}

const menu = <svg data-name="Layer 1" height="24" width="24" fill='orange' id="Layer_1" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg"><path d="M21.86,18.73H9.18a2,2,0,0,1,0-4H21.86a2,2,0,0,1,0,4Z"/><path d="M54.82,18.73H34.88a2,2,0,0,1,0-4H54.82a2,2,0,0,1,0,4Z"/><path d="M54.82,34H9.18a2,2,0,0,1,0-4H54.82a2,2,0,0,1,0,4Z"/><path d="M54.82,49.27H30.07a2,2,0,0,1,0-4H54.82a2,2,0,0,1,0,4Z"/></svg>

