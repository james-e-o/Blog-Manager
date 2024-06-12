import React, { useState, lazy, Suspense, useEffect } from 'react'
import { Link } from 'react-router-dom'
import "./explore.css"
import { niches } from '../../../Home/main/main'


const Explore = () => {

const [activeLink, setActiveLink] =useState('topics')

  return (
    <div className="explore-page">
        <Link to='/
        search' ><div className='search-link'>
            <figure>{search}</figure>
        </div></Link>
        <h5 id='tag-text'>Suggested</h5>
        <div className="explore-actions">
          <div className="explore-scroll">
            <p className={activeLink === 'topics'? 'active':''} onClick={()=>{setActiveLink('topics')}} >Topics</p>
            <p className={activeLink === 'people'? 'active':''} onClick={()=>{setActiveLink('people')}} >People</p>
            <p className={activeLink === 'publications'? 'active':''} onClick={()=>{setActiveLink('publications')}} >Publications</p>
            <p className={activeLink === 'history'? 'active':''} onClick={()=>{setActiveLink('history')}} >History</p>
          </div>
          <div className="explore-content">
            {activeLink === 'topics'? <Topics/>:
              activeLink === 'people'? <People/>:
              activeLink === 'publications'? < Publications/>:
              activeLink === 'history'? <History/>:''
            }
          </div>







       
        </div>
    </div>
  )
}

export default Explore;


const Topics =() => {
  const tagList = [...niches]
  const [selected, setSelected] =useState([])
  useEffect(()=>{
    console.log(selected)
  },[selected])
  return (
    <div className='topic e'>
    <p className='choose-text'>Choose your favourite topics.</p>
    {tagList.map((tag)=>(
    <button onClick={()=>{selected.includes(tag.name.toLowerCase())? setSelected(selected.filter(item => item !== tag.name.toLowerCase())) : setSelected([...selected, tag.name.toLowerCase()])}} className='tag' key={tag.id}><span></span> {tag.name}</button>
    ))}
    <p className="more"><span>+ </span>See more topics</p>
    </div>
  )
}

const People =() => {
  return (
    <div className='people e'>
     <p className='choose-text'>Who to follow.</p>
    </div>
  )
}

const Publications =() => {
  return (
    <div>
      publications
    </div>
  )
}

const History =() => {
  return (
    <div>
      history
    </div>
  )
}
// }


const search = <svg xmlns="http://www.w3.org/2000/svg" fill='orange'  viewBox="0 0 64 64" width="28px" height="28px"><path d="M 27 9 C 17.075 9 9 17.075 9 27 C 9 36.925 17.075 45 27 45 C 31.129213 45 34.9263 43.587367 37.966797 41.240234 L 51.048828 54.322266 C 51.952828 55.226266 53.418266 55.226266 54.322266 54.322266 C 55.226266 53.418266 55.226266 51.952828 54.322266 51.048828 L 41.240234 37.966797 C 43.587367 34.9263 45 31.129213 45 27 C 45 17.075 36.925 9 27 9 z M 27 13 C 34.719 13 41 19.281 41 27 C 41 34.719 34.719 41 27 41 C 19.281 41 13 34.719 13 27 C 13 19.281 19.281 13 27 13 z"/></svg>