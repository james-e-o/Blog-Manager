import './header.css'
import React, { useState, useEffect, useRef } from 'react';

const Header = () => {
    const [offline, setOffline]=useState(false)
    const [isActive, setIsActive]=useState(false)
    useEffect(()=>{
      const ScrollYvalue = 465
      window.addEventListener('scroll',(e)=>{
        if (window.scrollY>ScrollYvalue){
          setOffline(true)
        }else {setOffline(false)}
      })
    },[])
    function toggleMenu(){
      setIsActive(!isActive)
      console.log(isActive)
    }
  return (
    <header className={offline? "header active":"header"}>
       <h1 onClick={()=>toggleMenu()}>Skript_<span>n</span></h1>
       <nav >
       <button className={offline? "nav-button":""}>&#9998; Write</button>
       <div className='svg' onClick={()=>toggleMenu()}>
            <svg className={offline? "nav-svg":""}  data-name="Layer 1" id="Layer_1" viewBox="0 0 64 64" width="30px" height="30px" xmlns="http://www.w3.org/2000/svg"><path d="M21.86,18.73H9.18a2,2,0,0,1,0-4H21.86a2,2,0,0,1,0,4Z"/><path d="M54.82,18.73H34.88a2,2,0,0,1,0-4H54.82a2,2,0,0,1,0,4Z"/><path d="M54.82,34H9.18a2,2,0,0,1,0-4H54.82a2,2,0,0,1,0,4Z"/><path d="M54.82,49.27H30.07a2,2,0,0,1,0-4H54.82a2,2,0,0,1,0,4Z"/></svg>
       </div>       
       <ul>
          <li>Sign up</li>
          <li>Login</li>
       </ul>
       <div className={isActive? "toggle-menu toggle-off":"toggle-menu"}></div>
       </nav>
    </header>
  )
}

export default Header