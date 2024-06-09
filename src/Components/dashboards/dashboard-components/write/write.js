import React, { useState } from 'react'
import "./write.css"
import { Outlet,Link } from 'react-router-dom'
import Drafts from './draft'
import Published from './published'

const Write = () => {
  const [activeMenu, setActiveMenu] = useState('draft')

  return (
    <div className='write'>
        <div className="write-header">
          <div className="written">
            <p onClick={()=>setActiveMenu('draft')} className={activeMenu==='draft'? 'active':""}>Drafts</p>
            <p onClick={()=>setActiveMenu('published')} className={activeMenu==='published'? 'active':""}>Published articles</p>
          </div>
          <Link to={'/new-content'}><button id='new-article'>New Article</button></Link>
        </div>
        <div className="write-content">
            {activeMenu === 'draft'? <Drafts/>: activeMenu === 'published'?<Published/> : ""}
        </div>
       
    </div>
  )
}

export default Write
