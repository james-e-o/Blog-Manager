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
  // function Controls (e){
  //   const bold = document.getElementById("bold")
  //   const italic = document.getElementById("italic")
  //   const underline = document.getElementById("underline")
  //   const aLeft = document.getElementById("a-left")

  //  const selectedData = e.target.value.substring(
  //     e.target.selectionStart,
  //     e.target.selectionEnd,
  //   )

  //   bold.onclick = () =>{
  //    let format= Array.from(selectedData)
     
  //    console.log(format.forEach(el =><strong>{el}</strong>))
  //   }    
  // }
  // function Bold (){
  //    const textArea = document.getElementById("textarea-content")
  //    selection = document.getSelection(textArea)
  //    console.log(selection.anchorNode)
  // }

  return (
    <div className='mobile-new'>
      <div className="new-header">
           
            <div className="user">
              <div className='art'></div>
            </div>
            <nav >
              <button id='post'>Post</button>
              <div className='icon-wrap' >
                <div className='' onClick={()=>setActiveMenu(!activeMenu)}><Menu_icon /></div>
                <div className={!activeMenu?"menu-drop roll-up":"menu-drop roll-down"}>
                  Hi this is the menu bar
                </div>
              </div>     
            </nav>
      </div>
      <form className="new-main">
        {/* <div className="heading-wrap">
          <h3 className='heading'>New post</h3>
        </div> */}
        <div className="content-wrap">
          <Editor />
        </div>
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
      </form>
    </div>
  )
}

export default NewContent


import { EditorProvider, FloatingMenu, BubbleMenu, useCurrentEditor } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import ListItem from '@tiptap/extension-list-item'

const extensions = [
  StarterKit,
]

const content = '<'
const EditorMenu = () => {
  const { editor } = useCurrentEditor()

  if (!editor) {
    return null
  }

  return (
    <div className='editor-controls'>
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
        B
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
        <i>I</i>
      </button>
      {/* <button
        onClick={() => editor.chain().focus().toggleUnderline().run()}
        disabled={
          !editor.can()
            .chain()
            .focus()
            .toggleUnderline()
            .run()
        }
        className={editor.isActive('underline') ? 'is-active' : ''}
      >
        <i>U</i>
      </button> */}
      <button
        onClick={(e) => {e.preventDefault(), editor.chain().focus().toggleStrike().run()}}
        disabled={
          !editor.can()
            .chain()
            .focus()
            .toggleStrike()
            .run()
        }
        className={editor.isActive('strike') ? 'is-active' : ''}
      >
        <strike>S</strike>
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
        code
      </button>
      <button onClick={(e) => {e.preventDefault(), editor.chain().focus().unsetAllMarks().run()}}>
        clear marks
      </button>
      <button onClick={() => editor.chain().focus().clearNodes().run()}>
        clear nodes
      </button>
      <button
        onClick={() => editor.chain().focus().setParagraph().run()}
        className={editor.isActive('paragraph') ? 'is-active' : ''}
      >
        <img src={Paragraph} height={15} width={15} alt="" />
      </button>
      <button
        onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
        className={editor.isActive('heading', { level: 1 }) ? 'is-active' : ''}
      >
        h1
      </button>
      <button
        onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
        className={editor.isActive('heading', { level: 2 }) ? 'is-active' : ''}
      >
        h2
      </button>
      <button
        onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()}
        className={editor.isActive('heading', { level: 3 }) ? 'is-active' : ''}
      >
        h3
      </button>
      <button
        onClick={() => editor.chain().focus().toggleHeading({ level: 4 }).run()}
        className={editor.isActive('heading', { level: 4 }) ? 'is-active' : ''}
      >
        h4
      </button>
      <button
        onClick={() => editor.chain().focus().toggleHeading({ level: 5 }).run()}
        className={editor.isActive('heading', { level: 5 }) ? 'is-active' : ''}
      >
        h5
      </button>
      <button
        onClick={() => editor.chain().focus().toggleHeading({ level: 6 }).run()}
        className={editor.isActive('heading', { level: 6 }) ? 'is-active' : ''}
      >
        h6
      </button>
      <button
        onClick={() => editor.chain().focus().toggleBulletList().run()}
        className={editor.isActive('bulletList') ? 'is-active' : ''}
      >
        bullet list
      </button>
      <button
        onClick={() => editor.chain().focus().toggleOrderedList().run()}
        className={editor.isActive('orderedList') ? 'is-active' : ''}
      >
        <img src={Paragraph} height={15} width={15} alt="" />
      </button>
      <button
        onClick={() => editor.chain().focus().toggleCodeBlock().run()}
        className={editor.isActive('codeBlock') ? 'is-active' : ''}
      >
        code block
      </button>
      <button
        onClick={() => editor.chain().focus().toggleBlockquote().run()}
        className={editor.isActive('blockquote') ? 'is-active' : ''}
      >
        blockquote
      </button>
      <button onClick={() => editor.chain().focus().setHorizontalRule().run()}>
        horizontal rule
      </button>
      <button onClick={() => editor.chain().focus().setHardBreak().run()}>
        hard break
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
        onClick={() => editor.chain().focus().setColor('#958DF1').run()}
        className={editor.isActive('textStyle', { color: '#958DF1' }) ? 'is-active' : ''}
      >
        purple
      </button>
    </div>
  )
}

const Editor = () => {

  return (
      <div className="editor">
        <EditorProvider slotBefore={<EditorMenu />} extensions={extensions} >
          {/* <FloatingMenu>This is the floating menu</FloatingMenu>
          <BubbleMenu>This is the bubble menu</BubbleMenu> */}
        </EditorProvider>
      </div>  
  )
}
