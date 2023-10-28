import React, { useContext, useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'

import "./mobile-dashboard.css"
import { screenWidth } from '../app/App'
import { Plus, Menu } from '../svg'


const UserDashboard = () => {
  const screen = useContext(screenWidth)
  const menuIcon =useRef()
  const [toggleMenu,setToggleMenu]=useState(false)
  // function toggleMenu(){
  //   menuIcon.classList.toggle("open-menu")
  // }
  return (
      //  MOBILE
      screen < 480?(
        <div className='m-dashboard'>
          <header className='m-dashboard-header'>
            <h1>Skript_<span>n</span></h1> 
            <nav >
              <figure></figure>     
            </nav>
          </header>
          <main className='m-dashboard-main'>
              <div className="welcome">
                <h2>Hi <span>{'James'}</span></h2>
              </div>
              <div className="adverts">d</div>
              <div className='search'>
                <p id='searchAI'>
                  Make Ai searches
                </p>
                <div className='textarea'>
                  <textarea name="search" id="" cols="28" rows="2"></textarea>
                </div>   
              </div>
              <div className='categories'></div>
              <div className="menu-bar">
                <div className="menu-wrap">
                  <div className="menu"></div>
                  <div className="menu"></div>
                  <div className="menu"></div>
                  <div className="menu"></div>
                  <div className={toggleMenu?'menus-icon':'menus-icon open-menu'} onClick={()=>setToggleMenu(!toggleMenu)}><Plus/></div>
                </div>
              </div>
          </main>
        </div>
        
        )
        // TABLET
        :screen<720?(
          <header className='m-dashboard-header'>
          <h1>Skript_<span>n</span></h1> 
          <nav >
            <button >&#9998;Get started</button>  
            <Menu/>   
          </nav>
          </header>
          // <div>
          //     <div className='menu-header'>               
          //       <svg  xmlns="http://www.w3.org/2000/svg" fill='gray' height="38" viewBox="0 -960 960 960" width="38"><path d="m249-207-42-42 231-231-231-231 42-42 231 231 231-231 42 42-231 231 231 231-42 42-231-231-231 231Z"/></svg>
          //     </div>
          //     <div className='menu-main'>
          //         <ul>
          //           <Link to={'/sign/signup'}><li>Sign up</li></Link>
          //           <Link to={'/sign/login'}><li>Login</li></Link>
          //         </ul>
          //     </div>
          // </div>
        ):
        //DESKTOP 
        (
        <header className='m-dashboard-header'>
        <h1>Skript_<span>n</span></h1> 
          <nav className='desktop'>
        {/* partner with us */}
          <ul>
            <li>About us</li>
            <li>Services</li>
            <li>Sign in</li>
          </ul>
          <button className='started'>Get started</button>
      </nav>  
      </header>
        )
  )
}

export default UserDashboard