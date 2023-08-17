import React from 'react'
import './main.css'

const Main = () => {
  return (
    <main>
        <div className='main'>
          <div className='h1-tag'>
            <h1>Share <span>your</span> Ideas & build <span>your</span> audience here.</h1>
            <p id='cta'>
            With Skriptn, you can create your space, publish and manage engaging contents that will grow your audience. It is your world.<br />
            <button>Get started</button>
            </p>
          </div>
          <div className='featured-content'>
          <p id='niche'>Find your niche</p>
          <div className='category'>
            <p className='categories'>Finance</p>
            <p className='categories'>Business</p>
            <p className='categories'>Culture</p>
            <p className='categories'>Technology</p>
            <p className='categories'>Politics</p>
            <p className='categories'>Sports</p>
            <p className='categories'>Music</p>
            <p className='categories'>Faith</p>
            <p className='categories'>Art</p>
            <p className='categories'>News</p>
          </div>
            <div id='feature1'>
                <h4>Find your niche</h4>
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
  )
}

export default Main