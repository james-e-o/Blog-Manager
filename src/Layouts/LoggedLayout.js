
import {Outlet , Link, useNavigation, useLocation} from 'react-router-dom'
import React, { createContext, useContext, useEffect, useRef, useState } from 'react'
import { screenWidth } from '../Components/app/App'
import "../Components/dashboards/mobile-dashboard.css"
import "../Components/dashboards/desktop-dashboard.css"
import Logo from '../Components/logo/logo'
import User from "../Components/contents/images/dummy.jpg"
import write from './icon-write.png'
import writefill from './icon-writefill.png'
import add from './icon-add.png'
import addfill from './icon-addfill.png'
import { Notify } from '../Components/svg'

const LoggedIn = () => {
  const part = '/loggedin/route'
  const screen = useContext(screenWidth)
  useEffect(()=>{
    const profile = document.querySelector('div.profile')
    const profilePic = document.getElementById('profile-pic')
    const dashboard = document.querySelector('.m-dashboard-main')
    profilePic.onclick = (e) => {
      profile.classList.toggle("inactive")
      dashboard.classList.toggle("blurred")
    }
  })
 
  return (
  // <div className='logged' 
  // style={{height:"100vh", width:"100vw", overflowX:"hidden", overflowY:"scroll"}}
  // >
  //   <Outlet />
  // </div>   
  //  MOBILE
  screen < 480?(
    <div id='m-dashboard' className='m-dashboard'>
      <header className='m-dashboard-header'>
        <Link to={'/'} ><div className="logo-wrap">
          <Logo space={'m'}/>
        </div></Link>
        <nav >
          <Link to={'notifications'} ><figure className='notify'><span className='alert'></span>{notify}</figure> </Link>
          <figure id='profile-pic'><img src={User} width="100%" height={"100%"} /></figure>    
        </nav>
      </header>
      <main className='m-dashboard-main'>
        <Outlet />
      </main>
      <div className="profile inactive"></div>
      <MenuBar/> 
    </div>
    
    )
    // TABLET
    :screen<720?(
      <header className='m-dashboard-header'>
      <h1>Skript_<span>n</span></h1> 
      <nav >
        <button >&#9998;Get started</button>  
      </nav>
      </header>
    ):
    //DESKTOP 
    (
    <header className='desk-dashboard-header'>
      <div className="desk-logo">
        <Logo />
        <h3>Skript_<span>n</span></h3> 
        <div class="search">
            <svg id="search" fill="none" height="16" viewBox="0 0 13 14" width="16" xmlns="http://www.w3.org/2000/svg"><path clip-rule="evenodd" d="m8.82264 10.3833c-.92307.7008-2.07429 1.1167-3.32264 1.1167-3.03757 0-5.5-2.46243-5.5-5.5s2.46243-5.5 5.5-5.5 5.5 2.46243 5.5 5.5c0 1.24835-.4159 2.39957-1.1167 3.32264l2.897 2.89706c.2929.2929.2929.7677 0 1.0606s-.7677.2929-1.0606 0zm.67736-4.3833c0 2.20914-1.79086 4-4 4s-4-1.79086-4-4 1.79086-4 4-4 4 1.79086 4 4z" fill="#B5B5B5" fill-rule="evenodd"/></svg>
            <input type="search" name="search" id="" placeholder="Search" />
        </div>
      </div>
      <nav className='desk-nav'>
        <button className='started'>&#9998; Write</button>  
        <figure id='profile-pic'><img src={User} width="100%" height={"100%"} /></figure>
      </nav>  
    </header>
  )
  )
}

export default LoggedIn



const MenuBar = () => {

  const location = useLocation()
  const [activeMenu, setActiveMenu] = useState('feeds')
  let split = location.pathname.split('/')
  
  return(
    <div onLoad={()=>setActiveMenu(`${split[split.length-1]}`)} className='menu-bar'>
      {/* <div className="menu-wrap"> */}
          <Link to={'bookmarks'}><p onClick={()=>{setActiveMenu('bookmarks')}} className="bookmark">{activeMenu==='bookmarks'?mainBookmarkfill:mainBookmark}</p></Link>
          {/* <Link to={'niche'}><p onClick={()=>{setActiveMenu('niche')}} className="add"><img src={activeMenu==='niche'?addfill:add} width="32px" height={"32px"} /></p></Link> */}
          <Link to={'write'}><p onClick={()=>{setActiveMenu('write')}} className="write"><img src={activeMenu==='write'?writefill:write} width="31px" height={"31px"} /></p></Link>
          <Link to={'explore'}><p onClick={()=>{setActiveMenu('explore')}} style={{top:"6px"}} className="explore">{activeMenu==='explore'?searchfill:search}</p></Link>
          <Link ><p onClick={()=>{setActiveMenu('dashboard')}} className="feeds">{activeMenu==='dashboard'?feedfill:feed}</p></Link>
      {/* </div> */}
</div>
  )
}    




