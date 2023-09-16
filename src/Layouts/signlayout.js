import React from 'react'
import { Outlet,useLocation} from 'react-router-dom'
import { useEffect,useContext} from 'react'
import './sign.css'
import { screenWidth } from '../Components/app/App'


const Signlayout = () => {
    const screen = useContext(screenWidth)
    useEffect(()=>{
        document.body.style.position = 'static'
    })
  return (
    <div className='sign'>
    <div className='sign-header'>
        <h1>Skript_<span>n</span></h1>
        <p>Hello
        <br/>World</p>
    </div>
    <main className='sign-main'>
        <Outlet/>
    </main>
</div>
  )
}

export default Signlayout