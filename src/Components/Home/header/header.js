import './header.css'
import React, { useState, useEffect, useRef, useContext, useMemo} from 'react';
import{Link} from 'react-router-dom'
import { screenWidth } from '../../app/App';
import Logo from '../../logo/logo';
import search from "./ph-search.png"

const Header = () => {
  const [scroll, setScroll]= useState('')
  const [offline, setOffline]=useState(false)
  const [menuActive, setMenuActive]=useState(false)
  const scrollOffset =useRef(window.scrollY)
  const screen = useContext(screenWidth)

  useEffect(()=>{  
      let ScrollYvalue;
      
      if (screen>900){ScrollYvalue = 650}
      else if (screen<900){ScrollYvalue = 465}
      
      window.addEventListener('scroll',(e)=>{
        scrollOffset.current=window.scrollY
      
        if (window.scrollY>ScrollYvalue){
          setOffline(true)
        }else {setOffline(false)}
      })
   
       if (menuActive){
        document.body.style.position = 'fixed'
        document.body.style.top = `-${scrollOffset.current}px`
       }else{
        document.body.style.position = ''
        window.scrollTo(0, scroll);
       }
       setScroll(scrollOffset.current)
  },[menuActive,screen])
   
  return (
    
   <>
       {
        //  MOBILE
        screen<480?(
          <header className='m-header'>
             <div className='logo-wrap'>
              <Logo space={'m'}/>
              <h1 className='landing'>Skriptn</h1> 
            </div>
            <nav >
              <button className="nav-button">Sign in</button>  
              <div className='svg' onClick={ (e)=> {setMenuActive(!menuActive)}}>
                  
                    <svg className={offline? "main-svg nav-svg":"main-svg"}  data-name="Layer 1" id="Layer_1" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg"><path d="M21.86,18.73H9.18a2,2,0,0,1,0-4H21.86a2,2,0,0,1,0,4Z"/><path d="M54.82,18.73H34.88a2,2,0,0,1,0-4H54.82a2,2,0,0,1,0,4Z"/><path d="M54.82,34H9.18a2,2,0,0,1,0-4H54.82a2,2,0,0,1,0,4Z"/><path d="M54.82,49.27H30.07a2,2,0,0,1,0-4H54.82a2,2,0,0,1,0,4Z"/></svg>
              </div>        
            </nav>
            <div className={menuActive? "toggle-menu":"toggle-menu toggle-off"}>
                <div className='menu-header'>               
                  <svg  xmlns="http://www.w3.org/2000/svg" onClick={(e)=> setMenuActive(!menuActive)} fill='gray' height="38" viewBox="0 -960 960 960" width="38"><path d="m249-207-42-42 231-231-231-231 42-42 231 231 231-231 42 42-231 231 231 231-42 42-231-231-231 231Z"/></svg>
                </div>
                <div className='menu-main'>
                  <div className="search">
                    <figure><img src={search} width={'20px'} height={'20px'} /></figure>
                    <input type="search" name="" id="" placeholder='Search'/>
                  </div>
                  <p className="menu-list"><span>About</span></p>
                  <p className="menu-list"><span>Podcasts</span></p>
                  <p className="menu-list"><span>Contact us</span></p>
                  <ul>
                    <Link to={'/sign/signup'} state={{signValue:'signup'}}><li>Sign up</li></Link>
                    <Link to={'/sign/login'} state={{signValue:'login'}}><li>Login</li></Link>
                  </ul>
                  <p className='copyright'>Copyright &#169;2023, JAMES.E.O</p>
                </div>
            </div>
          </header>
          )
          // TABLET
          :screen<720?(
          <header className='t-header'>
            <div className='logo-wrap'>
             <Logo/>
             <h1 className='landing'>Skriptn</h1> 
           </div>
           <nav >
             <button className="nav-button">Sign in</button>  
             <div className='svg' onClick={ (e)=> setMenuActive(!menuActive)}>
                 
                   <svg className={offline? "main-svg nav-svg":"main-svg"}  data-name="Layer 1" id="Layer_1" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg"><path d="M21.86,18.73H9.18a2,2,0,0,1,0-4H21.86a2,2,0,0,1,0,4Z"/><path d="M54.82,18.73H34.88a2,2,0,0,1,0-4H54.82a2,2,0,0,1,0,4Z"/><path d="M54.82,34H9.18a2,2,0,0,1,0-4H54.82a2,2,0,0,1,0,4Z"/><path d="M54.82,49.27H30.07a2,2,0,0,1,0-4H54.82a2,2,0,0,1,0,4Z"/></svg>
             </div>        
           </nav>
           <div className={menuActive? "toggle-menu":"toggle-menu toggle-off"}>
               <div className='menu-header'>               
                 <svg  xmlns="http://www.w3.org/2000/svg" onClick={(e)=> setMenuActive(!menuActive)} fill='gray' height="38" viewBox="0 -960 960 960" width="38"><path d="m249-207-42-42 231-231-231-231 42-42 231 231 231-231 42 42-231 231 231 231-42 42-231-231-231 231Z"/></svg>
               </div>
               <div className='menu-main'>
                  <div className="search">
                    <figure><img src={search} width={'20px'} height={'20px'} /></figure>
                    <input type="search" name="" id="" placeholder='Search'/>
                  </div>
                  <p className="menu-list"><span>About</span></p>
                  <p className="menu-list"><span>Podcasts</span></p>
                  <p className="menu-list"><span>Contact us</span></p>
                  <ul>
                    <Link to={'/sign/signup'} state={{signValue:'signup'}}><li>Sign up</li></Link>
                    <Link to={'/sign/login'} state={{signValue:'login'}}><li>Login</li></Link>
                  </ul>
                  <p className='copyright'>Copyright &#169;2023, JAMES.E.O</p>
               </div>
           </div>
         </header>
          ):
          //DESKTOP 
          (
          <header className='d-header'>
            <div className="logo-wrap">
              <Logo/>
              <h1 className='landing'>Skriptn</h1> 
            </div>
            <nav className='desktop'>
                <ul>
                  <li>About</li>
                  <li>Podcasts</li>
                  <li>Contact us</li>
                </ul>
                <button className='started'>Sign in</button>
            </nav>
          </header>
           
          )}
        
       
        </> 
             
  )
}

export default Header