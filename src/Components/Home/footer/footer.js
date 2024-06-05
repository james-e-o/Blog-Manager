import React, { useState, useEffect, useRef, useContext} from 'react';
import{Link} from 'react-router-dom'
import { screenWidth } from '../../app/App';
import './footer.css'

 
const Footer = () => {
  
  const screen = useContext(screenWidth)

  return (
    <>
    {
     //  MOBILE
     screen<480?(
       <footer className='m-footer'>
           <h4>Skriptn</h4> 
           <div className='footdiv'>
             <div className='foot-brief'> 
               <Link to="/about"><p>About</p></Link>
               <Link to="/about"><p>Blogs</p></Link>
               <Link to="/about"><p>Podcasts</p></Link>
               <Link to="/about"><p>Privacy policy</p></Link>
               <Link to="/about"><p>Terms</p></Link>
             </div>
             <div className='foot-icons'>
                <Link>{linkedin}</Link>
                <Link>{x}</Link>
                <Link>{facebook}</Link>
                <Link>{threads}</Link>
             </div>
           </div>
           <hr />
           <p id='copyright'>Copyright &#169;2023, JAMES.E.O | All rights reserved.</p>
       </footer>
       )
       // TABLET
       :screen<720?(
       <footer className='t-footer'>
           <h4>Skriptn</h4> 
           <div className='footdiv'>
             <div className='foot-brief'> 
               <Link to="/about"><p>About</p></Link>
               <Link to="/about"><p>Blogs</p></Link>
               <Link to="/about"><p>Podcasts</p></Link>
               <Link to="/about"><p>Privacy policy</p></Link>
               <Link to="/about"><p>Terms</p></Link>
             </div>
             <div className='foot-icons'>
               <Link>{linkedin}</Link>
               <Link>{x}</Link>
               <Link>{facebook}</Link>
               <Link>{threads}</Link>
             </div>
           </div>
           <hr />
           <p id='copyright'>Copyright &#169;2023, JAMES.E.O</p>
      </footer>
       ):
       //DESKTOP 
       (
         <nav className='desktop'>
       {/* partner with us */}
         <ul>
           <li>About us</li>
           <li>Services</li>
           <li>Sign in</li>
         </ul>
         <button className='started'>Get started</button>
     </nav>  
       )}
     
    
     </> 
  )
}

export default Footer

const threads =  <svg viewBox="0 0 192 192" xmlns="http://www.w3.org/2000/svg"><path class="x19hqcy" d="M141.537 88.9883C140.71 88.5919 139.87 88.2104 139.019 87.8451C137.537 60.5382 122.616 44.905 97.5619 44.745C97.4484 44.7443 97.3355 44.7443 97.222 44.7443C82.2364 44.7443 69.7731 51.1409 62.102 62.7807L75.881 72.2328C81.6116 63.5383 90.6052 61.6848 97.2286 61.6848C97.3051 61.6848 97.3819 61.6848 97.4576 61.6855C105.707 61.7381 111.932 64.1366 115.961 68.814C118.893 72.2193 120.854 76.925 121.825 82.8638C114.511 81.6207 106.601 81.2385 98.145 81.7233C74.3247 83.0954 59.0111 96.9879 60.0396 116.292C60.5615 126.084 65.4397 134.508 73.775 140.011C80.8224 144.663 89.899 146.938 99.3323 146.423C111.79 145.74 121.563 140.987 128.381 132.296C133.559 125.696 136.834 117.143 138.28 106.366C144.217 109.949 148.617 114.664 151.047 120.332C155.179 129.967 155.42 145.8 142.501 158.708C131.182 170.016 117.576 174.908 97.0135 175.059C74.2042 174.89 56.9538 167.575 45.7381 153.317C35.2355 139.966 29.8077 120.682 29.6052 96C29.8077 71.3178 35.2355 52.0336 45.7381 38.6827C56.9538 24.4249 74.2039 17.11 97.0132 16.9405C119.988 17.1113 137.539 24.4614 149.184 38.788C154.894 45.8136 159.199 54.6488 162.037 64.9503L178.184 60.6422C174.744 47.9622 169.331 37.0357 161.965 27.974C147.036 9.60668 125.202 0.195148 97.0695 0H96.9569C68.8816 0.19447 47.2921 9.6418 32.7883 28.0793C19.8819 44.4864 13.2244 67.3157 13.0007 95.9325L13 96L13.0007 96.0675C13.2244 124.684 19.8819 147.514 32.7883 163.921C47.2921 182.358 68.8816 191.806 96.9569 192H97.0695C122.03 191.827 139.624 185.292 154.118 170.811C173.081 151.866 172.51 128.119 166.26 113.541C161.776 103.087 153.227 94.5962 141.537 88.9883ZM98.4405 129.507C88.0005 130.095 77.1544 125.409 76.6196 115.372C76.2232 107.93 81.9158 99.626 99.0812 98.6368C101.047 98.5234 102.976 98.468 104.871 98.468C111.106 98.468 116.939 99.0737 122.242 100.233C120.264 124.935 108.662 128.946 98.4405 129.507Z"></path></svg>
const linkedin =   <svg id="linkedin" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 30 30"><path d="M15,3C8.373,3,3,8.373,3,15c0,6.627,5.373,12,12,12s12-5.373,12-12C27,8.373,21.627,3,15,3z M10.496,8.403 c0.842,0,1.403,0.561,1.403,1.309c0,0.748-0.561,1.309-1.496,1.309C9.561,11.022,9,10.46,9,9.712C9,8.964,9.561,8.403,10.496,8.403z M12,20H9v-8h3V20z M22,20h-2.824v-4.372c0-1.209-0.753-1.488-1.035-1.488s-1.224,0.186-1.224,1.488c0,0.186,0,4.372,0,4.372H14v-8 h2.918v1.116C17.294,12.465,18.047,12,19.459,12C20.871,12,22,13.116,22,15.628V20z"/></svg>
const x =  <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 30 30"><path d="M26.37,26l-8.795-12.822l0.015,0.012L25.52,4h-2.65l-6.46,7.48L11.28,4H4.33l8.211,11.971L12.54,15.97L3.88,26h2.65 l7.182-8.322L19.42,26H26.37z M10.23,6l12.34,18h-2.1L8.12,6H10.23z"/></svg>
const facebook =   <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 50 50" width="22px" height="22px">    <path d="M25,3C12.85,3,3,12.85,3,25c0,11.03,8.125,20.137,18.712,21.728V30.831h-5.443v-5.783h5.443v-3.848 c0-6.371,3.104-9.168,8.399-9.168c2.536,0,3.877,0.188,4.512,0.274v5.048h-3.612c-2.248,0-3.033,2.131-3.033,4.533v3.161h6.588 l-0.894,5.783h-5.694v15.944C38.716,45.318,47,36.137,47,25C47,12.85,37.15,3,25,3z"/></svg>