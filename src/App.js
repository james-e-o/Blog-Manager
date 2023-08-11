import './App.css';
import React, { useState, useEffect, useRef } from 'react';
import Svg from './Components/icon';
import cms from './contents/cms-img.png'

function App() {
  const [isActive, setIsactive]=useState(false)
  const refHeader =useRef('')
  useEffect(()=>{
    const ScrollYvalue = 448
    window.addEventListener('scroll',(e)=>{
      if (window.scrollY>ScrollYvalue){
        // console.log('happy')
        setIsactive(!isActive)
        // refHeader.current.classlist.toggle('header-scroll')
      } 
    })
  })


  return (
    
    <div className="App">

      <header ref={refHeader} className={isActive ? "App-header active" : "App-header"}>
       <h1>Skript_<span>n</span></h1>
       <nav>
       <button>&#9998; Write</button>
       <svg data-name="Layer 1" id="Layer_1" viewBox="0 0 64 64" width="30px" height="30px" xmlns="http://www.w3.org/2000/svg"><path d="M21.86,18.73H9.18a2,2,0,0,1,0-4H21.86a2,2,0,0,1,0,4Z"/><path d="M54.82,18.73H34.88a2,2,0,0,1,0-4H54.82a2,2,0,0,1,0,4Z"/><path d="M54.82,34H9.18a2,2,0,0,1,0-4H54.82a2,2,0,0,1,0,4Z"/><path d="M54.82,49.27H30.07a2,2,0,0,1,0-4H54.82a2,2,0,0,1,0,4Z"/></svg>
       <ul>
          <li>Sign up</li>
          <li>Login</li>
       </ul>
       </nav>
      </header>
      <main>
        <div className='main'>
          <div className='h1-tag'>
            <h1>Share <span>your</span> Ideas & build <span>your</span> audience here.</h1>
            <p id='cta'>
            Veniam pariatur cillum ullamco proident et id Lorem excepteur ad. Commodo qui excepteur tempor veniam deserunt eu dolore eu.<br />
            <button>Get started</button>
            </p>
          </div>
          <div className='img-content'>
            <p id='img'>
              <img src={cms} alt="cms-img" />
            </p>
          </div>
          <div className='features'>
            <div id='feature1'>
              <h4>Feature 1</h4>
              <article>
              Veniam pariatur cillum ullamco proident et id Lorem excepteur ad. Commodo qui excepteur tempor veniam deserunt eu dolore eu.
              </article>
            </div>
          </div>
          <div className='reviews'>
            <div className='rev'>
              <figure></figure>
              <div><h4>Name</h4>Veniam pariatur cillum ullamco proident et id Lorem excepteur ad.</div> 
            </div>
            <div className='rev'>
              <figure></figure>
              <div><h4>Name</h4>Veniam pariatur cillum ullamco proident et id Lorem excepteur ad.</div>
            </div>
            <div className='rev'>
              <figure></figure>
              <div><h4>Name</h4>Veniam pariatur cillum ullamco proident et id Lorem excepteur ad.</div>
            </div>
          </div>
        </div>
      </main>
      <footer>
        <h3>Skript_n</h3><br /> 
        {/* <hr/> */}
        <div className='footdiv'>
          <div> Veniam pariatur cillum ullamco proident et id Lorem excepteur ad. </div>
          <div className='footer-link'>
            <svg id="linkedin" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 30 30" width="24px" height="24px">    <path d="M15,3C8.373,3,3,8.373,3,15c0,6.627,5.373,12,12,12s12-5.373,12-12C27,8.373,21.627,3,15,3z M10.496,8.403 c0.842,0,1.403,0.561,1.403,1.309c0,0.748-0.561,1.309-1.496,1.309C9.561,11.022,9,10.46,9,9.712C9,8.964,9.561,8.403,10.496,8.403z M12,20H9v-8h3V20z M22,20h-2.824v-4.372c0-1.209-0.753-1.488-1.035-1.488s-1.224,0.186-1.224,1.488c0,0.186,0,4.372,0,4.372H14v-8 h2.918v1.116C17.294,12.465,18.047,12,19.459,12C20.871,12,22,13.116,22,15.628V20z"/></svg>
            <svg id="youtube" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 24" width="24px" height="24px">    <path d="M21.582,6.186c-0.23-0.86-0.908-1.538-1.768-1.768C18.254,4,12,4,12,4S5.746,4,4.186,4.418 c-0.86,0.23-1.538,0.908-1.768,1.768C2,7.746,2,12,2,12s0,4.254,0.418,5.814c0.23,0.86,0.908,1.538,1.768,1.768 C5.746,20,12,20,12,20s6.254,0,7.814-0.418c0.861-0.23,1.538-0.908,1.768-1.768C22,16.254,22,12,22,12S22,7.746,21.582,6.186z M10,14.598V9.402c0-0.385,0.417-0.625,0.75-0.433l4.5,2.598c0.333,0.192,0.333,0.674,0,0.866l-4.5,2.598 C10.417,15.224,10,14.983,10,14.598z"/></svg>
            <svg id="linkedin" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 30 30" width="24px" height="24px">    <path d="M15,3C8.373,3,3,8.373,3,15c0,6.627,5.373,12,12,12s12-5.373,12-12C27,8.373,21.627,3,15,3z M10.496,8.403 c0.842,0,1.403,0.561,1.403,1.309c0,0.748-0.561,1.309-1.496,1.309C9.561,11.022,9,10.46,9,9.712C9,8.964,9.561,8.403,10.496,8.403z M12,20H9v-8h3V20z M22,20h-2.824v-4.372c0-1.209-0.753-1.488-1.035-1.488s-1.224,0.186-1.224,1.488c0,0.186,0,4.372,0,4.372H14v-8 h2.918v1.116C17.294,12.465,18.047,12,19.459,12C20.871,12,22,13.116,22,15.628V20z"/></svg>
            <svg id="youtube" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 24" width="24px" height="24px">    <path d="M21.582,6.186c-0.23-0.86-0.908-1.538-1.768-1.768C18.254,4,12,4,12,4S5.746,4,4.186,4.418 c-0.86,0.23-1.538,0.908-1.768,1.768C2,7.746,2,12,2,12s0,4.254,0.418,5.814c0.23,0.86,0.908,1.538,1.768,1.768 C5.746,20,12,20,12,20s6.254,0,7.814-0.418c0.861-0.23,1.538-0.908,1.768-1.768C22,16.254,22,12,22,12S22,7.746,21.582,6.186z M10,14.598V9.402c0-0.385,0.417-0.625,0.75-0.433l4.5,2.598c0.333,0.192,0.333,0.674,0,0.866l-4.5,2.598 C10.417,15.224,10,14.983,10,14.598z"/></svg>
          </div>
        </div>
        <hr />
        <p id='copyright'>Copyright &#169;2023, JAMES.E.O | All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
