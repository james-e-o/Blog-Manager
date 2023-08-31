import React from 'react'
import {Link, Outlet, useLocation} from 'react-router-dom'
import { useState,useEffect } from 'react'
import { Google } from './svg';
import './sign.css';

export const Sign = () => {
    let {state} = useLocation()
    // const [status, setStatus] = useState('')
    useEffect(()=>{
      document.body.style.position = 'static'
      console.log(state.signValue)
    })
  return (
    <div className='sign'>
        <div className='sign-header'>
            <h1>Skript_<span>n</span></h1>
            <p>{state.signValue ==='login'?"Welcome":"Join us"} 
            <br/>{state.signValue ==='login'?"back":"today"}</p>
        </div>
        <main className='sign-main'>
            {state.signValue ==='login'?(
                <Signin/>
            ):(<Signup/>)}
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
    <div className='signin'>
      <h4 style={{padding:'5px 15px'}}>Login</h4>
       <div className="form">
       <p>Email:</p>
        <input type="email" />
      </div>
      
      <div className="form">
      <p>Password:</p>
        <input type="password" />
      </div>
      <div className='login-options'>
          <div id='slide' style={{display:'flex', justifyContent:'space-between',alignItems:'center', width:'99%'}}>
            <p style={{color:'slateblue', fontSize:'13px', padding:'5px'}}>forgot details?</p>
            <button style={{padding: '8px 28px',fontSize:'15px',color:'white', background:'slateblue', border:'none', borderRadius:'4px',}}>Slide in</button>
          </div>
          <div style={{display:'flex',justifyContent:'space-between', marginTop:'15px', fontSize:'14px',color:'slategray'}}><hr style={{width:'38%',  color:'#d1cfe2',position:'relative',top:'9px'}}/> or <hr style={{width:'38%', color:'#d1cfe2', position:'relative',top:'9px'}}/></div>
          <p style={{display:'flex', fontSize:'15px',justifyContent:'center', gap:'8px',marginTop:'15px',border:'1px solid grey',borderRadius:'30px', padding:'5px'}}><Google idth='48' eight='48'/> Continue with Google</p>
          <div style={{fontSize:'15px', marginTop:'10px',padding:'5px', color:'#6559ac'}}>Create Account</div>

      </div>
</div>
  )
}
