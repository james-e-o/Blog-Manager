import React, { createContext, useContext, useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'

import "./mobile-dashboard.css"
import "./desktop-dashboard.css"
import { screenWidth } from '../app/App'
import { Plus, Menu, Notify, RoundMenu, Arrow_B, Bookmark2, Menu_icon } from '../svg'
import Logo from '../logo/logo'
import CL_logo from "../contents/images/category-pirates-logo.png"
import Gl_ai from "../contents/images/glai.png"
import Content_img from "../contents/images/category-pirates.png"
import User from "../contents/images/dummy.jpg"
import Content_img2 from "../contents/images/glai-hackathon.jpeg"
const popCheck = createContext('')

const UserDashboard = () => {
  const screen = useContext(screenWidth)
  const niches = [{id:1, name:'Finance'}, {id:2,name:'Business'}, {id:3,name:'Culture'}, {id:4,name:'Technology'},{id:5,name:'Politics'}, {id:6,name:'Sports'}, {id:7,name:'Music'}, {id:8,name:'Religion'}, {id:9,name:'Self Improvement'}, {id:10,name:'Art'}, {id:11,name:'News'}]
  const niche3 = niches.filter((niche) => niche.name.length <= 6)
  const mainDashboard = useRef("")
  const blurScreen = useRef("")
  function feedPop (){
    const feedPopBox = document.querySelector("div.feed-pop")
      feedPopBox.classList.toggle("feed-pop-inactive")
      feedPopBox.classList.toggle("feed-pop-active")
      console.log('happy')
  }
  // 
  return (
      //  MOBILE
      screen < 480?(
        <div className='m-dashboard'>
          <header className='m-dashboard-header'>
            <div className="logo-wrap">
              <Logo space={'m'}/>
            </div>
            <nav >
              <figure className='notify'>{search}</figure> 
              <figure className='notify'><Notify/></figure> 
              <figure id='profile-pic'><img src={User} width="100%" height={"100%"} /></figure>    
            </nav>
          </header>
          <main ref={mainDashboard} className='m-dashboard-main'>
              <div className="blur" id='blurscreen' ref={blurScreen}></div>
              
              {/* <div className="advert-wrapper">
                <div className="adverts">
                  <div className="advert"></div>
                  <div className="advert"></div>
                  <div className="advert"></div>
                  <div className="advert"></div>
                  <div className="advert"></div>
                </div>
              </div>
              <p className='niche'>niche</p>
              <div className='categories'>
                  {niche3.map((niche)=>(
                  <Link to={"niche"}><div className='category' key={niche.id}>{niche.name}</div></Link>
                  ))}
                  <Link to={"niche"}><button className='arrow-f'>more</button></Link>
              </div> */}
              <div className="feed-header">
                <p className='feed-text'>feeds</p>
                <div className="feed-collection">
                  <a className='feed-type'>personalized</a>
                  <a className='feed-type'>following</a>
                  <a className='feed-type'>featured</a>
                </div>
              </div>
              <div className="feeds">
                  <div className='feed'>
                    <div className="feed-content">
                      <div className="content-id">
                        <figure><img src={CL_logo} width="100%" height={"100%"} /></figure>
                          <p className='content-author'> {"CATEGORY PIRATES"} </p>
                        </div>
                        <div className='content-title'>The Value Of Your Value.</div>
                        <div className="details">
                           <p>6 mins read</p>
                           <div className="detail-options" onClick={feedPop}>...</div>
                        </div> 
                    </div>
                    <div className="content-image"><img src={Content_img} width="100%" height={"100%"} /></div>
                  </div>
                  <div className='feed'>
                    <div className="feed-content">
                      <div className="content-id">
                        <figure><img src={Gl_ai} width="100%" height={"100%"} /></figure>
                          <p className='content-author'> {"GETLINKED AI"} </p>
                        </div>
                        <div className='content-title'>Where Dreams Meet Opportunities</div>
                        <div className="details">
                           <p>6 mins read</p>
                           <div className="detail-options" onClick={feedPop}>...</div>
                        </div> 
                    </div>
                    <div className="content-image"><img src={Content_img2} width="100%" height={"100%"} /></div>
                  </div>
          
              </div>         
              <MenuBar/> 
              <div className="feed-pop feed-pop-inactive">
                <p>like</p>
                <p>bookmark</p>
                <p>citation</p>
                <p>concursion</p>
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
            <Menu_icon/>   
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

export default UserDashboard

const MenuBar = () => {
  const [toggleMenu,setToggleMenu]=useState(false)
  const [activeIndex, setActiveIndex] = useState(0)
  function resetActiveIndex(){
    if (activeIndex !== 0){
      setActiveIndex(0)
    }
  }
  
  useEffect(()=>{
    document.onpointerdown = (e)=> {
      if (toggleMenu && activeIndex === 0 && !e.target.closest("div.menu-wrap") ){
          setToggleMenu(false)
      }
    }
    if (activeIndex !==0 && activeIndex !== null){
      document.getElementById("blurscreen").style.position="absolute"
    } else {
      document.getElementById("blurscreen").style.position="static"
    }  
  })
  return (
    // <popCheck.Provider value={activeIndex}>
      <div className={'menu-bar'}>
        {/* <div className={'blunt-fixed'}>
          <div className="menu-wrap">
              <Menus isToggled={activeIndex===1} togglepop={(e)=>{if (e.target.matches(".menu-pop")) {return} else activeIndex!==1?setActiveIndex(1):setActiveIndex(0)}} togglemenu={toggleMenu} index={1} content={<Options/>} icon={<Plus/>}/>
              <Menus isToggled={activeIndex===2} togglepop={(e)=>{if (e.target.matches(".menu-pop")) {return} else activeIndex!==2?setActiveIndex(2):setActiveIndex(0)}} togglemenu={toggleMenu} index={2} content={<Bookmarks/>} icon={<Bookmark2/>}/>
              <Menus isToggled={activeIndex===3} togglepop={(e)=>{if (e.target.closest(".menu-pop")) {return} else activeIndex!==3?setActiveIndex(3):setActiveIndex(0)}} togglemenu={toggleMenu} index={3} content={<Create/>} icon={<Plus/>}/>
              <div className={toggleMenu?'menus-icon-active':'menus-icon'} onClick={()=>{setToggleMenu(!toggleMenu);resetActiveIndex()}}>{toggleMenu?<Arrow_B/>:<RoundMenu/>}</div>          
          </div>
        </div> */}
      </div>
    // </popCheck.Provider>
  )
}
const Menus = ({togglemenu,content, index, icon,togglepop, isToggled}) => {
  const [popvalue, setPopvalue] = useState(window.innerWidth/200)
  useEffect(()=>{
    document.querySelectorAll(".menu-pop").forEach(pop => {
      pop?.style.setProperty('--center-offset',`${popvalue}px`)
    })
  },[])
 
  return (
    <div onClick={togglepop} className={togglemenu?'open-menu':'menu'} style={togglemenu?{position:"static",transition:"all 140ms ease-out"}:{position:"absolute", transition:" all 260ms ease-out"}}>{icon}
      <div className={!isToggled?`menu-pop pop${index}`:`menu-pop menu-pop-open${index}`}>{content}</div>
    </div>
  )
}
const Create = () => {
  return (
    <div className='create-content'>
      <div className="drafts">
        <h5 id='draft'>Drafts</h5>
        <Link  to={'new'}><p className="draft1">Alice in wonderland</p></Link>
        <Link  to={'new'}><p className="draft1">Art of command: Admiral Chester Nimitz</p></Link>
        <Link  to={'new'}><p className="draft1">Adventures of souza</p></Link>
        <h5 id='more'>more ...</h5>
      </div>
      <div className='create-buttons'>
        <Link to={'new'}><button id='add-content' >New post</button></Link>
      </div>
    </div>
  )
}
const Bookmarks = () => {
  return (
    <div className='create-content'>
      <h1>Add new content</h1>
     <button id='adda-content' >Get started</button>
    </div>
  )
}
const Options = () => {
  return (
    <div className='options'>
      <h1>Add new content</h1>
     <button id='add-content' >Get started</button>
    </div>
  )
}



// UTILITY CODE HERE
// =====================

// function handlePop (e){
//   // const parent = e.target.closest('.menu-wrap')
//   // if(e.target == pop.current)return
//   // else {
//     activeIndex()
//     setTogglePop(!togglePop)
//     let siblings = Array.from(document.querySelectorAll('.menu-pop'))
//     let nonactives = siblings.filter(sibling => !sibling.classList.contains(`menu-pop-open${index}`))
//     // nonactives.forEach((nonactive)=>{
//     //   nonactive.classList.remove()
//     // })
//     // // siblings.forEach(sibling => {
//     //   if (!sibling.classList.contains(`pop${index}`)){
        
//     //   }
//     // })
//     // if (currentActiveIndex === index)
//     console.log(currentActiveIndex, nonactives)
//   // }
// }
// useEffect(()=>{
//   activeIndex()
//   console.log(currentActiveIndex)
// })
// function toggleBlur(){
  //   if (activeIndex !== 0){
  //     setActiveIndex(0)
  //   }
  // }
  // function disbleScroll(){
  //   if (activeIndex !== 0){
  //     document.body.style.position = 'fixed'
  //     document.body.style.top = `-${scrollOffset.current}px`
  //    }else{
  //     document.body.style.position = ''
  //     window.scrollTo(0, scroll);
  //    }
  //    setScroll(scrollOffset.current)
  // }

const search = <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 64 64" width="24px" height="24px"><path d="M 27 9 C 17.075 9 9 17.075 9 27 C 9 36.925 17.075 45 27 45 C 31.129213 45 34.9263 43.587367 37.966797 41.240234 L 51.048828 54.322266 C 51.952828 55.226266 53.418266 55.226266 54.322266 54.322266 C 55.226266 53.418266 55.226266 51.952828 54.322266 51.048828 L 41.240234 37.966797 C 43.587367 34.9263 45 31.129213 45 27 C 45 17.075 36.925 9 27 9 z M 27 13 C 34.719 13 41 19.281 41 27 C 41 34.719 34.719 41 27 41 C 19.281 41 13 34.719 13 27 C 13 19.281 19.281 13 27 13 z"/></svg>
const notify =  <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px"><path d="M160-200v-80h80v-280q0-83 50-147.5T420-792v-28q0-25 17.5-42.5T480-880q25 0 42.5 17.5T540-820v28q80 20 130 84.5T720-560v280h80v80H160Zm320-300Zm0 420q-33 0-56.5-23.5T400-160h160q0 33-23.5 56.5T480-80ZM320-280h320v-280q0-66-47-113t-113-47q-66 0-113 47t-47 113v280Z"/></svg>