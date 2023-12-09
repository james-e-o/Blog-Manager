
import {Outlet } from 'react-router-dom'
import { useContext, useEffect } from 'react'
import { screenWidth } from '../Components/app/App'

const LoggedIn = () => {
  const part = '/loggedin/route'
  const screen = useContext(screenWidth)
 
  return (
  <div className='logged' style={{height:"fit-content"}}>
    <Outlet />
  </div>   
  )
}

export default LoggedIn