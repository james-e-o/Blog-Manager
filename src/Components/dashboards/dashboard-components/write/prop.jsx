import React, { useEffect, useState, useContext } from 'react'
import logoImg from "../../feed/gemini-profile.jpeg"
import { Link,Form ,useActionData,redirect} from 'react-router-dom'
import Publications from '../bookmarked/Publications'
import { allTags } from '../explore/explore'
import User from "../../../contents/images/dummy.jpg"
import { PopUp } from '../../../../Layouts/LoggedLayout'





const Collaborators = ({load, userSearch, selected, value, inputValue}) => {
    const [users, setUsers] = useState([])
 
    useEffect(()=>{
        setUsers(value)
    })
    return(
        <div className="pick-contributors" >
            <div className="search">
                <figure>{search}</figure>
                <input value={inputValue} onInput={userSearch} type="search" name="" id="" placeholder='@user...'/>
            </div>
            {users && users.map(user => (
                <div key={user.id} className={`id-result ${user.username}`} onClick={selected} >
                    <figure><img src={User} width={'100%'} height={'100%'} /></figure>
                    <p className="user-name">
                        <span className="name">{user.name}</span>
                        <span className="username">@{user.username}</span>
                    </p>
                </div>
                ))
            }
        </div>
    )
}



const WriteProp = () => {
    const [furtherEdit, setFurtherEdit] = useState(false)
    const [newpub, setNewpub] = useState('')
    const [choosePub, setChoosePub] = useState(false)
    const [logoUrl, setLogoUrl] = useState("")
    const [collaborators, setCollaborators] = useState([])
    const [category, setCategory] = useState("")
    const [subCategory, setSubCategory] = useState("")
    const [suggestions, setSuggestions] = useState([])
    const [addSuggestions, setAddSuggestions] = useState([])
    const [popState, setPopState] = useState(false)
    const [popContent, setPopContent] = useState("")
    const [users, setUsers] = useState([])
    const [inputValue, setInputValue] = useState("")
    
    

    const [data, setData] =useState({
        publication_name:"",
        about:"",
        logo:logoUrl,
        niche:"",
        collaborators:collaborators
    })

    function handleInput ({target}){
        let value = target.value.toLowerCase()
        target.value===""? setSuggestions([]):
        setSuggestions(allTags.filter(tag => tag.name.toLocaleLowerCase().startsWith(value)))
        const listDisp = document.querySelector('.m-dashboard-main div.write')
        listDisp.scroll(0,450)
    }
    function handleAddInput ({target}){
        let value = target.value.toLowerCase()
        target.value===""? setAddSuggestions([]):
        setAddSuggestions(allTags.filter(tag => tag.name.toLocaleLowerCase().startsWith(value)))
        const listDisp = document.querySelector('.m-dashboard-main div.write')
        listDisp.scroll(0,450)
    }
    function trigger (e){ 
        e.preventDefault()
        const input = document.getElementById('pub-logo')
        input.click()
    }
    function mountUser ({target}){
       let selectedUserName = target.closest('div.id-result').classList[1]
       let selectedUser = users.filter(user => user.username === selectedUserName)
       setCollaborators(prev => [...prev, selectedUser[0]])
       setPopState(false)
       console.log(collaborators)
    }
    function unMountUser ({target}){
       let selectedUserName = target.closest('div.id-result').classList[1]
       let selectedUser = users.filter(user => user.username === selectedUserName)
       setCollaborators(prev => [...prev, selectedUser[0]])
       setPopState(false)
       console.log(selectedUser,collaborators)
    }
    async function handleSearch({target}){
        setInputValue(target.value)
        let value = target.value.toLowerCase()
        const response = await fetch('http://localhost:8000/users',{
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify({val:value}) 
        })
        const json = await response.json()
        if (response.ok){
            setUsers(json)
        } 
        value === ""? setUsers([]):""
    }
    useEffect(()=>{
        setChoosePub(false)
    },[newpub])
    useEffect(()=>{
          !popState? (setUsers([]) ,setInputValue("")):""
    },[popState])
 
  return (

    <div className="new-setup">
        <PopUp content={<Collaborators selected={mountUser} inputValue={inputValue} value={users} userSearch={handleSearch} clear={popState} />}  state={popState} deactivate={()=>setPopState(false)} />
        <div className="new-publication">
            <p className="title">Create new publication / Write new article</p>
            <p className="pub-wrap">
                <button onClick={()=>{newpub === 'newpub'? setNewpub(''):setNewpub('newpub')}} className="add-pub">Add Publication</button>
                <button onClick={()=>{newpub === 'newpost'? setNewpub(''):setNewpub('newpost')}} className="add-pub">Write Article</button>
            </p>
            {
            newpub === 'newpub'?
            <Form method='post' action='/home/write' className={'set-new-publication'}>
                <p style={{marginBottom: '15px',fontSize:"14px", color:"#242424"}}>New publication</p>
                <label>Publication name</label><br />
                <input type="text" /><br />
                <label>About publication</label><br />
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
                        <button onClick={(e)=> {e.preventDefault(), setLogoUrl("")}} >remove</button>
                    </p>
                </div>

                <div className="pick-niche">
                    <div className="niche-wrap">
                        <p>Select category</p>     
                        <div className="added">
                            <p className="tag">{category}</p>
                            {category === ""?
                                <input onInput={handleInput} style={{border:"none",padding:"0px"}} id='tags' size={4} type="text" placeholder='add tags...'/>
                                :
                                <span onClick={()=>setCategory("")}>{cancel}</span>
                            }
                        </div>
                    </div>
                    <div className="niche-wrap">
                        <p>Additional category</p>
                    
                        <div className="added">
                                <p className="tag">{subCategory}</p>
                                {subCategory === ""?
                                    <input onInput={handleAddInput} style={{border:"none",padding:"0px"}} id='tags' size={4} type="text" placeholder='add tags...'/>
                                    :
                                    <span onClick={()=>setSubCategory("")}>{cancel}</span>
                                }
                        </div>
                    </div>
                
                        <div className={suggestions.length !== 0 ?"tag-search active":"tag-search"}>
                            {suggestions.map(item =>(
                                <p key={item.id} onClick={()=>{
                                    setCategory(item.name)
                                    setSuggestions([])
                                }}>{item.name}</p>
                            ))}
                        </div>
            
                        <div className={addSuggestions.length !== 0 ?"tag-search active":"tag-search"}>
                            {addSuggestions.map(item =>(
                                <p key={item.id} onClick={()=>{
                                    setSubCategory(item.name)
                                    setAddSuggestions([])
                                }}>{item.name}</p>
                            ))
                            }
                        </div>
        
                </div>
                <div className="collab">
                    <p style={{marginLeft:"3px"}}>Add Collaborators</p>
                    <div className="add-copublishers">
                        {collaborators.map(user => (
                            <div key={user.id} className='person'>
                                <p onClick={()=>setCollaborators((prev) => prev.filter(person => person.username !== user.username))} className="remove">{cancel}</p>
                                <figure><img src={User} width={'100%'} height={'100%'} /></figure>
                                <p className="user-name">@{user.username}</p>
                            </div> 
                        ))}
                        <div onClick={()=>setPopState(true)} className='person' style={{borderRadius:"4px", }}>
                            <figure style={{border:"none"}}>{plus}</figure>
                        </div>
                    </div>
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
            </Form>
                : newpub === 'newpost' ?
            <div className="new-article">
                <p className='title'>Write new article</p>
                <div className="article-type">
                    <span className='type'>Choose type</span>
                    <p className='post-type' onClick={(e)=>{setChoosePub(false)}}>
                        <label htmlFor="post">Stand alone post </label>
                        <input id="post" readOnly checked={!choosePub? true:false} type="radio" name='post-type' value="single-post"/>
                    </p>
                    <p className='post-type' onClick={(e)=>{setChoosePub(true)}}>
                        <label >Add to publication </ label>

                        <span >{choosePub ? pullarrow : droparrow}</span>
                    </p>
               
                    {choosePub?
                    <div className='choose-pub'>
                    {pubs.map(pub => (
                        <p key={pub.id} onClick={(e)=>{setChoosePub(pub.id)}}className="pubs">
                            <span>{pub.name}</span>
                            <input readOnly checked={choosePub === pub.id? true:false}type="radio" name='pub' value="pub-1" />
                        </p>
                    ))}
                    </div>
                    : 
                    ""
                    }
                </div>
                <Link to={"/new-content/post/1234"} ><button className="write">Write</button></Link>
            </div>
                :
                ""
            }
  
        </div>
       
    </div>

  )
}

