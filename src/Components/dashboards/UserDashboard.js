import React, { createContext, useContext, useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'

import "./mobile-dashboard.css"
import { screenWidth } from '../app/App'
import { Plus, Menu, Notify, RoundMenu, Arrow_B, Bookmark2 } from '../svg'
import logo from "../contents/images/category-pirates-logo.png"
import Content_img from "../contents/images/category-pirates.png"
const popCheck = createContext('')

const UserDashboard = () => {
  const [innerWidth, setInnerWidth] = useState(window.innerWidth)
  // useEffect(() => {
  //   window.onresize = () => {
  //     setInnerWidth(window.innerWidth)
  //   }
  // })
  const screen = innerWidth
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
  useEffect(()=>{
  //   const feedPopBox = document.querySelector("div.feed-pop")
  //  document.addEventListener("click",(e)=>{
  //   if (feedPopBox.classList.contains('feed-pop-active') && !e.target.closest("div.feed-pop")){
  //     feedPopBox.classList.toggle("feed-pop-inactive")
  //     feedPopBox.classList.toggle("feed-pop-active")
  //   }else if (!feedPopBox.classList.contains('feed-pop-active') && e.target.matches("div.detail-options")){
  //     feedPopBox.classList.toggle("feed-pop-inactive")
  //     feedPopBox.classList.toggle("feed-pop-active")
  //   }
  //  })
  })
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
          <main ref={mainDashboard} className='m-dashboard-main'>
              <div className="blur" id='blurscreen' ref={blurScreen}></div>
              <div className='search'>
                <input type="search" name="search" id="" /> 
              </div>
              <div className="advert-wrapper">
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
                  <div className='category' key={niche.id}>{niche.name}</div>
                  ))}
                  <button className='arrow-f'>more</button>
              </div>
              <p className='niche'>feeds</p>
              <div className="feeds">
                  <div className='feed'>
                    <div className="feed-content">
                      <div className="content-id">
                        <figure></figure>
                          <p className='content-author'> {"CATEGORY PIRATES"} </p>
                        </div>
                        <div className='content-title'>The Value Of Your Value.</div>
                        <div className="details">
                           <p>6 mins read</p>
                           <div className="detail-options" onClick={feedPop}>...</div>
                        </div> 
                    </div>
                    <div className="content-image"></div>
                  </div>
                  <div className='feed'>
                    <div className="feed-content">
                      <div className="content-id">
                        <figure></figure>
                          <p className='content-author'> {"CATEGORY PIRATES"} </p>
                        </div>
                        <div className='content-title'>The Value Of Your Value.</div>
                        <div className="details">
                           <p>6 mins read</p>
                           <div className="detail-options" onClick={feedPop}>...</div>
                        </div> 
                    </div>
                    <div className="content-image"></div>
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


const MenuBar = () => {
  const [toggleMenu,setToggleMenu]=useState(false)
  const [activeIndex, setActiveIndex] = useState(0)
  function resetActiveIndex(){
    if (activeIndex !== 0){
      setActiveIndex(0)
    }
  }
  useEffect(()=>{
    if (activeIndex !==0 && activeIndex !== null){
      document.getElementById("blurscreen").style.position="absolute"
    } else {
      document.getElementById("blurscreen").style.position="static"
    }  
  })
  return (
    <popCheck.Provider value={activeIndex}>
      <div className={'menu-bar'}>
        <div className={'blunt-fixed'}>
          <div className="menu-wrap">
              <Menus isToggled={activeIndex===1} togglepop={(e)=>{if (e.target.matches(".menu-pop")) {return} else activeIndex!==1?setActiveIndex(1):setActiveIndex(0)}} togglemenu={toggleMenu} index={1} activeIndex={()=>setActiveIndex(1)} content={<Options/>} icon={<Plus/>}/>
              <Menus isToggled={activeIndex===2} togglepop={null} togglemenu={toggleMenu} index={2} activeIndex={()=>setActiveIndex(2)} content={<Bookmarks/>} icon={<Bookmark2/>}/>
              <Menus isToggled={activeIndex===3} togglepop={(e)=>{if (e.target.closest(".menu-pop")) {return} else activeIndex!==3?setActiveIndex(3):setActiveIndex(0)}} togglemenu={toggleMenu} index={3} activeIndex={()=>setActiveIndex(3)} content={<Create/>} icon={<Plus/>}/>
              <div className={toggleMenu?'menus-icon-active':'menus-icon'} onClick={()=>{setToggleMenu(!toggleMenu);resetActiveIndex()}}>{toggleMenu?<Arrow_B/>:<RoundMenu/>}</div>          
          </div>
        </div>
      </div>
    </popCheck.Provider>
  )
}
const Menus = ({togglemenu,content, index, icon,togglepop, isToggled}) => {
  return (
    <div onClick={togglepop} className={togglemenu?'open-menu':'menu'} style={togglemenu?{position:"static",transition:"all 100ms ease-out"}:{position:"absolute", transition:"transition: all 250ms ease-out"}}>{icon}
      <div className={!isToggled?`menu-pop pop${index}`:`menu-pop menu-pop-open${index}`}>{content}</div>
    </div>
  )
}
const Create = () => {
  return (
    <div className='create-content'>
      <h1>Add new content</h1>
      <div className='create-buttons'>
        <Link  to={'new'}><button id='add-content' >New post</button></Link>
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