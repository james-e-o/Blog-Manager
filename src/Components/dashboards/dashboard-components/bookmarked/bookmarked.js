import React from 'react'
import "./bookmarked.css"

const Bookmarked = () => {
  return (
    <div className='mobile-new' >
      <div className="new-header">
            <div className="user">
            <div className='art'></div>
            </div>
            <nav >
              <button id='post'>Post</button>
              <div className='icon-wrap' >
                {/* <div className='' onClick={()=>setActiveMenu(!activeMenu)}><Menu_icon /></div>
                <div className={!activeMenu?"menu-drop roll-up":"menu-drop roll-down"}>
                  Menu_Drop hrllo
                </div> */}
              </div>     
            </nav>
      </div>
    </div>
  )
}

export default Bookmarked