import React from 'react'
import {Link} from 'react-router-dom'
import { useState,useEffect } from 'react'
import './sign.css';

const Sign = () => {
    const [status, setStatus] = useState('Login')
    useEffect(()=>{
      document.body.style.position = 'static'
    })
  return (
    <div className='sign'>
        <div className='sign-header'>
            <h1>Skript_<span>n</span></h1>
        </div>
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
