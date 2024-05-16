import './main-mobile.css'
import './main-tab.css'
import './main-desk.css'
import { useRef,useState, useEffect, useContext } from 'react'
import {  Views, Bookmark, Left, Right, Newlink, Arrow } from '../svg'
import { Link } from 'react-router-dom'
import Ui from "../contents/images/ui.png"
import Secure from "../contents/images/secure.png"
import Seo from "../contents/images/seo.png"
import LightBulb from "../contents/images/lightbulb.png"
import HeroImage from "../contents/images/skr.png"
import CyanSquiggle from "../contents/images/cyanSqiggle.png"
import SlateblueSquiggle from "../contents/images/slateSqiggle.png"
import OrangeSquiggle from "../contents/images/orangeSqiggle.png"
import SearchIcon from "../contents/images/lightbulb.png"
import WriteIcon from "../contents/images/lightbulb.png"
import BulbIcon from "../contents/images/lightbulb.png"
import LeftDir from "../contents/images/icons/left-direct.png"
import RightDir from "../contents/images/icons/right-direct.png"
import { screenWidth } from '../app/App'


const Main = () => {

     
   
      useEffect(()=>{
        let categoryScroll = document.getElementById("categories-scroll")
        let menuLeftArr = document.getElementById("leftarr")
        let menuRightArr = document.getElementById("rightarr")
  

          menuLeftArr.onclick = (e) =>{       
              categoryScroll.scrollTo({
                top: 0,
                left: (categoryScroll.scrollLeft - 180%(categoryScroll.scrollWidth - categoryScroll.offsetWidth)) || (categoryScroll.scrollLeft - 20%(categoryScroll.scrollWidth - categoryScroll.offsetWidth)),
                behavior: "smooth",
              });
          }
          menuRightArr.onclick = (e) =>{       
              categoryScroll.scrollTo({
                top: 0,
                left: (categoryScroll.scrollLeft + 180%(categoryScroll.scrollWidth - categoryScroll.offsetWidth)) || (categoryScroll.scrollLeft + 20%(categoryScroll.scrollWidth - categoryScroll.offsetWidth)),
                behavior: "smooth",
              });
          }


          categoryScroll.onscroll = (e) =>{
            if (e.target.scrollLeft > 34){
              menuLeftArr.style.zIndex = "1"
              menuLeftArr.style.opacity="1"
            } else if(e.target.scrollLeft < 14){
              menuLeftArr.style.zIndex = "-1"
              menuLeftArr.style.opacity="0"
            } 
            if (e.target.scrollLeft >= (e.target.scrollWidth - (e.target.offsetWidth + 10))){
              menuRightArr.style.zIndex = "-1"
              menuRightArr.style.opacity="0"
            } else if(e.target.scrollLeft <= (e.target.scrollWidth - (e.target.offsetWidth + 20))) {
              menuRightArr.style.zIndex = "1"
              menuRightArr.style.opacity="1"
            }
          }
      })
      

      const title = 'james Onwuasoanya'
      const content = 'Title of my book is the fairy and the mao'
      const dynamicColor = useRef("")
      const CategoryScroll = useRef("")
      const scrollWrap = useRef("")
      const scroll = useRef("")
      const colors= ['#00f3f7','#61fd88','#ffd167']
      const [colorState, setColorState]= useState(false)
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
    
      const [innerWidth, setInnerWidth] = useState(window.innerWidth)
      const screen = useContext(screenWidth)
     
     
  return (
  
    <main>
      {screen < 480 ? 
      //-- MOBILE --
      (<>
        <div className='mobile-main'>
          <div className='hero-tag'>
              <h1 ref={dynamicColor} id='main-h1'>Share <span>your </span>  
              Ideas & build 
              <span> your </span>  
              audience here.</h1>
              <p className="punch-line">
              <img id='cyansquiggle' src={CyanSquiggle} width={"23px"} height={"40px"} />
              <img id='orangesquiggle' src={OrangeSquiggle} width={"20px"} height={"35px"} />
              <img id='slatebluesquiggle' src={SlateblueSquiggle} width={"25px"} height={"35px"} />
                Our platform provides you the best user experience you need to view & make great contents.</p>
              <Link to={'sign'} state={{signValue:'start'}}><button id="cta" >Get started</button></Link>
              <div className="hero-art">
                <img src={HeroImage}  />
              </div>
          </div>
          <p className="interest-text">Pick <span>Interest</span></p>
          <div className='interest'>
            <div className='categories'>
              <p id="leftarr"  ><img src={LeftDir} height={19} width={19}/></p>
              <p id="rightarr"><img src={RightDir} height={19} width={19}/></p>
              <div ref={CategoryScroll} className='categories-scroll' id='categories-scroll'>
                {niches.map((niche)=>(
                  <button className='category' key={niche.id}>{niche.name}</button>
                ))}
                <button className='category more'>view more</button>
              </div>
            </div>
                      {/* <div className='reads'>
                        <div className='read_id'>
                          <figure></figure>
                          <h5>{title}</h5>
                          <p>{'12'}mins read</p>
                        </div> 
                        <h4 id='read_content'>{content}.</h4>
                        <div id='engagement'>
                          <div className='post-date'>{'Aug. 24'}</div>
                          <div><Views/> {'9k'}</div>
                      
                          <div><Bookmark/> {'bookmark'}</div>
                        </div>
                      </div> */}
                      {/* <div className='reads'>
                        <div className='read_id'>
                          <figure></figure>
                          <h5>{title}</h5>
                          <p>{'12'}mins read</p>
                        </div> 
                        <h4 id='read_content'>{content}.</h4>
                        <div id='engagement'>
                          <div className='post-date'>{'Aug. 24'}</div>
                          <div><Views/> {'9k'}</div>
                          
                          <div><Bookmark/> {'bookmark'}</div>
                        </div>
                      </div> */}
          </div>
          {/* NICHE */}
          <div className='niche-content'>
            <p id='niche'>Find your niche</p>
            <div className='categories'>
              {niches.map((niche)=>(
                <button className='category' key={niche.id}>{niche.name}</button>
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
              <div className="content-wrap">
                <div className="port eraser"></div>
                <div className="port port1">step 1</div>
                <div className="port port2">step 2</div>
                <div className="port port3">step 3</div>
                <div className="port port4">step 4</div>
                <div className="port port5">step 5</div>
                <div className="port lead"></div>
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


// export const Port = ({phase, port}) => {
//   const allPort = document.querySelectorAll(".mobile-main .port")
//   // const hipPop = document.getElementById("hippop")
//   const lifecycle = document.querySelector(".lifecycle")

//   function Pop1(e){
//     let Element = e.target.closest(".port")
//     let containerBox = lifecycle.getBoundingClientRect().width
//     let box = Element.getBoundingClientRect()
//     let childElement= Element.firstChild
//     console.log(e.clientX,containerBox)
//     // let shift = (containerBox/2)/2
//     //   let x 
//     //   let y 
//     // if (e.clientX < containerBox/2){
//     //   x =box.x + `${20}px`
//     //   y =box.y
//     // }else if(e.clientX > (containerBox/2)){
//     //   x = box.x - (containerBox/2.5) 
//     //   y =box.y
//     // }else {
//     //   x =box.x
//     //   y =box.y
//     // }
    
//     // hipPop.style.setProperty("--popleft",`${x}px`)
//     // hipPop.style.setProperty('--poptop',`${y}px`)
//     // hipPop.classList.add("hippop")
//     Element.classList.toggle("front")
//     childElement.classList.toggle("portview")
//     //   allPort.forEach(port =>{
//     //     let classes = port.classList
//     //     if(port !== e.target.closest(".port") && port.firstChild.classList.contains("portview"))
//     //     {port.firstChild.classList.toggle("portview")}
//     //   })
//     console.log(box.x,box.y,e.clientX, e.clientY)
//   }
//   const [toggleport, setToggleport]=useState(false)
//   const parentClass = `phase${phase}-port port port${port}`
//   const childClass = toggleport? "portview":"pop"
//   return (
//     <div className={parentClass} onClick={Pop1}><div className={childClass}>{port}</div></div>
//     )
//   }
  



  // const className = toggleport? `portview`:`phase${phase}-port port port${port}`