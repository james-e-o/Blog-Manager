import React, {useEffect, useState} from 'react'
import "./dialog.css"
import { imageProvider } from '../new-content'
import { useEditor, EditorProvider, FloatingMenu, BubbleMenu, useCurrentEditor} from '@tiptap/react'

const Dialog = ({status, alterStatus}) => {
  const [imageUrl, setImageUrl] = useState("")
  const {editor} = useCurrentEditor()
  function insertImage (e){
    return new Promise((res, rej)=>{
       e.preventDefault()
       if (imageUrl) {
        res(editor.chain().focus().setImage({ src: imageUrl}).run())
        } 
    })
  }

  return (
   <imageProvider.Provider  value={imageUrl}>
        <div className={!status?'dialog-box dialog-off':"dialog-box dialog-on"}>
            <div className="terminator" onClick={alterStatus}>{terminator}</div>
            <p>Insert image</p>
            <input type="file" name="image" id="image" onChange={(e)=>{
                  let file = e.target.files[0]
                  let reader = new FileReader()
                  reader.onload=()=>{
                    setImageUrl(reader.result)
                    console.log(reader.result) 
                  }
                  file?reader.readAsDataURL(file):""
            }} />
            <p id='addimage' onClick={(e)=>insertImage(e).then(alterStatus)}>Insert</p>
        </div>
    </imageProvider.Provider>
  )
}

export default Dialog;

const terminator = <svg  xmlns="http://www.w3.org/2000/svg"  fill='gray' height="24" viewBox="0 -960 960 960" width="24"><path d="m249-207-42-42 231-231-231-231 42-42 231 231 231-231 42 42-231 231 231 231-42 42-231-231-231 231Z"/></svg>




export const PostSettings = () => {
  const [preferences, setPreferences] = useState({

  })

  return (
    <div className="post-setup">
      <p className="title">Post preferences</p>
      {/* <form> */}
        <fieldset>
          <legend>For</legend>
          <p  className='input-wrap'>
             <label htmlFor="everyone" >Everyone: </label>
             <input type="radio" id='everyone' name="access"  value="everyone" />
          </p>
          <p className='input-wrap'> 
            <label htmlFor="subscribers" >Subscribers: </label>
            <input type="radio" id='subscribers' name="access" value="subscribers" />
          </p>    
        </fieldset>
        <fieldset>
          <legend>Comments from</legend>
          <p  className='input-wrap'>
             <label htmlFor="everybody" >Everyone: </label>
             <input type="radio" id='everybody' name="comment"  value="everyone" />
          </p>
          <p className='input-wrap'> 
            <label htmlFor="nobody" >Disable comments: </label>
            <input type="radio" id='nobody' name="comment" value="subscribers" />
          </p>    
        </fieldset>
        <p className="tag-title">Add tags</p>
        <div className="add-tag">
            <div className="added">
              {tags.map(tag => (
                <p className="tag">{tag}</p>
              ))}
            </div>
            <input type="text"/>
            <div className="tag-search"></div>
        </div>  
  </div>
  )
}

const tags = ['boys', 'girls', 'men', 'women']
