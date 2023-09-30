import './main-mobile.css'
import './main-tab.css'
import './main-desk.css'
import { useRef,useState, useEffect, useContext } from 'react'
import {  Views, Bookmark, Left, Right } from '../svg'
import { Link } from 'react-router-dom'
import { screenWidth } from '../app/App'


const Main = () => {
      const title = 'james Onwuasoanya'
      const content = 'Title of my book is the fairy and the mao'
      const dynamicColor = useRef("")
      const scrollReview = useRef("")
      const scrollReviewRight = useRef("")
      const colors= ['#00f3f7','#61fd88','#ffd167']
      const [colorState, setColorState]= useState(false)
      const screen = useContext(screenWidth)
      const niches = [{id:1, name:'Finance'}, {id:2,name:'Business'}, {id:3,name:'Culture'}, {id:4,name:'Technology'},{id:5,name:'Politics'}, {id:6,name:'Sports'}, {id:7,name:'Music'}, {id:8,name:'Religion'}, {id:9,name:'Self Improvement'}, {id:10,name:'Art'}, {id:11,name:'News'}]
     
      function getRandomIntInclusive(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1) + min);
      } 
      function handleReviewLeft(e){
        scrollReview.current?.scrollTo({left :-300,behavior: 'smooth'});
      }
      function handleReviewRight(e){
        let current = scrollReview.current.style.scrollX
        scrollReview.current?.scrollTo({left :current + current*100,behavior: 'smooth'});
      }
      useEffect(()=>{
        const randomColor = getRandomIntInclusive(0,2)
        dynamicColor.current.style.color = `${colors[randomColor]}`
        setColorState(randomColor)
      },[screen])
  return (
  
    <main>
      {screen < 480 ? 
      //-- MOBILE --
      (<>
        <div className='mobile-main'>
          <div className='h1-tag'>
            <h1 ref={dynamicColor} id='main-h1'>Share <span>your</span> Ideas & build <span>your</span> audience here.</h1>
            <p id='cta'>
            With Skriptn, you can create your space, publish and manage engaging contents that will grow your audience. It is your world.<br />
            <Link to={'sign'} state={{signValue:'start'}}><button>Explore</button></Link>
            </p>
          </div>
          <div className='featured'>
            <p id='reads'>Top reads</p>
                      <div className='reads'>
                        <div className='read_id'>
                          <figure></figure>
                          <h5>{title}</h5>
                          <p>{'12'}mins read</p>
                        </div> 
                        <h4 id='read_content'>{content}.</h4>
                        <div id='engagement'>
                          <div className='post-date'>{'Aug. 24'}</div>
                          <div><Views/> {'9k'}</div>
                          {/* <div><Like/> {'16k'}</div> */}
                          <div><Bookmark/> {'bookmark'}</div>
                        </div>
                      </div>
          </div>
          {/* NICHE */}
          <div className='niche-content'>
            <p id='niche'>Find your niche</p>
            <div className='category'>
              {niches.map((niche)=>(
                <button className='categories' key={niche.id}>{niche.name}</button>
              ))}
            </div>
            <div className='see'><p id='arrow'> →</p><p id='see'>See more topics </p></div>           
          </div>
          {/* PODCAST */}
          <div id='podcast1'>
            <div className='podcast1-wrapper'>
              <h2>Start your own podcast</h2>
                <article>
                  {'Get paid from your passionate subscribers'}
                </article>
                <button>Get started</button>                                                          
            </div>                                                          
            <div className='podcast1-gradient'></div>
          </div>

          {/* LIFECYCLE */}
          <section className="lifecycle-wrapper">
            <h1>Content life cycle</h1>
          </section>

          {/* REVIEWS */}
          <section className='review-wrapper'>
            <p className='review-header'>Our reviews</p>
            <div ref={scrollReview} className='reviews'>  
            <div className='review-scroll'>
              <div className='rev'>
                <figure className='review-image'></figure>                       
                <div className="review-content">Veniam pariatur cillum ullamco proident et id Lorem excepteur ad.</div> 
                <div className='review-id'>
                  <h5> Name</h5>
                  <p id='review-portfolio'>CEO abc enterprise</p> 
                </div> 
              </div>
              {/* again */}
              <div className='rev'>
                <figure className='review-image'></figure>                       
                <div className="review-content">Veniam pariatur cillum ullamco proident et id Lorem excepteur ad.</div> 
                <div className='review-id'>
                  <h5> Name</h5>
                  <p id='review-portfolio'>CEO abc enterprise</p> 
                </div> 
              </div>
              {/* again */}
              <div className='rev'>
                <figure className='review-image'></figure>                       
                <div className="review-content">Veniam pariatur cillum ullamco proident et id Lorem excepteur ad.</div> 
                <div className='review-id'>
                  <h5> Name</h5>
                  <p id='review-portfolio'>CEO abc enterprise</p> 
                </div> 
              </div>
              {/* again */}
              <div className='rev'>
                <figure className='review-image'></figure>                       
                <div className="review-content">Veniam pariatur cillum ullamco proident et id Lorem excepteur ad.</div> 
                <div className='review-id'>
                  <h5> Name</h5>
                  <p id='review-portfolio'>CEO abc enterprise</p> 
                </div> 
              </div>
              {/* again */}
              <div className='rev'>
                <figure className='review-image'></figure>                       
                <div className="review-content">Veniam pariatur cillum ullamco proident et id Lorem excepteur ad.</div> 
                <div className='review-id'>
                  <h5> Name</h5>
                  <p id='review-portfolio'>CEO abc enterprise</p> 
                </div> 
              </div>
            </div>
          </div>
            <div className='review-scroller'>
              <div className='arrow-left' onClick={handleReviewLeft}><Left/></div>
              <div className='arrow-right' onClick={handleReviewRight}><Right /></div>
            </div>
          </section>
          
        </div>
      </>):screen < 720 ? 
      //  -- TABLET --
      (<>
        <div className='tab-main'>
          <div className='h1-tag'>
            <h1 ref={dynamicColor} id='main-h1'>Share <span>your</span> Ideas & build <span>your</span> audience here.</h1>
            <p id='cta'>
            With Skriptn, you can create your space, publish and manage engaging contents that will grow your audience. It is your world.<br />
            <Link to={'sign'} state={{signValue:'start'}}><button>Explore</button></Link>
            </p>
          </div>
          <div className='featured'>
            <p id='reads'>Top reads</p>
                      <div className='reads'>
                        <div className='read_id'>
                          <figure></figure>
                          <h5>{title}</h5>
                          <p>{'12'}mins read</p>
                        </div> 
                        <h4 id='read_content'>{content}.</h4>
                        <div id='engagement'>
                          <div className='post-date'>{'Aug. 24'}</div>
                          <div><Views/> {'9k'}</div>
                          {/* <div><Like/> {'16k'}</div> */}
                          <div><Bookmark/> {'bookmark'}</div>
                        </div>
                      </div>
          </div>
          {/* NICHE */}
          <div className='niche-content'>
            <p id='niche'>Find your niche</p>
            <div className='category'>
              {niches.map((niche)=>(
                <button className='categories' key={niche.id}>{niche.name}</button>
              ))}            
            </div>
            <div className='see'><p id='arrow'> →</p><p id='see'>See more topics </p></div>           
          </div>
          {/* PODCAST */}
          <div id='podcast1'>
            <div className='podcast1-wrapper'>
              <h2>Start your own podcast</h2>
                <article>
                  {'Get paid from your passionate subscribers'}
                </article>
                <button>Get started</button>                                                          
            </div>                                                          
            <div className='podcast1-gradient'></div>
          </div>
          {/* REVIEWS */}
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
        </>
      ):(
      //  -- DESKTOP --
      <>
        <div className='desk-main'>
          <div className='main-display'>
            <div className='h1-tag'>
              <h1 ref={dynamicColor} id='main-h1'>Share <span>your</span> Ideas & build <span>your</span> audience here.</h1>
              <p id='cta'>
              With Skriptn, you can create your space, publish and manage engaging contents that will grow your audience. It is your world.<br />
              <Link to={'sign'} state={{signValue:'start'}}><button>Explore</button></Link>
              </p>
            </div>
            <div className='h1-art'>
                keyboards
            </div>          
          </div>
          <div className='featured'>
            <p id='reads'>Top reads</p>
                      <div className='reads'>
                        <div className='read_id'>
                          <figure></figure>
                          <h5>{title}</h5>
                          <p>{'12'}mins read</p>
                        </div> 
                        <h4 id='read_content'>{content}.</h4>
                        <div id='engagement'>
                          <div className='post-date'>{'Aug. 24'}</div>
                          <div><Views/> {'9k'}</div>
                          {/* <div><Like/> {'16k'}</div> */}
                          <div><Bookmark/> {'bookmark'}</div>
                        </div>
                      </div>
          </div>
          {/* NICHE */}
          <div className='niche-content'>
            <p id='niche'>Find your niche</p>
            <div className='category'>
              {niches.map((niche)=>(
                <button className='categories' key={niche.id}>{niche.name}</button>
              ))}            
            </div>
            <div className='see'><p id='arrow'> →</p><p id='see'>See more topics </p></div>           
          </div>
          {/* PODCAST */}
          <div id='podcast1'>
            <div className='podcast1-wrapper'>
              <h2>Start your own podcast</h2>
                <article>
                  {'Get paid from your passionate subscribers'}
                </article>
                <button>Get started</button>                                                          
            </div>                                                          
            <div className='podcast1-gradient'></div>
          </div>
          {/* REVIEWS */}
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
      </>
      )}   
    </main>
  )
}

export default Main