export default WriteProp




const cancel = <svg  xmlns="http://www.w3.org/2000/svg" fill='grey' height="19px" viewBox="0 -960 960 960" width="18px"><path d="m249-207-42-42 231-231-231-231 42-42 231 231 231-231 42 42-231 231 231 231-42 42-231-231-231 231Z"/></svg>
const search = <svg xmlns="http://www.w3.org/2000/svg" fill='orange'  viewBox="0 0 64 64" width="23px" height="23px"><path d="M 27 9 C 17.075 9 9 17.075 9 27 C 9 36.925 17.075 45 27 45 C 31.129213 45 34.9263 43.587367 37.966797 41.240234 L 51.048828 54.322266 C 51.952828 55.226266 53.418266 55.226266 54.322266 54.322266 C 55.226266 53.418266 55.226266 51.952828 54.322266 51.048828 L 41.240234 37.966797 C 43.587367 34.9263 45 31.129213 45 27 C 45 17.075 36.925 9 27 9 z M 27 13 C 34.719 13 41 19.281 41 27 C 41 34.719 34.719 41 27 41 C 19.281 41 13 34.719 13 27 C 13 19.281 19.281 13 27 13 z"/></svg>
const plus = <svg xmlns="http://www.w3.org/2000/svg" fill='#b1b1b1'  viewBox="2 1 49 50" ><path d="M25,2C12.317,2,2,12.317,2,25s10.317,23,23,23s23-10.317,23-23S37.683,2,25,2z M37,26H26v11h-2V26H13v-2h11V13h2v11h11V26z"/></svg>
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


export const CreatePublicationAction = async ({request}) => {
    let formData = await request.formData();
}

// loders
export const UserLoader = async ({res, params}) => {
    const response = await fetch('')

}