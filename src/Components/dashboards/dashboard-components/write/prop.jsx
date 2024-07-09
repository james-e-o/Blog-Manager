import React, { useEffect, useState } from 'react'
import logoImg from "../../feed/gemini-profile.jpeg"
import { Link } from 'react-router-dom'
import Publications from '../bookmarked/Publications'

const WriteProp = () => {
    const [furtherEdit, setFurtherEdit] = useState(false)
    const [newpub, setNewpub] = useState('')
    const [choosePub, setChoosePub] = useState(false)
    const [logoUrl, setLogoUrl] = useState("")
    const [collaborators, setCollaborators] = useState([])

    function trigger (){
        const input = document.getElementById('pub-logo')
        input.click()
    }
    useEffect(()=>{
        setChoosePub(false)
    },[newpub])
    useEffect(()=>{
    
    })
  return (

    <div className="new-setup">
        <div className="new-publication">
            <p className="title">Create new publication / Write new article</p>
            <p className="pub-wrap">
                <button onClick={()=>{newpub === 'newpub'? setNewpub(''):setNewpub('newpub')}} className="add-pub">Add Publication</button>
                <button onClick={()=>{newpub === 'newpost'? setNewpub(''):setNewpub('newpost')}} className="add-pub">Write Article</button>
            </p>
            {
            newpub === 'newpub'?
            <form className={'set-new-publication'}>
                <p style={{marginBottom: '15px',fontSize:"14px", color:"#242424"}}>New publication</p>
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
            </form>
                : newpub === 'newpost' ?
            <form className="new-article">
                <p className='title'>Write new article</p>
                <div className="article-type">
                    <span className='type'>Choose type</span>
                    <p className='post-type' onClick={(e)=>{setChoosePub(false)}}>
                        <label for="post">Stand alone post </label>
                        <input checked={!choosePub? true:false} type="radio" name='post-type' value="single-post"/>
                    </p>
                    <p className='post-type' onClick={(e)=>{setChoosePub(true)}}>
                        <label for="post">Add to publication </ label>

                        <span >{choosePub ? pullarrow : droparrow}</span>
                    </p>
               
                    {choosePub?
                    <div className='choose-pub'>
                    {pubs.map(pub => (
                        <p onClick={(e)=>{setChoosePub(pub.id)}}className="pubs">
                            <span>{pub.name}</span>
                            <input checked={choosePub === pub.id? true:false}type="radio" name='pub' value="pub-1" />
                        </p>
                    ))}
                    </div>
                    : 
                    ""
                    }
                </div>
                <Link to={"/new-content/post/1234"} ><button className="write">Write</button></Link>
            </form>
                :
                ""
            }
  
        </div>
       
    </div>

  )
}

export default WriteProp




const cancel = <svg  xmlns="http://www.w3.org/2000/svg" fill='grey' height="33px" viewBox="0 -960 960 960" width="33px"><path d="m249-207-42-42 231-231-231-231 42-42 231 231 231-231 42 42-231 231 231 231-42 42-231-231-231 231Z"/></svg>


const droparrow = <svg xmlns="http://www.w3.org/2000/svg" width="13px" height="13px" viewBox="0 0 1024 1024" version="1.1"><path d="M903.232 256l56.768 50.432L512 768 64 306.432 120.768 256 512 659.072z" fill="#000000"/></svg>
const pullarrow = <svg xmlns="http://www.w3.org/2000/svg"  width="13px" height="13px" viewBox="0 0 1024 1024" version="1.1"><path d="M903.232 768l56.768-50.432L512 256l-448 461.568 56.768 50.432L512 364.928z" fill="#000000"/></svg>

const pubs = [
   {
    name:"publication 1",
    id:1
   },
   {
    name:"publication 2",
    id:2
   },
   {
    name:"publication 3",
    id:3
   },
]
