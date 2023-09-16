import React, { useContext } from 'react'
import { Link } from 'react-router-dom'

import "./mobile-dashboard.css"
import { screenWidth } from '../app/App'


const UserDashboard = () => {
  const screen = useContext(screenWidth)
  return (
    <header className='m-dashboard-header'>
    <h1>Skript_<span>n</span></h1> 
     {
      //  MOBILE
      screen < 480?(
        <>
          <nav >
            <button >&#9998; </button>  
            <figure></figure>
            <div className='svg'>          
                  <svg  data-name="Layer 1" id="Layer_1" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg"><path d="M21.86,18.73H9.18a2,2,0,0,1,0-4H21.86a2,2,0,0,1,0,4Z"/><path d="M54.82,18.73H34.88a2,2,0,0,1,0-4H54.82a2,2,0,0,1,0,4Z"/><path d="M54.82,34H9.18a2,2,0,0,1,0-4H54.82a2,2,0,0,1,0,4Z"/><path d="M54.82,49.27H30.07a2,2,0,0,1,0-4H54.82a2,2,0,0,1,0,4Z"/></svg>
            </div>        
          </nav>
          {/* <div>
              <div className='menu-header'>               
                <svg  xmlns="http://www.w3.org/2000/svg" fill='gray' height="38" viewBox="0 -960 960 960" width="38"><path d="m249-207-42-42 231-231-231-231 42-42 231 231 231-231 42 42-231 231 231 231-42 42-231-231-231 231Z"/></svg>
              </div>
              <div className='menu-main'>
                  <ul>
                    <Link to={'/sign/signup'}><li>Sign up</li></Link>
                    <Link to={'/sign/login'}><li>Login</li></Link>
                  </ul>
              </div>
          </div> */}
        </>
        )
        // TABLET
        :screen<720?(
        <>
          <nav >
            <button >&#9998;Get started</button>  
            <div className='svg' >
                
                  <svg data-name="Layer 1" id="Layer_1" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg"><path d="M21.86,18.73H9.18a2,2,0,0,1,0-4H21.86a2,2,0,0,1,0,4Z"/><path d="M54.82,18.73H34.88a2,2,0,0,1,0-4H54.82a2,2,0,0,1,0,4Z"/><path d="M54.82,34H9.18a2,2,0,0,1,0-4H54.82a2,2,0,0,1,0,4Z"/><path d="M54.82,49.27H30.07a2,2,0,0,1,0-4H54.82a2,2,0,0,1,0,4Z"/></svg>
            </div>        
          </nav>
          <div>
              <div className='menu-header'>               
                <svg  xmlns="http://www.w3.org/2000/svg" fill='gray' height="38" viewBox="0 -960 960 960" width="38"><path d="m249-207-42-42 231-231-231-231 42-42 231 231 231-231 42 42-231 231 231 231-42 42-231-231-231 231Z"/></svg>
              </div>
              <div className='menu-main'>
                  <ul>
                    <Link to={'/sign/signup'}><li>Sign up</li></Link>
                    <Link to={'/sign/login'}><li>Login</li></Link>
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

export default UserDashboard