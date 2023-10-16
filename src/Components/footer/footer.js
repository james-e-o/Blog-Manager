import React from 'react'
import { Link } from 'react-router-dom'
import './footer.css'
import { Facebook, Threads, X } from '../svg'

const Footer = () => {
  return (
    <footer>
    <h3>Skript_n</h3>
    {/* <hr/> */}
    <div className='footdiv'>
      <div className='foot-brief'> 
        <Link to="/about"><p>About</p></Link>
        <Link to="/about"><p>Blogs</p></Link>
        <Link to="/about"><p>Podcasts</p></Link>
        <Link to="/about"><p>Privacy policy</p></Link>
        <Link to="/about"><p>Terms</p></Link>
      </div>
      <div className='foot-icons'>
        <svg id="linkedin" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 30 30" width="24px" height="24px">    <path d="M15,3C8.373,3,3,8.373,3,15c0,6.627,5.373,12,12,12s12-5.373,12-12C27,8.373,21.627,3,15,3z M10.496,8.403 c0.842,0,1.403,0.561,1.403,1.309c0,0.748-0.561,1.309-1.496,1.309C9.561,11.022,9,10.46,9,9.712C9,8.964,9.561,8.403,10.496,8.403z M12,20H9v-8h3V20z M22,20h-2.824v-4.372c0-1.209-0.753-1.488-1.035-1.488s-1.224,0.186-1.224,1.488c0,0.186,0,4.372,0,4.372H14v-8 h2.918v1.116C17.294,12.465,18.047,12,19.459,12C20.871,12,22,13.116,22,15.628V20z"/></svg>
        <X/>
        <Facebook/>
        {/* <Threads/> */}
      </div>
    </div>
    <hr />
    <p id='copyright'>Copyright &#169;2023, JAMES.E.O | All rights reserved.</p>
    </footer>
  )
}

export default Footer