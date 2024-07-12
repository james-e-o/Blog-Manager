import React, {useEffect, useState} from 'react'
import "./dialog.css"
import { imageProvider } from '../new-content'
import { useEditor, EditorProvider, FloatingMenu, BubbleMenu, useCurrentEditor} from '@tiptap/react'
import logoImg from "../../../feed/gemini-profile.jpeg"

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
  const [contentImg, setContentImg] = useState("")
  function trigger (){
    const input = document.getElementById('pub-logo')
    input.click()
  }

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
        <fieldset>
          <legend>Tags</legend>
            <div className="added">
              {tags.map(tag => (
                <p className="tag">{tag}</p>
              ))}
            </div>
            <input id='tags' type="text" placeholder='add tags...'/>
            {/* <div className="tag-search active"> hello</div> */}
        </fieldset>
        <fieldset>
          <legend>Preview</legend>
          <div className="prev prev-title">
            <p className="mini-title">Title :</p>
            <textarea style={{fontWeight:"bold"}} name="" id="" rows="2"></textarea>
          </div>
          <div className="prev prev-subtext">
            <p className="mini-title">Sub-<br /> text :</p>
            <textarea style={{fontSize:"12px"}} name="" id="" rows="3"></textarea>
          </div>
          <div className="prev prev-image">
            <p className="mini-title">Content <br /> image :</p>
            <div className="add-img">
                <img src={contentImg?contentImg:logoImg} width={120} height={70} />        
                <input hidden type="file" id="pub-logo" onChange={(e)=>{
                  let file = e.target.files[0]
                  let reader = new FileReader()
                  reader.onload=()=>{
                    setContentImg(reader.result)
                  }
                  file?reader.readAsDataURL(file):""
                }} />
                <p className='imgnav'>
                  <button className="insert-logo" onClick={trigger}>Add</button>
                  <button onClick={()=> setContentImg("")} >remove</button>
                </p>
                </div>
          </div>
        
        </fieldset>
        <fieldset>
          <legend>Preview link</legend>
          <p className= "prev-link">http://localhost:3002/new-content/post/1234</p>
        </fieldset>
        <div className="finalize">
          <button className="insert-logo" >Save</button>
          <div className="delete-wrap">
            <p>
              <input type="checkbox" name="" id="" />
              <span style={{fontSize:"11px"}}>confirm delete</span>
            </p>
            <button className='delete' >Delete</button>
          </div>
        </div>
  </div>
  )
}

const tags = ['boys', 'girls','boys', 'girls']
