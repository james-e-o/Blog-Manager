import './main-mobile.css'
import './main-tab.css'
import './main-desk.css'
import { useRef,useState, useEffect, useContext } from 'react'
import {  Views, Bookmark, Left, Right, Newlink, Arrow } from '../svg'
import { Link } from 'react-router-dom'
import { screenWidth } from '../app/App'
import Ui from "../contents/images/ui.png"
import Secure from "../contents/images/secure.png"
import LightBulb from "../contents/images/lightbulb.png"


const Main = () => {
      const title = 'james Onwuasoanya'
      const content = 'Title of my book is the fairy and the mao'
      const dynamicColor = useRef("")
      const scrollWrap = useRef("")
      const scroll = useRef("")
      const colors= ['#00f3f7','#61fd88','#ffd167']
      const [colorState, setColorState]= useState(false)
      const [toggleport, setToggleport]=useState(false)
      const screen = useContext(screenWidth)
      const niches = [{id:1, name:'Finance'}, {id:2,name:'Business'}, {id:3,name:'Culture'}, {id:4,name:'Technology'},{id:5,name:'Politics'}, {id:6,name:'Sports'}, {id:7,name:'Music'}, {id:8,name:'Religion'}, {id:9,name:'Self Improvement'}, {id:10,name:'Art'}, {id:11,name:'News'}]
     
      function getRandomIntInclusive(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1) + min);
      } 
      function handleReviewLeft(e){
        let scrollWidth = scroll.current.clientWidth
        let childElememts = scroll.current.childElementCount
        let scrollStart = scroll.current.offsetLeft
        let fraction = scrollWidth/childElememts
        console.log(childElememts)
        scrollWrap.current?.scrollBy({left :-fraction,behavior: 'smooth'});
        return
      }
      function handleReviewRight(e){
        let scrollWidth = scroll.current.clientWidth
        let childElememts = scroll.current.childElementCount
        let scrollStart = scroll.current.offsetLeft
        let fraction = scrollWidth/childElememts 
        console.log(scrollStart)
        scrollWrap.current?.scrollBy({left :fraction,behavior: 'smooth'});
        return
      }
      function Pop(e){
          const allPort = document.querySelectorAll(".mobile-main .port")
          let Element = e.target.closest(".port")
          // allPort.forEach(port =>port.classList.contains("portview")? port.classList.remove("portview"):"")
          Element.classList.toggle("portview")
          console.log("popping",Element)
      }
      useEffect(()=>{
        const randomColor = getRandomIntInclusive(0,2)
        dynamicColor.current.style.color = `${colors[randomColor]}`
        setColorState(randomColor)

        // let newpoint
        // scroll.current.addEventListener('pointercancel',(e)=>{
        //   let scrollArray = Array.from(scroll.current.children) 
        //   let distance = e.x 
        //   console.log(scrollArray.indexOf(e.target.closest('div.rev')),distance )
        // })
      },[screen])
  return (
  
    <main>
      {screen < 480 ? 
      //-- MOBILE --
      (<>
        <div className='mobile-main'>
          <div className='h1-tag'>
            <div className='art'></div>
              <h1 ref={dynamicColor} id='main-h1'>Share <span>your</span> Ideas & build <span>your</span> audience here.</h1>
            <div id='cta'>
              <p className="punch-line">With Skriptn, you can create your space, publish and manage engaging contents that will grow your audience. It is your world.<br /></p>
              <Link to={'sign'} state={{signValue:'start'}}><button>Explore</button></Link>
            </div>
          </div>
          <Link  to="/about" style={{textDecoration:"none"}}><div className="aboutlink"><span>Know more about us </span><Newlink/></div></Link>
          <div className='featured'>
            <div id='reads'>Top reads</div>
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
          <div id='podcast'>
            <div className='podcast1-wrapper'>
              <h2>Start your own podcast</h2>
                <article>
                  {'Get paid from your passionate subscribers'}
                </article>
                <button>Get started</button>                                                 
            </div>                                                          
            <div className='podcast-gradient'></div>
          </div>

          {/* LIFECYCLE */}
          <section className="lifecycle">
            <div className='lifecycle-header'>
              <h2>Content strategy</h2>
              <p id='light-bulb'><img src={LightBulb} width={"37px"} height={"50px"} alt="question" /></p>
            </div>
            <div className='lifecycle-content'>
              <div className='phase'>
                <div className='phase-wrap1'>
                  <p className='phase-core'>planning phase</p>  
                  <div className="phase1-port port port1" onClick={Pop}><p>1</p></div>  
                  <div className="phase1-port port port2" onClick={Pop}><p>2</p></div>  
                  <div className="phase1-port port port3" onClick={Pop}><p>3</p></div>  
                  <div className="phase1-port port port4" onClick={Pop}><p>4</p></div>  
                  <div className="phase1-port port port5" onClick={Pop}><p>5</p></div>  
                </div>                
              </div>
              <div className='phase'>
                <div className='phase-wrap2'>
                  <p className='phase-core'>planning phase</p>
                  <div className=" portview" onClick={Pop}><p>1</p></div>  
                  <div className="phase2-port port port2" onClick={Pop}><p>2</p></div>  
                  <div className="phase2-port port port3" onClick={Pop}><p>3</p></div>  
                  <div className="phase2-port port port4" onClick={Pop}><p>4</p></div>  
                  <div className="phase2-port port port5" onClick={Pop}><p>5</p></div>  
                </div>                
              </div>
              <div className='phase'>
                <div className='phase-wrap3'>
                  <p className='phase-core'>planning phase</p>
                  <div className="phase3-port port port1" onClick={Pop}><p>1</p></div>  
                  <div className="phase3-port port port2" onClick={Pop}><p>2</p></div>  
                  <div className="phase3-port port port3" onClick={Pop}><p>3</p></div>  
                  <div className="phase3-port port port4" onClick={Pop}><p>4</p></div>  
                  <div className="phase3-port port port5" onClick={Pop}><p>5</p></div>  
                </div>                
              </div>
            </div>          
          </section>

          {/* FEATURES */}
          <section className="features">
                <div className="features-wrap">
                  <div className="feature">
                    <figure><img src={Secure} alt="secure" /></figure>
                    <p></p>
                  </div>
                  <div className="feature">
                    <figure><img src={Ui} alt="ui2" /></figure>
                    <p></p>
                  </div>
                  <div className="feature">
                    <figure></figure>
                    <p></p>
                  </div>

                </div>
          </section>
          {/* REVIEWS */}
          <section className='review-wrapper'>
          <p className='review-header'>Our reviews</p>
          <div ref={scrollWrap} className='reviews'>  
            <div ref={scroll} className='review-scroll'>

              <div className='rev'>
                <div className="review-content"><p>"</p>first Veniam pariatur cillum ullamco proident et id Lorem excepteur ad.</div> 
                <div className='review-id'>
                  <figure className='review-image'></figure>                       
                  <div className='review-persona'>
                    <h5> Name</h5>
                    <p className='review-portfolio'>CEO abc enterprise</p> 
                  </div>
                </div> 
              </div>
              {/* again */}
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


// export const Port = () => {
//   return (
//     <div className="phase1-port port port1" onClick={Pop}><p>1</p></div>
//   )
// }
