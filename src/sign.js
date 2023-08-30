import React from 'react'
import {Link} from 'react-router-dom'
import { useState,useEffect } from 'react'
import './sign.css';

export const Sign = () => {
    const [status, setStatus] = useState('Login')
    useEffect(()=>{
      document.body.style.position = 'static'
    })
  return (
    <div className='sign'>
        <div className='sign-header'>
            <h1>Skript_<span>n</span></h1>
            <p>Welcome <br/> back</p>
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

export const Signup = () => {
  return (
    <div>Signup</div>
  )
}
export const Signin = () => {
  return (
    <div>
      <div className="form">
        <input type="email" />
        <span id='form-span'>First Name:</span>
      </div>
</div>
  )
}
