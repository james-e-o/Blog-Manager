import React, { useState } from 'react'
import logoImg from "../../feed/gemini-profile.jpeg"
import { Link } from 'react-router-dom'

const WriteProp = () => {
    const [furtherEdit, setFurtherEdit] = useState(false)
    const [newpub, setNewpub] = useState(false)
    const [parameters, setParameters] = useState({
        type:"",
    })
    const [logoUrl, setLogoUrl] = useState("")
    const [collaborators, setCollaborators] = useState([])
    function trigger (){
        const input = document.getElementById('pub-logo')
        input.click()
    }
  return (

    <div className="new-setup">
        <div className="new-publication">
            <p className="title">Create new publication</p>
            <button onClick={()=>setNewpub(!newpub)} className="add-pub">Add Publication</button>
            <div className={newpub?'set-new-publication': 'no-new-pub'}>
                <label>Publication name</label><br />
                <input type="text" /><br />
                <label>Description</label><br />
                <textarea id=""></textarea>
                <div className="add-logo">
                    <p>
                        <label>Add logo</label><br />
                        <img src={logoUrl?logoUrl:logoImg} width={70} height={70} />
                    </p>
                    <p>
                        <input hidden type="file" id="pub-logo" onChange={(e)=>{
                         let file = e.target.files[0]
                         let reader = new FileReader()
                         reader.onload=()=>{
                           setLogoUrl(reader.result)
                         }
                         file?reader.readAsDataURL(file):""
                        }} />
                        <button className="insert-logo" onClick={trigger}>Insert</button><br />
                        <button onClick={()=> setLogoUrl("")} >remove</button>
                    </p>
                </div>
                <p className="about-publication"><span>About publication</span> <button onClick={()=>setFurtherEdit(true)}>edit</button></p>
                <div className="pick-niche">Select your niche 
                    <select name="" id="">
                        <option value="">tech</option>
                        <option value="">politics</option>
                        <option value="">sports</option>
                        <option value="">climate</option>
                    </select>
                </div>
                <div className="collab">
                    <span>Add Collaborators</span>
                    <input type="text" onChange={(e)=>{setCollaborators([...collaborators, e.target.value]), console.log(collaborators)}} id="collab" />
                    <p>{ collaborators.map(user => (
                        <span>{user}, </span>
                    ))}</p>

                </div>
                <p className="add-emails">
                    <span>Add/Modify emails:</span>
                    <button onClick={()=>setFurtherEdit(true)}>edit</button>
                </p>
                <p className="set-url">
                    <span>Add domain:</span>
                    <input type="text" />
                    <span className="skriptn">.skriptn.com</span>
                </p>
                <button className="submit">Create</button>
            </div>
        </div>
        <div className="new-article">
            <p className='title'>Write new article</p>
            <div className="article-type">
                <span className='type'>Type</span><br />
                <label for="post">Stand alone post </label>
                <input onChange={()=>setParameters( { type:"post"})} type="radio" id="post" name='type' value="HTML"/><br />
                <label for="post">Add to publication </label>
                <input onChange={()=>setParameters({ type:"pub"})} type="radio" id="post" name='type' value="HTML"/>
            </div>
            <Link to={parameters.type=null?"":"/new-content"} ><button className="write">Write</button></Link>
        </div>
    </div>

  )
}

export default WriteProp




const cancel = <svg  xmlns="http://www.w3.org/2000/svg" fill='grey' height="33px" viewBox="0 -960 960 960" width="33px"><path d="m249-207-42-42 231-231-231-231 42-42 231 231 231-231 42 42-231 231 231 231-42 42-231-231-231 231Z"/></svg>