// const search = <svg xmlns="http://www.w3.org/2000/svg" fill='slateblue'  viewBox="0 0 64 64" width="33px" height="33px"><path d="M 27 9 C 17.075 9 9 17.075 9 27 C 9 36.925 17.075 45 27 45 C 31.129213 45 34.9263 43.587367 37.966797 41.240234 L 51.048828 54.322266 C 51.952828 55.226266 53.418266 55.226266 54.322266 54.322266 C 55.226266 53.418266 55.226266 51.952828 54.322266 51.048828 L 41.240234 37.966797 C 43.587367 34.9263 45 31.129213 45 27 C 45 17.075 36.925 9 27 9 z M 27 13 C 34.719 13 41 19.281 41 27 C 41 34.719 34.719 41 27 41 C 19.281 41 13 34.719 13 27 C 13 19.281 19.281 13 27 13 z"/></svg>
const search = <svg xmlns="http://www.w3.org/2000/svg" fill='slateblue' height='38px' width='38px' viewBox="0 0 32 40" x="0px" y="0px"><g><path d="M11.48,20.71a9.23,9.23,0,1,1,9.23-9.23A9.24,9.24,0,0,1,11.48,20.71Zm0-16.46a7.23,7.23,0,1,0,7.23,7.23A7.24,7.24,0,0,0,11.48,4.25Z"/><path d="M27.87,28.87a1,1,0,0,1-.71-.29L19,20.42A1,1,0,0,1,20.42,19l8.16,8.16a1,1,0,0,1-.71,1.71Z"/></g></svg>
const searchfill = <svg xmlns="http://www.w3.org/2000/svg" fill='orange' height='38px' width='38px' viewBox="0 0 32 40" x="0px" y="0px"><g><path d="M11.48,2.25a9.23,9.23,0,1,0,9.23,9.23A9.24,9.24,0,0,0,11.48,2.25Z"/><path d="M27.87,28.87a1,1,0,0,1-.71-.29L19,20.42A1,1,0,0,1,20.42,19l8.16,8.16a1,1,0,0,1-.71,1.71Z"/></g></svg>

const notify =  <svg fill='slateblue' xmlns="http://www.w3.org/2000/svg" height="25px" viewBox="0 -960 960 960" width="25px"><path d="M160-200v-80h80v-280q0-83 50-147.5T420-792v-28q0-25 17.5-42.5T480-880q25 0 42.5 17.5T540-820v28q80 20 130 84.5T720-560v280h80v80H160Zm320-300Zm0 420q-33 0-56.5-23.5T400-160h160q0 33-23.5 56.5T480-80ZM320-280h320v-280q0-66-47-113t-113-47q-66 0-113 47t-47 113v280Z"/></svg>

const mainBookmark =  <svg xmlns="http://www.w3.org/2000/svg" fill="slateblue" x="0px" y="0px" width="33px" height="33px" viewBox="0 0 48 48"><path d="M 13.5 4 C 10.467 4 8 6.467 8 9.5 L 8 36 L 8 37.5 L 8 38.5 C 8 41.519774 10.480226 44 13.5 44 L 39.5 44 A 1.50015 1.50015 0 1 0 39.5 41 L 13.5 41 C 12.273237 41 11.277238 40.152347 11.050781 39 L 39.5 39 C 40.329 39 41 38.329 41 37.5 L 41 9.5 C 41 6.988 39.305 4.8678906 37 4.2128906 L 37 7.5136719 C 37.603 7.9706719 38 8.687 38 9.5 L 38 36 L 11 36 L 11 9.5 C 11 8.122 12.122 7 13.5 7 L 19 7 L 19 4 L 13.5 4 z M 21 4 L 21 5.5 L 21 7 L 21 20.5 A 1.50015 1.50015 0 0 0 23.21875 21.816406 L 28 19.208984 L 32.78125 21.816406 A 1.50015 1.50015 0 0 0 35 20.5 L 35 5.5 L 35 4 L 33.5 4 L 24 4 L 21 4 z M 24 7 L 32 7 L 32 17.972656 L 28.71875 16.183594 A 1.50015 1.50015 0 0 0 27.28125 16.183594 L 24 17.972656 L 24 7 z"></path></svg>
const mainBookmarkfill =  <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="33px" height="33px" viewBox="0,0,255.98959,255.98959"><g fill="orange" stroke="none"><g transform="scale(5.33333,5.33333)"><path d="M13.5,4c-3.033,0 -5.5,2.467 -5.5,5.5v26.5v1.5v1c0,3.01977 2.48023,5.5 5.5,5.5h26c0.54095,0.00765 1.04412,-0.27656 1.31683,-0.74381c0.27271,-0.46725 0.27271,-1.04514 0,-1.51238c-0.27271,-0.46725 -0.77588,-0.75146 -1.31683,-0.74381h-26c-1.22676,0 -2.22276,-0.84765 -2.44922,-2h28.44922c0.829,0 1.5,-0.671 1.5,-1.5v-28c0,-3.033 -2.467,-5.5 -5.5,-5.5h-0.5v16.5c0,0.529 -0.27938,1.01906 -0.73437,1.28906c-0.236,0.14 -0.50062,0.21094 -0.76562,0.21094c-0.247,0 -0.49475,-0.06159 -0.71875,-0.18359l-4.78125,-2.60937l-4.78125,2.60938c-0.464,0.254 -1.02737,0.24366 -1.48437,-0.02734c-0.455,-0.269 -0.73437,-0.76006 -0.73437,-1.28906v-16.5zM24,4v13.97266l3.28125,-1.78906c0.223,-0.122 0.47175,-0.18359 0.71875,-0.18359c0.247,0 0.49575,0.06159 0.71875,0.18359l3.28125,1.78906v-13.97266z"></path></g></g></svg>

