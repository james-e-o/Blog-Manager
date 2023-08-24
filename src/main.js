import React, { useState } from 'react'
import './main.css'
import { useRef, useEffect, useMemo } from 'react'


const Main = () => {
      const title = 'My Name'
      const content = 'Title of my book is the fairy and the mao'
      const dynamicColor = useRef("")
      const value = useRef("")
      const colors= ['#00f3f7','#61fd88','#ffd167']
      const [colorState, setColorState]= useState(false)
      const memoized = useMemo(()=>{
        return value.current
      },[colorState])
  
      useEffect(()=>{
        
        setColorState(!colorState)
        dynamicColor.current.style.color = `${colors[Number(memoized)]}`
        value.current = colorState
      },[])
  return (
    <main>
        <div className='main'>
          <div className='h1-tag'>
            <h1 ref={dynamicColor} id='main-h1'>Share <span>your</span> Ideas & build <span>your</span> audience here.</h1>
            <p id='cta'>
            With Skriptn, you can create your space, publish and manage engaging contents that will grow your audience. It is your world.<br />
            <button>Get started</button>
            </p>
          </div>
          <div className='featured'>
            <h4 id='reads'>Top reads</h4>
            <div className='reads'>
              <div className='read_id'>
                <figure></figure>
                <h5>{title}</h5>
              </div> 
              <h4 id='read_content'>{content}.</h4> 
            </div>
          </div>
          <hr />
          <div className='niche-content'>
            <p id='niche'>Find your niche</p>
            <div className='category'>
              <button className='categories'>Finance</button>
              <button className='categories'>Business</button>
              <button className='categories'>Culture</button>
              <button className='categories'>Technology</button>
              <button className='categories'>Politics</button>
              <button className='categories'>Sports</button>
              <button className='categories'>Music</button>
              <button className='categories'>Faith</button>
              <button className='categories'>Self Improvement</button>
              <button className='categories'>Art</button>
              <button className='categories'>News</button>
            </div>
            <div className='see'><p id='arrow'> →</p><p id='see'>See more topics </p></div>           
          </div>
          <div id='podcast'>
            <div className='podcast-gradient'></div>
            <div className='podcast-wrapper'>
              <h2>Start your own podcast</h2>
              <article>
              Veniam pariatur cillum ullamco proident et id Lorem excepteur ad. Commodo qui excepteur tempor veniam deserunt eu dolore eu.
              </article>
            </div>
            <button>Get started</button>
          </div>
          <div className='reviews'>
            <div className='rev'>
              <div className='rev_id'>
                <figure></figure>
                <h5>Name</h5>
              </div> 
              <div>Veniam pariatur cillum ullamco proident et id Lorem excepteur ad.</div> 
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
  )
}

export default Main