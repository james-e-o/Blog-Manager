import React from 'react'
import {Link} from 'react-router-dom'
import { useState } from 'react'
import { Google } from './Components/svg';



export const Sign = () => {
  return (
     <div className='menu-main' style={{marginTop:'20px',gap:'8px'}}>
        <Link to='signup' state={{signValue:'signup'}} style={{width:'70%'}}> <p style={{display:'flex', fontSize:'14px',fontWeight:'light',justifyContent:'center', gap:'8px',marginTop:'15px',border:'1px solid grey',borderRadius:'30px', padding:'7px'}}>Sign up</p></Link>
        <Link to='login' state={{signValue:'login'}} style={{width:'70%'}}> <p style={{display:'flex', fontSize:'14px',fontWeight:'light',justifyContent:'center', gap:'8px',marginTop:'15px',border:'1px solid grey',borderRadius:'30px',padding:'7px'}}>Login</p></Link>
        <div style={{display:'flex',justifyContent:'space-between', marginTop:'15px', fontSize:'14px',color:'slategray'}}><hr style={{width:'38%',  color:'#d1cfe2',position:'relative',top:'9px'}}/> or <hr style={{width:'38%', color:'#d1cfe2', position:'relative',top:'9px'}}/></div>
       <Link to='/google.com' state={{signValue:'login'}} style={{width:'70%'}}><div style={{display:'flex', fontSize:'14px',fontWeight:'light',  justifyContent:'center', gap:'8px',marginTop:'15px',border:'1px solid grey',borderRadius:'30px',padding:'7px'}}><Google idth='48' eight='48'/>Sign  with Google</div></Link>
      </div>
  )
}

export const Signup = () => {
  return (
    <div className='signup'>
      <h5 style={{padding:'5px 15px'}}>Sign up</h5>
      <InputDiv value={'Username: '} />
      <InputDiv value={'Email: '} />
      <InputDiv value={'Password: '} />
      {/* <InputDiv value={'Password: '} /> */}

      <div style={{display:'flex', justifyContent:'space-between'}}>
          <div >
            <button style={{padding: '8px 35px',fontSize:'15px',color:'white', background:'slateblue', border:'none', borderRadius:'4px',marginTop:'20px'}}>Sign up</button>
          </div>
      </div>
          <div style={{display:'flex', fontSize:'12px',fontWeight:'light',justifyContent:'center', gap:'8px',marginTop:'15px',border:'1px solid grey',borderRadius:'30px', padding:'5px'}}><Google /> Sign with Google</div>
      <Link to='/sign/login' state={{signValue:'signup'}} style={{width:'70%'}}> <div style={{fontSize:'14px',fontWeight:'light', marginTop:'5px',padding:'5px', color:'#6559ac'}}> <span style={{fontSize:"11px",color:"black"}}>have an account?</span>  <span style={{fontSize:"12px"}}>Login</span></div></Link>
    </div>
  )
}
export const Signin = () => {
  return (
    <div className='signin'>
      <h5 style={{padding:'5px 15px'}}>Login</h5>

      <InputDiv value={'Username: '} />
      <InputDiv value={'Password: '} />

      <div className='login-options'>
          <div id='slide' style={{display:'flex', justifyContent:'space-around',alignItems:'center', width:'99%'}}>
            <Link to='/makeup' state={{signValue:'signup'}}>
                <p style={{color:'slateblue', fontSize:'11px', padding:'5px'}}>forgot details?</p>
            </Link>
            <Link to={'/loggedin'}>
                <button style={{padding: '8px 38px',fontSize:'15px',color:'white', background:'slateblue', border:'none',   borderRadius:'4px',}}>Slide in</button>
            </Link>
          </div>
          <div style={{display:'flex',justifyContent:'space-around', marginTop:'15px', fontSize:'14px',color:'slategray'}}><p style={{width:'32%',position:'relative',top:'9px',height:'1px',borderBottom:'1px solid grey'}}></p> or <p style={{width:'32%', color:'#d1cfe2', position:'relative',top:'9px',height:'1px',borderBottom:'1px solid grey'}}></p></div>
          <div style={{display:'flex', fontSize:'14px',fontWeight:'light',justifyContent:'center', gap:'8px',marginTop:'15px',border:'1px solid grey',borderRadius:'30px', padding:'5px'}}><Google /> Sign with Google</div>
          <Link to='/sign/signup' state={{signValue:'signup'}} style={{display:'block',padding:'15px 5px 0px',fontSize:'10px'}}>not signed?  <span style={{fontSize:'11px', color:'slateblue'}}>  Create account</span>
          </Link>
      </div>
</div>
  )
}

export const InputDiv = ({value}) => {
  const [inputFocus, setInputFocus] = useState(false)
  return (
    <div style={!inputFocus?{marginTop:'20px',width:'68%',borderBottom:'1px solid grey',height:'30px',position:'relative'}:{marginTop:'20px',width:'68%',borderBottom:'1px solid slateblue',height:'30px',position:'relative'}}>
      <span style={!inputFocus ? {transition:"top 150ms linear",paddingLeft:'2px', position:'absolute',top:'10px',fontSize:'11px'}:{transition:"top 150ms linear",paddingLeft:'2px', position:'absolute',top:'-5px', color:'slategray', fontSize:'10px'} }>{value}</span>
      <input onFocus={(e)=>{ setInputFocus(true)}} onBlur={(e)=>{e.target.value.length===0? setInputFocus(false):setInputFocus(true)}} type="text" style={{border:'none', outline:'none', position:'absolute',backgroundColor:'transparent',height:'100%', width:'96%', padding:'0px 0px 2px 2px'}} />
    </div>
  )
}

