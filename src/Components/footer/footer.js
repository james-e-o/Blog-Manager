import React from 'react'
import { Link } from 'react-router-dom'
import './footer.css'
import { Facebook, Linkedin, Threads, X } from '../svg'

const Footer = () => {
  return (
    <footer>
    <h4>Skript_n</h4>
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
        <Link><Linkedin/></Link>
        <Link><X/></Link>
        <Link><Facebook/></Link>
        <Link><Threads/></Link>
      </div>
    </div>
    <hr />
    <p id='copyright'>Copyright &#169;2023, JAMES.E.O | All rights reserved.</p>
    </footer>
  )
}

export default Footer