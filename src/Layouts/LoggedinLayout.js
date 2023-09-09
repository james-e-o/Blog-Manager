import React from 'react'
import {Link, Outlet } from 'react-router-dom'

const LoggedIn = () => {
  const part = '/loggedin/route'

  return (
    <div>
        <h1>Loggedin</h1>
        <p>{part.split('/').filter(vim => vim !== '').map(vim => {return <Link>{` /${vim}`}</Link>})}</p>
        <Outlet />
    </div>
  )
}

export default LoggedIn