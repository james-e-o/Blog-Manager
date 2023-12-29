import React from 'react'
import "./bookmarked.css"

const Bookmarked = () => {
  return (
    <div className='mobile-bookmark' >
      <div className="bookmark-header">
          <div className="logo">
            <div className='art'></div>
          </div>
            <nav >
              <div className="user">  </div>
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