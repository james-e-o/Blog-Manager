import './header.css'
import React, { useState, useEffect, useRef, useContext} from 'react';
import{Link} from 'react-router-dom'
import { screenWidth } from '../app/App';

const Header = () => {
  const [scroll, setScroll]= useState('')
  const [offline, setOffline]=useState(false)
  const [menuActive, setMenuActive]=useState(false)
  const scrollOffset =useRef(Window.scrollY)
  const screen = useContext(screenWidth)

  useEffect(()=>{  
      let notMenu = screen -  310
      let ScrollYvalue;
      
      if (screen>900){ScrollYvalue = 660}
      else if (screen<900){ScrollYvalue = 465}
      
      window.addEventListener('scroll',(e)=>{
        scrollOffset.current=window.scrollY
      
        if (window.scrollY>ScrollYvalue){
          setOffline(true)
        }else {setOffline(false)}
      })
       document.addEventListener('click',(e)=>{
          if (menuActive===true && e.clientX<notMenu)
          setMenuActive(!menuActive)
       })
       if (menuActive){
        document.body.style.position = 'fixed'
        document.body.style.top = `-${scrollOffset.current}px`
       }else{
        document.body.style.position = ''
        window.scrollTo(0, scroll);
       }
       setScroll(scrollOffset.current)
       console.log(scroll)
  },[menuActive,screen])
   
  return (
    
    <header className={offline? "header active":"header"}>
      <h1>Skript_<span>n</span></h1> 
     
       {
        //  MOBILE
        screen<480?(
          <>
            <nav >
              <button className={offline? "nav-button":""}>&#9998; Read</button>  
              <div className='svg' onClick={ (e)=> setMenuActive(!menuActive)}>
                  
                    <svg className={offline? "main-svg nav-svg":"main-svg"}  data-name="Layer 1" id="Layer_1" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg"><path d="M21.86,18.73H9.18a2,2,0,0,1,0-4H21.86a2,2,0,0,1,0,4Z"/><path d="M54.82,18.73H34.88a2,2,0,0,1,0-4H54.82a2,2,0,0,1,0,4Z"/><path d="M54.82,34H9.18a2,2,0,0,1,0-4H54.82a2,2,0,0,1,0,4Z"/><path d="M54.82,49.27H30.07a2,2,0,0,1,0-4H54.82a2,2,0,0,1,0,4Z"/></svg>
              </div>        
            </nav>
            <div className={menuActive? "toggle-menu":"toggle-menu toggle-off"}>
                <div className='menu-header'>               
                  <svg  xmlns="http://www.w3.org/2000/svg" onClick={(e)=> setMenuActive(!menuActive)} fill='gray' height="38" viewBox="0 -960 960 960" width="38"><path d="m249-207-42-42 231-231-231-231 42-42 231 231 231-231 42 42-231 231 231 231-42 42-231-231-231 231Z"/></svg>
                </div>
                <div className='menu-main'>
                    <ul>
                      <Link to={'/sign/signup'} state={{signValue:'signup'}}><li>Sign up</li></Link>
                      <Link to={'/sign/login'} state={{signValue:'login'}}><li>Login</li></Link>
                    </ul>
                </div>
            </div>
          </>
          )
          // TABLET
          :screen<720?(
          <>
            <nav >
              <button className={offline? "nav-button":""}>&#9998;Get started</button>  
              <div className='svg' onClick={ (e)=> setMenuActive(!menuActive)}>
                  
                    <svg className={offline? "main-svg nav-svg":"main-svg"}  data-name="Layer 1" id="Layer_1" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg"><path d="M21.86,18.73H9.18a2,2,0,0,1,0-4H21.86a2,2,0,0,1,0,4Z"/><path d="M54.82,18.73H34.88a2,2,0,0,1,0-4H54.82a2,2,0,0,1,0,4Z"/><path d="M54.82,34H9.18a2,2,0,0,1,0-4H54.82a2,2,0,0,1,0,4Z"/><path d="M54.82,49.27H30.07a2,2,0,0,1,0-4H54.82a2,2,0,0,1,0,4Z"/></svg>
              </div>        
            </nav>
            <div className={menuActive? "toggle-menu":"toggle-menu toggle-off"}>
                <div className='menu-header'>               
                  <svg  xmlns="http://www.w3.org/2000/svg" onClick={(e)=> setMenuActive(!menuActive)} fill='gray' height="38" viewBox="0 -960 960 960" width="38"><path d="m249-207-42-42 231-231-231-231 42-42 231 231 231-231 42 42-231 231 231 231-42 42-231-231-231 231Z"/></svg>
                </div>
                <div className='menu-main'>
                    <ul>
                      <Link to={'/sign/signup'} state={{signValue:'signup'}}><li>Sign up</li></Link>
                      <Link to={'/sign/login'} state={{signValue:'login'}}><li>Login</li></Link>
                    </ul>
                </div>
            </div>
          </>
          ):
          //DESKTOP 
          (
            <nav className='desktop'>
          {/* partner with us */}
            <ul>
              <li>About us</li>
              <li>Services</li>
              <li>Sign in</li>
            </ul>
            <button className='started'>Get started</button>
        </nav>  
          )}
        
       
          
             
    </header>
  )
}

export default Header