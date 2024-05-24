import './main-mobile.css'
import './main-tab.css'
import './main-desk.css'
import { useRef,useState, useEffect, useContext } from 'react'
import {  Views, Bookmark, Left, Right, Newlink, Arrow } from '../../svg'
import { Link } from 'react-router-dom'
import Ui from "../../contents/images/ui.png"
import Secure from "../../contents/images/secure.png"
import Seo from "../../contents/images/seo.png"
import LightBulb from "./ph-lightbulb.png"
import HeroImage from "../../contents/images/skr.png"
import CyanSquiggle from "../../contents/images/cyanSqiggle.png"
import SlateblueSquiggle from "../../contents/images/slateSqiggle.png"
import OrangeSquiggle from "../../contents/images/orangeSqiggle.png"
import LeftDir from "../../contents/images/icons/left-direct.png"
import RightDir from "../../contents/images/icons/right-direct.png"
import melissa from "./ph-melissa.webp"
import john from "./ph-john.avif"
import kate from "./ph-kate.avif"
import like from "./ph-like.png"
import write from "./ph-write.jpg"
import share from "./ph-share.webp"
import collab from "./ph-collab.webp"
import { screenWidth } from '../../app/App'



const Steps = ({isfocused, index, focus}) => {

  return (
    <div className={!isfocused? `step step${index}` :`stepfocused step${index}`} onClick={focus}>
                <p className="step-header">Know your audience</p>
                <p className={!isfocused?" step-content":" step step-contentfocus"} style={{backgroundColor:"transparent"}}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod vel mollitia eligendi saepe eaque a alias cum quam! Nisi, quibusdam recusandae! Eius, nobis vel non quis impedit magni suscipit natus.
                    <button id='toggle-full' >+</button>
                  </p>
                </div>
  )
}

const Carousel = () => {

  const carouselContent =[
    {
      carouselText:{
        head :"Create",
      content: "Unleash your inner creator!"
      },
      image:write,
      id:'1'
    },
    {
      carouselText:{
        head :"Collaborate",
        content: "Connect with creators and build something amazing together."
      },
      image:collab,
      id:'2'
    },
    {
      carouselText:{
        head :"Share",
      content: "Do you have a unique perspective? Our platform has your audience. "
      },
      image:share,
      id:'3'
    }
  ]

  useEffect(()=>{
    const carousel = document.querySelector("div.carousel")
    const figures = document.querySelectorAll("div.carousel figure")
    const figSpan = document.querySelectorAll("p.section-head span")
    setInterval(()=>{

      carousel.scrollBy(carousel.clientWidth, 0)
      if (carousel.scrollLeft >= (carousel.scrollWidth -  (carousel.clientWidth + 2))){
        carousel.scroll(0,0)
      }
      // figures.forEach(figure => {
      //   carousel.addEventListener('scroll',(e)=>{
      //     console.log(figure.offsetLeft)
      //     if (figure.offsetLeft == 2){
      //       figSpan.forEach(span => {
      //         span.classList.toggle('s-active')
      //       })
      //     }
      //   })
      // })
    },7000)
  },[])

  return (
    <div className="carousel">
        {carouselContent.map(carousel => (
          <figure key={carousel.id}>
            <div className="carousel-text">
              <p className="section-head"><span></span>{carousel.carouselText.head}</p>
              <p className="section-content">{carousel.carouselText.content}</p>
            </div>
            <img id='share-photo' src={carousel.image} width={100} height={100}/>
          </figure>
        ))}
     </div> 
  )
}


