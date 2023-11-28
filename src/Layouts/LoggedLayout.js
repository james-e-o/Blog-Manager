
import {Outlet } from 'react-router-dom'
import { useContext } from 'react'
import { screenWidth } from '../Components/app/App'

const LoggedIn = () => {
  const part = '/loggedin/route'
  const screen = useContext(screenWidth)
  return (
  <div>
    <Outlet />
  </div>   
  )
}

export default LoggedIn