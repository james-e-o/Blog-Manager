import React, { useState } from 'react'

const WriteProp = () => {
    const [furtherEdit, setFurtherEdit] = useState(false)
    const [logoUrl, setLogoUrl] = useState("")
    const [collaborators, setCollaborators] = useState([])
    function trigger (){
        const input = document.getElementById('pub-logo')
        input.click()
    }
  return (
    <>
    {furtherEdit?
    <div className="further-edit">
        <p className="control" onClick={()=>setFurtherEdit(false)}>{cancel}</p>
        further
    </div> :
    <div className="new-setup">
        <div className="new-publication">
            <p className="title">Create new publication</p>
            <button className="add-pub">Add Publication</button>
            <div className="set-new-publication">
                <label>Publication name</label><br />
                <input type="text" /><br />
                <label>Description</label><br />
                <textarea id=""></textarea>
                <p className="add-logo">
                    <label>Add logo</label><br />
                    <input hidden type="file" id="pub-logo" onChange={(e)=>{
                         let file = e.target.files[0]
                         let reader = new FileReader()
                         reader.onload=()=>{
                           setLogoUrl(reader.result)
                         }
                         file?reader.readAsDataURL(file):""
                    }} />
                    <button className="insert-logo" onClick={trigger}>Insert</button><br />
                    <img src={logoUrl?logoUrl:""} width={logoUrl?70:0} height={logoUrl?70:0} />
                    <span onClick={()=> setLogoUrl("")} >remove</span>
                </p>
                <p className="about publication"><span>About publication</span> <button onClick={()=>setFurtherEdit(true)}>edit</button></p>
                <div className="pick-niche">Select your niche 
                    <select name="" id="">
                        <option value="">tech</option>
                        <option value="">politics</option>
                        <option value="">sports</option>
                        <option value="">climate</option>
                    </select>
                </div>
                <div className="collab">Add Collaborators
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
                <button className="submit">Submit</button>
            </div>
        </div>
        <div className="new-publication">
            <p>New Article</p>
            <p className="article-type">
                <span>Type</span><br />
                <label for="post">Stand alone post </label>
                <input type="radio" id="post" name='type' value="HTML"/><br />
                <label for="post">Add to publication </label>
                <input type="radio" id="post" name='type' value="HTML"/>
            </p>
        </div>
    </div>
    }
    </>
  )
}

export default WriteProp




const cancel = <svg  xmlns="http://www.w3.org/2000/svg" fill='grey' height="33px" viewBox="0 -960 960 960" width="33px"><path d="m249-207-42-42 231-231-231-231 42-42 231 231 231-231 42 42-231 231 231 231-42 42-231-231-231 231Z"/></svg>