const Main = () => {

      const [activeStep, setActiveStep] = useState(1)
      const CategoryScroll = useRef("")
      const scrollWrap = useRef("")
      const scroll = useRef("")
      const [colorState, setColorState]= useState(false)
      const niches = [{id:1, name:'Featured'}, {id:2, name:'Finance'}, {id:3,name:'Business'}, {id:4,name:'Culture'}, {id:5,name:'Technology'}, {id:6,name:'Sports'}, {id:7,name:'Music'}, {id:8,name:'Religion'}, {id:9,name:'Self Improvement'}, {id:10,name:'Art'}, {id:11,name:'News'}]
      const [innerWidth, setInnerWidth] = useState(window.innerWidth)
      const screen = useContext(screenWidth)

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

          const ports = document.querySelectorAll('div.port')
          let leadport = document.querySelector(`div.step${activeStep}`)
         
          leadport.classList.toggle("activeport")
          ports.forEach(port =>{
            if (port === leadport) return 
            else if(port !== leadport && port.classList.contains('activeport')) {
              // console.log(activeStep, leadport)
               port.classList.toggle("activeport")
            }
          })

        
      })
     
  return (
  
    <main>
      {screen < 480 ? 
      //-- MOBILE --
      (<>
        <div className='mobile-main'>
          <div className='hero-tag'>
              <h1 id='main-h1'>Share <span>your </span>  
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
            <div className='featured'>
                <div className="featured-scroll">
                  {posts.map((post)=>(
                    <div className="feature" key={post.id}>
                        <p className="title">{post.title}</p>
                        <p className="subtitle">{post.subtitle}</p>
                        <div className="details">
                          <p className="likes"><img src={like} height={13} width={13}/> {post.likes}</p>
                          <div className="id">
                            <figure id='img' style={{backgroundImage:`url(${post.image})`}} ></figure>
                            <p className="name">
                              <span>{post.author.firstName}</span>
                              <span>{post.author.lastName}</span>
                            </p>
                          </div>
                        </div>
                    </div>
                  ))}
                </div>
            </div>
          </div>
          <section className="strategy">
            <div className='strategy-header'>
              <p className="strategy-text">Content <span>Strategy</span></p>
              <p id='light-bulb'><img src={LightBulb} width={"37px"} height={"50px"} alt="question" /></p>
            </div>
            <div className='strategy-content'>
              <div className="lead-wrap">
                <div className="eraser"></div>
                <div className="port step1">step 1</div>
                <div className="port step2">step 2</div>
                <div className="port step3">step 3</div>
                <div className="port step4">step 4</div>
                <div className="port step5">step 5</div>
                <div className="port step6">step 6</div>
                <div className=" lead"></div>
              </div>
              {/* <WriteSteps/> */}
              <div className="write-steps">
                <Steps index={1} isfocused={activeStep===1} focus={(e)=>{activeStep!==1?setActiveStep(1):setActiveStep(1)}}/>
                <Steps index={2} isfocused={activeStep===2} focus={(e)=>{activeStep!==2?setActiveStep(2):setActiveStep(1)}}/>
                <Steps index={3} isfocused={activeStep===3} focus={(e)=>{activeStep!==3?setActiveStep(3):setActiveStep(1)}}/>
                <Steps index={4} isfocused={activeStep===4} focus={(e)=>{activeStep!==4?setActiveStep(4):setActiveStep(1)}}/>
                <Steps index={5} isfocused={activeStep===5} focus={(e)=>{activeStep!==5?setActiveStep(5):setActiveStep(1)}}/>
                <Steps index={6} isfocused={activeStep===6} focus={(e)=>{activeStep!==6?setActiveStep(6):setActiveStep(1)}}/>
              </div>
            </div>          
          </section>
          <div className="create">
            < Carousel />
            <p className="write">Start writing</p>
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
              {/* <div className='arrow-left' onClick={handleReviewLeft}><Left/></div>
              <div className='arrow-right' onClick={handleReviewRight}><Right /></div> */}
            </div>
        </section>
          
        </div>
      </>):screen < 720 ? 
      //  -- TABLET --
      (<>
        <div className='tab-main'>
          <div className='h1-tag'>
            <h1 id='main-h1'>Share <span>your</span> Ideas & build <span>your</span> audience here.</h1>
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
              <h1 id='main-h1'>Share <span>your</span> Ideas & build <span>your</span> audience here.</h1>
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
                          <h5></h5>
                          <p>{'12'}mins read</p>
                        </div> 
                        <h4 id='read_content'>.</h4>
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

const posts = [
  { 
    author:{
      firstName:"Melissa",
      lastName:"Khan",
    },
    title:"Unconventional Travel Hacks:",
    likes:"240",
    subtitle:"Exploring the World on a Budget.",
    image:melissa,
    id:1,
  },
  { 
    author:{
      firstName:"John",
      lastName:"Doe",
    },
    title:"The Future of Work:",
    likes:"218",
    subtitle:"Automation or Amplification?",
    image:john,
    id:2,
  },
  {
    author:{
      firstName:"Kate",
      lastName:"Henshaw"
    },
    title:"The Power of Personal Branding: ",
    likes:"197",
    subtitle:"Building Your Online Presence.",
    image:kate,
    id:3,
  }
]

