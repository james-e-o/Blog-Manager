import './main-mobile.css'
import './main-tab.css'
import './main-desk.css'
import { useRef,useState, useEffect, useContext } from 'react'
import {  Views, Bookmark, Left, Right, Newlink, Arrow } from '../svg'
import { Link } from 'react-router-dom'
import { screenWidth } from '../app/App'
import Ui from "../contents/images/ui.png"
import Secure from "../contents/images/secure.png"
import Seo from "../contents/images/seo.png"
import LightBulb from "../contents/images/lightbulb.png"


const Main = () => {
      const title = 'james Onwuasoanya'
      const content = 'Title of my book is the fairy and the mao'
      const dynamicColor = useRef("")
      const scrollWrap = useRef("")
      const scroll = useRef("")
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
        // Element.classList.toggle(`${Element.classList[0]}`,`${Element.classList[1]}`,`${Element.classList[2]}`)
        Element.classList.replace(`${Element.classList[0]}`,"portview")
        Element.classList.replace(`${Element.classList[1]}`,"portview")
        Element.classList.replace(`${Element.classList[2]}`,"portview")
        // allPort.forEach(port =>{
        //   let classes = port.classList
        //   if(port !== e.target.closest(".port") && port.classList.contains("portview"))
        //   {port.classList.remove("portview")
        //    port.classList.add()
        //   }
        //   console.log('buyrt',Element)
        // })
        console.log('buyrt',Element.classList[1])
      }
      function Pop1(e){
        const allPort = document.querySelectorAll(".mobile-main .port")
        let Element = e.target.closest(".port")
        let childElement= Element.firstChild
        childElement.classList.toggle("portview")
          allPort.forEach(port =>{
            let classes = port.classList
            if(port !== e.target.closest(".port") && port.firstChild.classList.contains("portview"))
            {
              port.firstChild.classList.toggle("portview")
            //  port.classList.add()
            }
            // console.log(port,Element)
          })
        console.log(childElement)
      }
      
      useEffect(()=>{
        const randomColor = getRandomIntInclusive(0,2)
        dynamicColor.current.style.color = `${colors[randomColor]}`
        setColorState(randomColor)

        
        // Element.classList.toggle("portview")
        console.log("popping",Element)

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
            <div id="hippop">hip hip hip!</div>
              <div className='phase'>
                <div className='phase-wrap1'>               
                  <p className='phase-core'>planning phase</p>  
                  <Port phase={1} port={1} />  
                  <Port phase={1} port={2} />  
                  <Port phase={1} port={3} />  
                  <Port phase={1} port={4} />  
                  <Port phase={1} port={5} />
                </div>                 
              </div>
              <div className='phase'>
                <div className='phase-wrap2'>
                  <p className='phase-core'>planning phase</p>                  
                  <Port phase={2} port={1} />  
                  <Port phase={2} port={2} />  
                  <Port phase={2} port={3} />  
                  <Port phase={2} port={4} />  
                  <Port phase={2} port={5} />  
                </div>                
              </div>
              <div className='phase'>
                <div className='phase-wrap3'>
                  <p className='phase-core'>planning phase</p>
                  <Port phase={3} port={1} />  
                  <Port phase={3} port={2} />  
                  <Port phase={3} port={3} />  
                  <Port phase={3} port={4} />  
                  <Port phase={3} port={5} />   
                </div>                
              </div>         
            </div>          
          </section>

          {/* FEATURES */}
          <section className="features">
                <div className="features-wrap">
                  <div className="feature">
                    <div className="feature-header">
                      <figure><img src={Secure} alt="secure" /></figure>
                      <p className="feature-heading">Secure</p>
                      </div>
                    <p className='feature-content'>Strong authentication and password security for you database to prevent phising attacks and unauthorized users.</p>
                  </div>
                  <div className="feature">
                    <div className="feature-header">
                      <figure><img src={Ui} alt="ui2" /></figure>
                      <p className="feature-heading">Seamless</p>
                      </div>
                    <p className='feature-content'>
                      Our site is built with our users' at heart to give you a smooth reading and content management expirience from desktop to tablet and smartphone. 
                    </p>
                  </div>
                  <div className="feature">
                    <div className="feature-header">
                      <figure><img src={Seo} alt="seo" /></figure>
                      <p className="feature-heading">Optimized</p>
                    </div>
                    <p className='feature-content'>Great SEO features, designed to improve your content search engine rankings, and increase content engagement from other creators and viewers.</p>
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


export const Port = ({phase, port}) => {
  const allPort = document.querySelectorAll(".mobile-main .port")
  const hipPop = document.getElementById("hippop")
  const lifecycle = document.querySelector(".lifecycle")

  function Pop1(e){
    let Element = e.target.closest(".port")
    let containerBox = lifecycle.getBoundingClientRect().width
    let box = Element.getBoundingClientRect()
    console.log(e.clientX,containerBox)
    let childElement= Element.firstChild
    let shift = (containerBox/2)/2
      let x 
      let y 
    if (e.clientX < containerBox/2){
      x =box.x + `${20}px`
      y =box.y
    }else if(e.clientX > (containerBox/2)){
      x = box.x - (containerBox/2.5) 
      y =box.y
    }else {
      x =box.x
      y =box.y
    }
    
    hipPop.style.setProperty("--popleft",`${x}px`)
    hipPop.style.setProperty('--poptop',`${y}px`)
    hipPop.classList.add("hippop")
    // childElement.classList.toggle("portview")
    //   allPort.forEach(port =>{
    //     let classes = port.classList
    //     if(port !== e.target.closest(".port") && port.firstChild.classList.contains("portview"))
    //     {port.firstChild.classList.toggle("portview")}
    //   })
    console.log(box.x,box.y,e.clientX, e.clientY)
  }
  const [toggleport, setToggleport]=useState(false)
  const parentClass = `phase${phase}-port port port${port}`
  const childClass = toggleport? "portview":"pop"
  return (
    <div className={parentClass} onClick={Pop1}><div className={childClass}>{port}</div></div>
    )
  }
  



  // const className = toggleport? `portview`:`phase${phase}-port port port${port}`