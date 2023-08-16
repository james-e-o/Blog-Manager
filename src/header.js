import './header.css'
import React, { useState, useEffect } from 'react';

const Header = () => {
    // const [fixedOff, setFixedOff] = useState('')
    const [fixedOn, setFixedOn] = useState('')
    const [offline, setOffline]=useState(false)
    const [menuActive, setMenuActive]=useState(false)

    function scrollPosition(){
      setFixedOn(window.scrollY)
    }
   
    useEffect(()=>{
      const ScrollYvalue = 465
      window.addEventListener('scroll',(e)=>{
        if (window.scrollY>ScrollYvalue){
          setOffline(true)
        }else {setOffline(false)}
      })
      if (menuActive) {
        window.addEventListener('scroll', scrollPosition);
      } else {
        window.removeEventListener('scroll', scrollPosition);
      }

      document.addEventListener('click',(e)=>{
        if (menuActive===true && e.clientX<92)
        enableStatic(e)
      })
    },[menuActive])
    function enableStatic(e){
      // console.log('status =', fixedOn )
      if (menuActive===false) {
        document.body.style.position = `fixed`;
        document.body.style.top = `-${fixedOn}px`;
      } else {
      document.body.style.position = 'static';
      document.body.style.top = setFixedOn;
    }
      setMenuActive(!menuActive)
    }
   
  return (
    <header className={offline? "header active":"header"}>
       <h1>Skript_<span>n</span></h1>
       <nav >
       <button className={offline? "nav-button":""}>&#9998; Write</button>
       <div className='svg' onClick={(e)=>{enableStatic(e)}}>
            <svg className={offline? "main-svg nav-svg":"main-svg"}  data-name="Layer 1" id="Layer_1" viewBox="0 0 64 64" width="30px" height="30px" xmlns="http://www.w3.org/2000/svg"><path d="M21.86,18.73H9.18a2,2,0,0,1,0-4H21.86a2,2,0,0,1,0,4Z"/><path d="M54.82,18.73H34.88a2,2,0,0,1,0-4H54.82a2,2,0,0,1,0,4Z"/><path d="M54.82,34H9.18a2,2,0,0,1,0-4H54.82a2,2,0,0,1,0,4Z"/><path d="M54.82,49.27H30.07a2,2,0,0,1,0-4H54.82a2,2,0,0,1,0,4Z"/></svg>
       </div>       
       <ul>
          <li>Sign up</li>
          <li>Login</li>
       </ul>
       </nav>
       <div className={menuActive? "toggle-menu":"toggle-menu toggle-off"}>
              <div className='menu-header'>               
                <svg  xmlns="http://www.w3.org/2000/svg" onClick={(e)=>{enableStatic(e)}} fill='gray' height="38" viewBox="0 -960 960 960" width="38"><path d="m249-207-42-42 231-231-231-231 42-42 231 231 231-231 42 42-231 231 231 231-42 42-231-231-231 231Z"/></svg>
              </div>
          </div>
    </header>
  )
}

export default Header