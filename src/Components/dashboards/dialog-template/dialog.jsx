import React, {useEffect, useState} from 'react'
import "./dialog.css"
import { imageProvider } from '../dashboard-components/new-content/new-content'
import { useEditor, EditorProvider, FloatingMenu, BubbleMenu, useCurrentEditor} from '@tiptap/react'

const Dialog = ({status, alterStatus, addImage}) => {
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
    <div className={!status?'dialog-main':"dialog-main on"}>
        <div className="dialog-content">
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
    </div>
    </imageProvider.Provider>
  )
}

export default Dialog;

const terminator = <svg  xmlns="http://www.w3.org/2000/svg"  fill='gray' height="24" viewBox="0 -960 960 960" width="24"><path d="m249-207-42-42 231-231-231-231 42-42 231 231 231-231 42 42-231 231 231 231-42 42-231-231-231 231Z"/></svg>