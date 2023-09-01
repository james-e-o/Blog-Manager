import React from 'react'
import { Outlet,NavLink,Link,useLocation} from 'react-router-dom'
import { useEffect } from 'react'
import './sign.css'


const Signlayout = () => {
    let {state} = useLocation()
    useEffect(()=>{
        document.body.style.position = 'static'
        console.log(state.signValue)
    })
  return (
    <div className='sign'>
    <div className='sign-header'>
        <h1>Skript_<span>n</span></h1>
        <p>{state.signValue==='start'? "Get":state.signValue ==='login'?"Welcome":"Join us"} 
        <br/>{state.signValue==='start'?"Started":state.signValue ==='login'?"back":"today"}</p>
    </div>
    <main className='sign-main'>
        <Outlet/>
    </main>
</div>
  )
}

export default Signlayout