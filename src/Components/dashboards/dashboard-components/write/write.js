import React, { useState } from 'react'
import "./write.css"
import { Outlet,Link } from 'react-router-dom'
import Drafts from './draft'
import Published from './published'
import WriteProp from './prop'

const Write = () => {
  const [activeMenu, setActiveMenu] = useState('new')

  return (
    <div className='write'>
        <div className="write-header">
            <p onClick={()=>setActiveMenu('new')} className={activeMenu==='new'? 'active':""}>New</p>
            <p onClick={()=>setActiveMenu('draft')} className={activeMenu==='draft'? 'active':""}>Drafts</p>
            <p onClick={()=>setActiveMenu('published')} className={activeMenu==='published'? 'active':""}>Published articles</p>
        </div>
        <div className="write-content">
            {
              activeMenu === 'new'? <WriteProp/>: 
              activeMenu === 'draft'? <Drafts/>: 
              activeMenu === 'published'?<Published/> : ""
            }
        </div>
       
    </div>
  )
}

export default Write
