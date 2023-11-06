import React, { useContext, useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'

import "./mobile-dashboard.css"
import { screenWidth } from '../app/App'
import { Plus, Menu, Notify, Arrow, Arrow_f, RoundMenu, Arrow_b } from '../svg'


const UserDashboard = () => {
  const screen = useContext(screenWidth)
  const menuIcon =useRef()
  const [toggleMenu,setToggleMenu]=useState(false)
  const niches = [{id:1, name:'Finance'}, {id:2,name:'Business'}, {id:3,name:'Culture'}, {id:4,name:'Technology'},{id:5,name:'Politics'}, {id:6,name:'Sports'}, {id:7,name:'Music'}, {id:8,name:'Religion'}, {id:9,name:'Self Improvement'}, {id:10,name:'Art'}, {id:11,name:'News'}]
  const niche3 = niches.filter(niche => niche.id <= 3)
  return (
      //  MOBILE
      screen < 480?(
        <div className='m-dashboard'>
          <header className='m-dashboard-header'>
            <div className="user">
              <figure></figure>
              <div className="welcome">
                <p>Hello,</p>
                <h3>Jamie</h3>
              </div>
            </div>
            <nav >
              <figure><Notify/></figure>     
            </nav>
          </header>
          <main className='m-dashboard-main'>
              <div className='search'>
                <input type="search" name="search" id="" /> 
              </div>
              <div className="adverts">d</div>
                <p className='niche'>niche</p>
              <div className='categories'>
                <div className='niche-scroll'>
                {niche3.map((niche)=>(
                <div className='category' key={niche.id}>{niche.name}</div>
                ))}
                </div>
                <button className='arrow-f'><Arrow_f/></button>
              </div>
              <p className='niche'>feed</p>
              <div className="feeds">
                  <div className="feed">

                  </div>
              </div>
              <div className={'menu-bar'}>
                <div className={'blunt-fixed'}>
                      <div className="menu-wrap">
                          <div className={toggleMenu?'open-menu':'menu'} style={toggleMenu?{position:"relative",transition:"all 200ms ease-out"}:{position:"absolute", transition:"transition: all 250ms ease-out"}}>4</div>
                          <div className={toggleMenu?'open-menu':'menu'} style={toggleMenu?{position:"relative",transition:"all 200ms ease-out"}:{position:"absolute", transition:"transition: all 250ms ease-out"}}>3</div>
                          <div className={toggleMenu?'open-menu':'menu'} style={toggleMenu?{position:"relative",transition:"all 200ms ease-out"}:{position:"absolute", transition:"transition: all 250ms ease-out"}}>2</div>
                      <div className={toggleMenu?'menus-icon-active':'menus-icon'} onClick={()=>setToggleMenu(!toggleMenu)}>{toggleMenu?<Arrow_b/>:<RoundMenu/>}</div>          
                      </div>
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