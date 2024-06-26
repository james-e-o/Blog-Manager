import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import "./bookmarked.css"
import Publications from './Publications'
import Articles from './Articles'


const Bookmarked = () => {
  const [activeMenu, setActiveMenu] = useState('publications')

  return (
    <div className='bookmark'>
    <div className="bookmark-header">
      <div className="articles">
        <button onClick={()=>setActiveMenu('publications')} className={activeMenu==='publications'? 'active':""}>Publications</button>
        <button onClick={()=>setActiveMenu('articles')} className={activeMenu==='articles'? 'active':""}>Articles</button>
      </div>
    </div>
    <div className="write-content">
        {activeMenu === 'publications'? <Publications/>: activeMenu === 'articles'?<Articles/> : ""}
    </div>
   
</div>
  )
}

export default Bookmarked