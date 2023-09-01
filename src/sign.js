import React from 'react'
import {Link, Outlet, useLocation} from 'react-router-dom'
import { useState,useEffect } from 'react'
import { Google } from './Components/svg';


export const Sign = () => {
  return (
     <div className='menu-main' style={{marginTop:'20px',gap:'8px'}}>
        <Link to='signup' state={{signValue:'signup'}} style={{width:'70%'}}> <p style={{display:'flex', fontSize:'14px',fontWeight:'light',justifyContent:'center', gap:'8px',marginTop:'15px',border:'1px solid grey',borderRadius:'30px', padding:'7px'}}>Sign up</p></Link>
        <Link to='login' state={{signValue:'login'}} style={{width:'70%'}}> <p style={{display:'flex', fontSize:'14px',fontWeight:'light',justifyContent:'center', gap:'8px',marginTop:'15px',border:'1px solid grey',borderRadius:'30px',padding:'7px'}}>Login</p></Link>
        <div style={{display:'flex',justifyContent:'space-between', marginTop:'15px', fontSize:'14px',color:'slategray'}}><hr style={{width:'38%',  color:'#d1cfe2',position:'relative',top:'9px'}}/> or <hr style={{width:'38%', color:'#d1cfe2', position:'relative',top:'9px'}}/></div>
       <Link to='/google.com' state={{signValue:'login'}} style={{width:'70%'}}><p style={{display:'flex', fontSize:'14px',fontWeight:'light',  justifyContent:'center', gap:'8px',marginTop:'15px',border:'1px solid grey',borderRadius:'30px',padding:'7px'}}><Google idth='48' eight='48'/>Sign  with Google</p></Link>
      </div>
  )
}

export const Signup = () => {
  return (
    <div className='signup'>
      <h4 style={{padding:'5px 15px'}}>Sign up</h4>
      <div className="form">
       <p>Username:</p>
        <input type="email" />
      </div>
      <div className="form">
       <p>Email:</p>
        <input type="email" />
      </div>
      <div className="form">
       <p>Password:</p>
        <input type="email" />
      </div>
      <div className="form">
       <p>Re-enter Password:</p>
        <input type="email" />
      </div>
      <div style={{display:'flex', alignItems:'center', justifyContent:'space-around',gap:'8px'}}>
          <button style={{padding: '8px 50px',fontSize:'15px',color:'white', background:'slateblue', border:'none', borderRadius:'4px',marginTop:'15px'}}>Sign up</button><span style={{lineHeight:'10px', fontSize:'14px'}}>or</span>
            <p style={{padding:'5px 7px 3px',marginTop:"15px",border:"1px solid gray", borderRadius:'7px'}}><Google idth='48' eight='48'/></p>
      </div>
      <Link to='/sign/login' state={{signValue:'signup'}} style={{width:'70%'}}> <div style={{fontSize:'14px',fontWeight:'light', marginTop:'5px',padding:'5px', color:'#6559ac'}}> <span style={{fontSize:"11px",color:"black"}}>have an account?</span>  <span style={{fontSize:"12px"}}>Login</span></div></Link>
    </div>
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
          <p style={{display:'flex', fontSize:'14px',fontWeight:'light',justifyContent:'center', gap:'8px',marginTop:'15px',border:'1px solid grey',borderRadius:'30px', padding:'5px'}}><Google idth='48' eight='48'/> Continue with Google</p>
          <Link to='/sign/signup' state={{signValue:'signup'}} style={{width:'70%'}}> <div style={{fontSize:'12px',fontWeight:'light', marginTop:'10px',padding:'5px', color:'#6559ac'}}>Create Account</div></Link>

      </div>
</div>
  )
}
