import React, { useState } from 'react'
import './main.css'
import { useRef, useEffect, useMemo } from 'react'
import { Like, Share, Comment, Views, Subscribe } from './svg'


const Main = () => {
      const title = 'My Name'
      const content = 'Title of my book is the fairy and the mao'
      const dynamicColor = useRef("")
      const colors= ['#00f3f7','#61fd88','#ffd167']
      const [colorState, setColorState]= useState(false)
     
      function getRandomIntInclusive(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1) + min);
      } 
      useEffect(()=>{
        const randomColor = getRandomIntInclusive(0,2)
        dynamicColor.current.style.color = `${colors[randomColor]}`
        setColorState(randomColor)
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
            <p id='reads'>Top reads</p>
                      <div className='reads'>
                        <div className='read_id'>
                          <figure></figure>
                          <h5>{title}</h5>
                        </div> 
                        <h4 id='read_content'>{content}.</h4>
                        <div id='engagement'>
                          <div><Views/> {'9k'}</div>
                          <div><Like/> {'16k'}</div>
                          <div><Comment/> {'10k'}</div>
                        </div>
                      </div>
                      <div className='reads'>
                        <div className='read_id'>
                          <figure></figure>
                          <h5>{title}</h5>
                        </div> 
                        <h4 id='read_content'>{content}.</h4>
                        <div id='engagement'>
                          <div><Views/> {'9k'}</div>
                          <div><Like/> {'16k'}</div>
                          <div><Comment/> {'10k'}</div>
                        </div>
                      </div>
                      <div className='reads'>
                        <div className='read_id'>
                          <figure></figure>
                          <h5>{title}</h5>
                        </div> 
                        <h4 id='read_content'>{content}.</h4>
                        <div id='engagement'>
                          <div><Views/><span>{'9k'}</span></div>
                          <div><Like/><span>{'16k'}</span></div>
                          <div><Comment/><span>{'10k'}</span></div>
                        </div>
                      </div>
                      <div className='reads'>
                        <div className='read_id'>
                          <figure></figure>
                          <h5>{title}</h5>
                        </div> 
                        <h4 id='read_content'>{content}.</h4>
                        <div id='engagement'>
                          <div><Views/> {'9k'}</div>
                          <div><Like/> {'16k'}</div>
                          <div><Comment/> {'10k'}</div>
                        </div>
                      </div>
          </div>
          
          <div className='niche-content'>
            <p id='niche'>Find your niche</p>
            {/* <hr className='inner'/> */}
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