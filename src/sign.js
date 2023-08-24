import React from 'react'
import {Link} from 'react-router-dom'
import { useState } from 'react'

const Sign = () => {
    const [status, setStatus] = useState('Login')
  return (
    <div className='sign'>
        <header className='sign-header'>
            <h1>Skript_<span>n</span></h1>
        </header>
        <main className='sign-main'>
            <div className='sign-wrap'>
            {status=='Login'?(
                <Signin/>
            ):(<Signup/>)}
            </div>
        </main>
    </div>
  )
}
export default Sign

const Signup = () => {
  return (
    <div>Signup</div>
  )
}
const Signin = () => {
  return (
    <div>Signin</div>
  )
}
