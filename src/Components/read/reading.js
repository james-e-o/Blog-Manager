import React from 'react'
import './reading.css'
import { useState, useContext,useCallback, useEffect } from 'react'
import { screenWidth } from '../app/App'

const Reading = () => { 
  const screen = useContext(screenWidth)
  const [mode, setMode] = useState('red')
  const [modeMenu, setModeMenu] = useState(false)
  useEffect(()=>{
    const menuRoll = document.querySelector("div.menu-roll")
    document.addEventListener('click', (e)=>{  
      if(!e.target.closest("div.mode-wrap") && menuRoll.classList.contains("roll-down")){
        setModeMenu(false)
        menuRoll.classList.replace("roll-down","roll-up")
      }
    })
  },[modeMenu])


  return (
    
    <>
    {
     //  MOBILE
     screen<480?(
       <div className='m-reading-page'>
        <div className='reading-header '>
          <p className="cancel">{cancel}</p>
          <div className='mode-wrap' >
                <button id='mode-button' onClick={()=>setModeMenu(!modeMenu)}>mode</button>
                <div className={!modeMenu?"menu-roll roll-up":"menu-roll roll-down"}>
                  <p onClick={()=>setMode('red')} className="modes">red</p>
                  <p onClick={()=>setMode('blue')} className="modes">blue</p>
                  <p onClick={()=>setMode('green')} className="modes">green</p>
                </div>
          </div>  
        </div>
        {
          mode === 'red'?  <div className="bg red"></div> :
          mode === 'green'?  <div className="bg green"></div> :
          mode === 'blue'?  <div className="bg blue"></div> : ''
        }
       
       </div>
       )
       // TABLET
       :screen<720?(
       <div className='t-reading-page'>
         tablet
      </div>
       ):
       //DESKTOP 
       (
       <div className='d-reading-page'>
        desktop
       </div>
        
       )}
     
    
     </> 

  )
}

export default Reading

const cancel = <svg  xmlns="http://www.w3.org/2000/svg" fill='white' height="33px" viewBox="0 -960 960 960" width="33px"><path d="m249-207-42-42 231-231-231-231 42-42 231 231 231-231 42 42-231 231 231 231-42 42-231-231-231 231Z"/></svg>