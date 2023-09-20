import React, { useEffect } from 'react'
import {Form, Link, redirect, useActionData} from 'react-router-dom'
import { useState} from 'react'
import { Google, Views } from './Components/svg';



export const Sign = () => {
  return (
     <div className='menu-main' style={{marginTop:'20px',gap:'8px'}}>
        <Link to='signup' style={{width:'70%'}}> <p style={{display:'flex', fontSize:'14px',fontWeight:'light',justifyContent:'center', gap:'8px',marginTop:'15px',border:'1px solid grey',borderRadius:'30px', padding:'7px'}}>Sign up</p></Link>
        <Link to='login' style={{width:'70%'}}> <p style={{display:'flex', fontSize:'14px',fontWeight:'light',justifyContent:'center', gap:'8px',marginTop:'15px',border:'1px solid grey',borderRadius:'30px',padding:'7px'}}>Login</p></Link>
        <div style={{display:'flex',justifyContent:'space-between', marginTop:'15px', fontSize:'14px',color:'slategray'}}><hr style={{width:'38%',  color:'#d1cfe2',position:'relative',top:'9px'}}/> or <hr style={{width:'38%', color:'#d1cfe2', position:'relative',top:'9px'}}/></div>
       <Link to='/google.com' style={{width:'70%'}}><div style={{display:'flex', fontSize:'14px',fontWeight:'light',  justifyContent:'center', gap:'8px',marginTop:'15px',border:'1px solid grey',borderRadius:'30px',padding:'7px'}}><Google idth='48' eight='48'/>Sign  with Google</div></Link>
      </div>
  )
}

//SIGN - UP
export const Signup = () => {
  const data = useActionData()
  
  
  return (
    <div className='signup'>
      <h5 style={{padding:'7px 15px'}}>Sign up</h5>
      <Form method='post' action='/sign/signup'>
        <Indiv error ={data && data.usernameError} type={'text'} name={"username"}placehold={"Username"}/>
        <Indiv error ={data && data.emailError} type={'text'} name={"email"}placehold={"Email"}/>
        <Indiv icon={true} error ={data && (data.passwordError || data.passwordError2)}type={'password'} altType={'text'} name={"password"}placehold={"Password"}/>  
        <button >Sign up</button>  
      </Form>
      <div id='sign-in-option'>
        <p style={{color:'black',padding:'8px',fontSize:'13px'}}>or</p>

        <div id='google'><Google /> Sign up with Google</div>
        <p style={{width:'63%',marginTop:'3px'}}><Link style={{color:'slategray',fontSize:'10px'}} to='/sign/login'>have an account?  <span style={{fontSize:'11px', color:'slateblue'}}>Login</span></Link></p>  
      </div>

    </div>
  )
}

//SIGN- IN
export const Signin = () => {
  const loginResponse = useActionData()
  
  return (
    <div className='signin'>
      <h5 style={{padding:'8px 15px'}}>Login</h5>
      <Form method='post' action='/sign/signup'>
        <Indiv type={'text'} name={"email"} placehold={"Email"} />
        <Indiv icon={true} type={'password'} name={"password"} placehold={"Password"}/>
        <p id='forgot'> <Link style={{color:'orange'}} to='/makeup'>forgot details?</Link></p>    
        <button type='submit' >Slide in</button>  
      </Form>
      <div id='sign-in-option'>
        <p style={{color:'black',padding:'8px',fontSize:'13px'}}>or</p>

        <div id='google'><Google /> Continue with Google</div>
        <p style={{width:'63%',marginTop:'3px'}}><Link style={{color:'slategray',fontSize:'10px'}} to='/sign/signup'>not signed?  <span style={{fontSize:'11px', color:'slateblue'}}>  Create account</span></Link></p>  
      </div>   
  </div>
  )
}

const Indiv = ({name, value, placehold, type, error, icon, altType}) => {
  const [inputFocus, setInputFocus] = useState(false)
  const [hide, setHide] =useState(true)
  useEffect(()=>{
      
  })
  return (
    <div id='inputdiv' className={inputFocus?"inputdiv":"inputdivfocus"}>
      <span className={inputFocus?"inputspan":"inputspanfocus"}>{placehold}</span>
      {icon && inputFocus?<Views run={console.log(hide)}/>:""}
      <input name={name} onInput={value} onFocus={(e)=>{e.preventDefault(); setInputFocus(true)}} onBlur={(e)=>{e.target.value.length===0? setInputFocus(false):setInputFocus(true)}} type={!hide?altType:type}/>
      <p id='error'>{error}</p>
    </div>
  )
}


export const  signupValidate = async ({request}) => {
  //VALIDATE
  const formdata = await request.formData()
  const validEmail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
  const validPassword = /^[A-Za-z0-9]*$/
  const data = {
    username: formdata.get("username"),
    email: formdata.get("email"),
    password: formdata.get("password")
  }
  console.log(data)

  if (data.username.length < 5){
    return {usernameError : "username should be above 5 characters"}
  }
  if (!data.email.match(validEmail)){
    return {emailError : "enter a valid email address"}
  }
  if (data.password.length < 6 ){
    return {passwordError : "password must be above 6 characters"}
  } else if (!data.password.match(validPassword))
    return {passwordError2 : "password must conatain numbers & letters"}

  return redirect('/')
}      

export const  loginValidation = async ({params,request }) => {
  //VALIDATE
  const formdata = await request.formData()
  const data = {
    email: formdata.get("email"),
    password: formdata.get("password")
  }
  console.log(data)
}