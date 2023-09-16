import React from 'react'
import {Form, Link, useActionData} from 'react-router-dom'
import { useState} from 'react'
import { Google } from './Components/svg';



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
  const signUpResponse = useActionData()
  const [userName, setUserName]=useState('')
  const [email, setEmail]=useState('')
  const [password, setPassword]=useState('')

  function validateForm(){
   
      console.log('cool')
    
  }
  
  return (
    <div className='signup'>
      <h5 style={{padding:'5px 15px'}}>Sign up</h5>
      <Form method='post' action='/sign/signup'>
        <Indiv type={'text'} name={"username"}placehold={"Username"} value={(e)=>{setUserName(e.target.value)}}/>
        <Indiv type={'text'} name={"email"}placehold={"Email"} value={(e)=>{setEmail(e.target.value)}}/>
        <Indiv type={'password'} name={"password"}placehold={"Password"} value={(e)=>{setPassword(e.target.value)}}/>  
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
  const [email, setEmail]=useState('')
  const [password, setPassword]=useState('')
  
  return (
    <div className='signin'>
      <h5 style={{padding:'5px 15px'}}>Login</h5>
      <Form method='post' action='/sign/signup'>
        <Indiv type={'text'} name={"email"} placehold={"Email"} value={(e)=>{setEmail(e.target.value)}}/>
        <Indiv type={'password'} name={"password"} placehold={"Password"} value={(e)=>{setPassword(e.target.value)}}/>
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

const Indiv = ({name, value, placehold,type}) => {
  const [inputFocus, setInputFocus] = useState(false)
  // let value
  return (
    <div id='inputdiv' className={inputFocus?"inputdiv":"inputdivfocus"}>
      <span className={inputFocus?"inputspan":"inputspanfocus"}>{placehold}</span>
      <input name={name} onInput={value} onFocus={(e)=>{e.preventDefault(); setInputFocus(true)}} onBlur={(e)=>{e.target.value.length===0? setInputFocus(false):setInputFocus(true)}} type={type}/>
    </div>
  )
}


export const  signupValidate = async ({request}) => {
  //VALIDATE
  const formdata = await request.formData()
  const data = {
    username: formdata.get("username"),
    email: formdata.get("email"),
    password: formdata.get("password")
  }
  console.log(data)
}      

export const  loginValidation = async ({params,request }) => {
  const formdata = await request.formData()
  const data = {
    email: formdata.get("email"),
    password: formdata.get("password")
  }
  console.log(data)
}