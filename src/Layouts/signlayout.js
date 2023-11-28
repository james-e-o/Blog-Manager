import React from 'react'
import { Outlet} from 'react-router-dom'
import { useEffect,useContext} from 'react'
import './sign.css'
import { screenWidth } from '../Components/app/App'

const Signlayout = () => {
    const screen = useContext(screenWidth)
    useEffect(()=>{
        document.body.style.position = 'static'
    })
  return (
  <div className='sign' style={{backgroundColor:"white"}}>
        <Outlet/>
  </div>
  )
}

export default Signlayout