const feed = <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="33px" height="33px" fill='slateblue' viewBox="0 0 32 32"><path d="M 16 2.59375 L 15.28125 3.28125 L 2.28125 16.28125 L 3.71875 17.71875 L 5 16.4375 L 5 28 L 14 28 L 14 18 L 18 18 L 18 28 L 27 28 L 27 16.4375 L 28.28125 17.71875 L 29.71875 16.28125 L 16.71875 3.28125 Z M 16 5.4375 L 25 14.4375 L 25 26 L 20 26 L 20 16 L 12 16 L 12 26 L 7 26 L 7 14.4375 Z"></path></svg>
const feedfill = <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="33px" height="33px" fill='orange' viewBox="0 0 24 24"><path d="M 12 2.0996094 L 1 12 L 4 12 L 4 21 L 10 21 L 10 14 L 14 14 L 14 21 L 20 21 L 20 12 L 23 12 L 12 2.0996094 z"></path></svg>


const categoryfill = <svg fill="slateblue" width="33px" height="33px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" stroke="slateblue" transform="rotate(0)"><g id="SVGRepo_bgCarrier" ></g><g id="SVGRepo_tracerCarrier"></g><g id="SVGRepo_iconCarrier"><path d="M10 3H4a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1zm10 10h-6a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-6a1 1 0 0 0-1-1zM17 3c-2.206 0-4 1.794-4 4s1.794 4 4 4 4-1.794 4-4-1.794-4-4-4zM7 13c-2.206 0-4 1.794-4 4s1.794 4 4 4 4-1.794 4-4-1.794-4-4-4z"></path></g></svg>
const category = <svg fill="slateblue" width="33px" height="33px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" stroke="slateblue"><g id="SVGRepo_bgCarrier"></g><g id="SVGRepo_tracerCarrier"></g><g id="SVGRepo_iconCarrier"><path d="M10 3H4a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1zM9 9H5V5h4v4zm11 4h-6a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-6a1 1 0 0 0-1-1zm-1 6h-4v-4h4v4zM17 3c-2.206 0-4 1.794-4 4s1.794 4 4 4 4-1.794 4-4-1.794-4-4-4zm0 6c-1.103 0-2-.897-2-2s.897-2 2-2 2 .897 2 2-.897 2-2 2zM7 13c-2.206 0-4 1.794-4 4s1.794 4 4 4 4-1.794 4-4-1.794-4-4-4zm0 6c-1.103 0-2-.897-2-2s.897-2 2-2 2 .897 2 2-.897 2-2 2z"></path></g></svg>

// const add = <svg width='33px' height='33px' fill='slateblue' xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0,0,100,100"> <g><path d="m74.91 11.379h-49.82c-8.3203 0-15.09 6.7617-15.09 15.082v45.449c0 8.3203 6.7695 15.09 15.09 15.09h49.828c8.3125 0 15.082-6.7695 15.082-15.09v-45.449c0-8.3203-6.7695-15.082-15.09-15.082zm6.8086 60.531c0 3.7617-3.0586 6.8086-6.8086 6.8086h-49.82c-3.7617 0-6.8086-3.0586-6.8086-6.8086v-45.449c0-3.7617 3.0586-6.8086 6.8086-6.8086h49.828c3.7617 0 6.8086 3.0586 6.8086 6.8086l0.003907 45.449z"/> <path d="m68.852 45.051h-14.711v-14.711c0-2.2891-1.8516-4.1406-4.1406-4.1406s-4.1406 1.8516-4.1406 4.1406v14.711h-14.711c-2.2891 0-4.1406 1.8516-4.1406 4.1406 0 2.2891 1.8516 4.1406 4.1406 4.1406h14.711v14.711c0 2.2891 1.8516 4.1406 4.1406 4.1406s4.1406-1.8516 4.1406-4.1406v-14.723h14.711c2.2891 0 4.1406-1.8516 4.1406-4.1406-0.011719-2.2812-1.8633-4.1289-4.1406-4.1289z"/></g> </svg>



const profiles = [
  
]
