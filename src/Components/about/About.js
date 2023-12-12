import React, {useEffect} from 'react'
import { useLocation } from 'react-router-dom'
import "./About.css"


const ScrollTop = () => {
  const {pathname} = useLocation()
  useEffect(() => {
   const target = document.getElementById("about")
   target.scrollTo(0,0)
  },[pathname]) 
  return null
}
const About = () => {
  return (
    <div className='about' id='about'>
      <ScrollTop/>
      <div className='about-header'>
        <h1>Skript_<span>n</span></h1> 
      </div>
      <div className='about-header'></div>
      <div className='about-content'>
        <section>
          <h2>About us</h2>
          <p>Welcome to Skript In, your ultimate solution for blog content management. We understand that creating and managing content for your audience should be a breeze. That's why we've developed Skript In, a user-friendly content management system that empowers you to craft and publish captivating content for your followers to enjoy.</p>
        </section>
        <section>
            <h5>Our Mission</h5>
            <p>At Skript In, our mission is clear: to simplify content creation and sharing for bloggers, writers, and content creators. We believe that everyone has a story to tell, and we're here to make it easier for you to share your voice with the world.</p>
        </section>
        <section>
            <h5>join our team</h5>
            <p>Skript In is not just a platform; it's a community. We encourage you to become a part of our growing community by signing up and starting your content journey with us. Share your stories, build connections, and let your voice be heard.</p>
        </section>   
      </div>
      {/* <div className="about-footer"></div> */}
    </div>
  )
}

export default About
