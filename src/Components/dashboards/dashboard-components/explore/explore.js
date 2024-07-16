import React, { useState, lazy, Suspense, useEffect } from 'react'
import { Link } from 'react-router-dom'
import "./explore.css"
import { niches } from '../../../Home/main/main'
import User from "../../../contents/images/dummy.jpg"
import { feeds } from '../../feed/feeds'


const Explore = () => {

const [activeLink, setActiveLink] =useState('topics')
const [fullContent, setFullContent] =useState(false)

  return (
    <div className="explore-page">
        <div className={fullContent?"explore-heading-tilt":"explore-heading"}>
          <Link to='/
          search' ><div className='search-link'>
              <figure>{search}</figure>
          </div></Link>
          <h5 id='tag-text'>Suggested</h5>
          <div className="explore-scroll">
            <p className={activeLink === 'topics'? 'active':''} onClick={()=>{setActiveLink('topics')}} >Topics</p>
            <p className={activeLink === 'people'? 'active':''} onClick={()=>{setActiveLink('people')}} >People</p>
            <p className={activeLink === 'publications'? 'active':''} onClick={()=>{setActiveLink('publications')}} >Publications</p>
            <p className={activeLink === 'history'? 'active':''} onClick={()=>{setActiveLink('history')}} >{history}</p>
          </div>
        </div>
       
       
        <div className="explore-actions">
          
          <div className="explore-content">
            {activeLink === 'topics'? <Topics value={fullContent} tilt={()=>setFullContent(true)}/>:
              activeLink === 'people'? <People value={fullContent} tilt={()=>setFullContent(true)}/>:
              activeLink === 'publications'? < Publications value={fullContent} tilt={()=>setFullContent(true)}/>:
              activeLink === 'history'? <History value={fullContent} tilt={()=>setFullContent(true)}/>:''
            }
          </div>
          <p onClick={()=>setFullContent(false)} className={fullContent?`tilt-back`:`tilt-disabled`}>{retilt}</p>
        </div>
    </div>
  )
}

export default Explore;


const Topics =({tilt, value}) => {
  const tagList = [...niches]
  const [selected, setSelected] =useState([])
  const [active, setActive] = useState(value)
  useEffect(()=>{
    console.log(selected)
  },[selected])
  useEffect(()=>{
    setSelected([])
  },[value])
  return (
    <div className='topic e'>
      <p className='choose-text'>Choose your favourite topics.</p>
      <div className="tag-container">
        {value?
          <div className={value?"tag-wrap":""}>
            { allTags.map((tag)=>(
              <button onClick={()=>{selected.includes(tag.name.toLowerCase())? (setSelected(selected.filter(item => item !== tag.name.toLowerCase()))): (setSelected([...selected, tag.name.toLowerCase()]))}} className='tag' key={tag.id}>
                {selected.includes(tag.name.toLowerCase())?
                    <span>{ticked}</span>
                    :
                    ""
                }
                {tag.name}
              </button>
            ))}
          </div>
          :
          <div className={value?"":"tag-wrap"}>
            { tagList.map((tag)=>(
              <button onClick={()=>{selected.includes(tag.name.toLowerCase())? (setSelected(selected.filter(item => item !== tag.name.toLowerCase()))): (setSelected([...selected, tag.name.toLowerCase()]))}} className='tag' key={tag.id}>
                {selected.includes(tag.name.toLowerCase())?
                    <span>{ticked}</span>
                    :
                    ""
                }
                {tag.name}
              </button>
            ))}
          </div>
        }
      </div>
      <p onClick={tilt} className={value?`more-disabled`:`more`}><span id='plus'> + </span>see more topics</p>
    </div>
  )
}

const People = ({tilt, value}) => {
  return (
    <div className='people e'>
     <p className='choose-text'>Find people in your community.</p>
     <div className="people-container">
        {value?
          <div className="tag-wrap">
             <div className="person">
              <figure><img src={User}  width={'100%'} height={'100%'}/></figure>
              <div className="details">
                <p className="name">{"Tom Cruise"}</p>
                <p className="bio">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ratione, itaque error ea unde accusamus sapiente atque obcaecati commodi autem nulla ab nesciunt culpa labore veritatis accusantium inventore esse? Obcaecati, minima?
                </p>
              </div>
              <button className="follow">follow</button>
            </div>
          </div>
          :
          <div className="tag-wrap">
            <div className="person">
              <figure><img src={User}  width={'100%'} height={'100%'}/></figure>
              <div className="details">
                <p className="name">{"Tom Hanks"}</p>
                <p className="bio">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel dignissimos qui voluptatem eos a, nam totam corrupti. Deleniti est ex rerum accusamus eius laboriosam? Laborum nisi quam iure distinctio ab?
                </p>
              </div>
              <button className="follow">follow</button>
            </div>
            <div className="person">
              <figure><img src={User}  width={'100%'} height={'100%'}/></figure>
              <div className="details">
                <p className="name">{"Nicholas Cage"}</p>
                <p className="bio">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
                </p>
              </div>
              <button className="follow">follow</button>
            </div>
            <div className="person">
              <figure><img src={User}  width={'100%'} height={'100%'}/></figure>
              <div className="details">
                <p className="name">{"Scott Adkins"}</p>
                <p className="bio">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
                </p>
              </div>
              <button className="follow">follow</button>
            </div>
          </div>
        }
      </div>
      <p onClick={tilt} className={value?`more-disabled`:`more`}><span id='plus'> + </span>see more publishers</p>
    </div>
  )
}



const Publications =({tilt, value}) => {
  return (
    <div className='publications e'>
    <p className='choose-text'>See journals in your domain.</p>
    <div className="publication-container">
       {value?
         <div className="tag-wrap" >
             <p>all publications</p>
         </div>
         :
         <div className="tag-wrap">
             <div className="publication">
              <figure><img src={User}  width={'100%'} height={'100%'}/></figure>
              <p className="publication-name">{'CATEGORY PIRATES'}</p>
              <p className="publication-author">{'Eddie Yoon'}</p>
              <p className="publication-about">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Explicabo, quos dignissimos, temporibus inventore fugit cum quo asperiores dolorem rem repellendus quidem! Quis consectetur quos distinctio dolore eaque molestias autem? Quo.
              </p>
            </div>
             <div className="publication">
              <figure><img src={User}  width={'100%'} height={'100%'}/></figure>
              <p className="publication-name">{"THE WESTAFRICAN WEEKLY"}</p>
              <p className="publication-author">{'David Hundeyin'}</p>
              <p className="publication-about">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Explicabo, quos dignissimos, temporibus inventore fugit cum quo asperiores dolorem rem repellendus quidem! Quis consectetur quos distinctio dolore eaque molestias autem? Quo.
              </p>
            </div>
         </div>
       }
     </div>
     <p onClick={tilt} className={value?`more-disabled`:`more`}><span id='plus'> + </span>see more publications</p>
   </div>
  )
}



const History =({tilt, value}) => {
  const modFeed = feeds.filter(feed => feed.id <= 3)
  return (
    <div className='publications e'>
    <p className='choose-text'>Check out journals within your specialty</p>
    <div className="history-container">
       {value?
         <div className="tag-wrap" >
             {feeds.map(feed => (
          <Link to={'/article'}><div key={feed.id} className='history'>
            <div className="feed-head">
              <div className="content-author">
                <figure><img src={feed.author.photo!== ""? feed.author.photo:User} /></figure>
                <p className='author-name'>{feed.author.name}</p>
              </div>
              <p className="date-published">{`${feed.date.day} ${feed.date.month},${feed.date.year}`}  {addBookmark}</p>
            </div>
            <div className="feed-content">
              <div className="content-texts">
                  <p className='content-title'>{feed.content.title}</p>
                  <p className="sub-text">{feed.content.subText}</p>
              </div>
              <div className="content-image"><img src={feed.content.image}/></div>
            </div>
          </div></Link>
      ))}
         </div>
         :
         <div className="tag-wrap">
            {modFeed.map(feed => (
              <Link to={'/article'}><div key={feed.id} className='history'>
                <div className="feed-head">
                  <div className="content-author">
                    <figure><img src={feed.author.photo!== ""? feed.author.photo:User} /></figure>
                    <p className='author-name'>{feed.author.name}</p>
                  </div>
                  <p className="date-published">{`${feed.date.day} ${feed.date.month},${feed.date.year}`}  {addBookmark}</p>
                </div>
                <div className="feed-content">
                  <div className="content-texts">
                      <p className='content-title'>{feed.content.title}</p>
                      <p className="sub-text">{feed.content.subText}</p>
                  </div>
                  <div className="content-image"><img src={feed.content.image}/></div>
                </div>
              </div></Link>
            ))}
          
         </div>
       }
     </div>
     <p onClick={tilt} className={value?`more-disabled`:`more`}><span id='plus'> + </span>see more history</p>
   </div>
  )
}
// }


const search = <svg xmlns="http://www.w3.org/2000/svg" fill='orange'  viewBox="0 0 64 64" width="28px" height="28px"><path d="M 27 9 C 17.075 9 9 17.075 9 27 C 9 36.925 17.075 45 27 45 C 31.129213 45 34.9263 43.587367 37.966797 41.240234 L 51.048828 54.322266 C 51.952828 55.226266 53.418266 55.226266 54.322266 54.322266 C 55.226266 53.418266 55.226266 51.952828 54.322266 51.048828 L 41.240234 37.966797 C 43.587367 34.9263 45 31.129213 45 27 C 45 17.075 36.925 9 27 9 z M 27 13 C 34.719 13 41 19.281 41 27 C 41 34.719 34.719 41 27 41 C 19.281 41 13 34.719 13 27 C 13 19.281 19.281 13 27 13 z"/></svg>
const retilt = <svg fill='#b9b9b9' width="38px" height="38px" xmlns="http://www.w3.org/2000/svg" viewBox="2.1 1 31.3 31.3" id="left-arrow"><path d="M17 2C8.716 2 2 8.716 2 17s6.716 15 15 15 15-6.716 15-15S25.284 2 17 2zm3.2 20.782a1 1 0 0 1-1.414 1.414L12.3 17.71a.997.997 0 0 1-.292-.71c0-.258.096-.514.292-.71l6.486-6.486a1 1 0 0 1 1.414 1.414L14.418 17l5.782 5.782z"></path></svg>
const ticked =<svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="12px" height="12px" viewBox="0 0 24 24"><path d="M 19.980469 5.9902344 A 1.0001 1.0001 0 0 0 19.292969 6.2929688 L 9 16.585938 L 5.7070312 13.292969 A 1.0001 1.0001 0 1 0 4.2929688 14.707031 L 8.2929688 18.707031 A 1.0001 1.0001 0 0 0 9.7070312 18.707031 L 20.707031 7.7070312 A 1.0001 1.0001 0 0 0 19.980469 5.9902344 z"></path></svg>
const history = <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-history "><path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"></path><path d="M3 3v5h5"></path><path d="M12 7v5l4 2"></path></svg>
const addBookmark = <svg width="17" height="17" viewBox="0 0 24 24" fill="none" class="nx"><path d="M17.5 1.25a.5.5 0 0 1 1 0v2.5H21a.5.5 0 0 1 0 1h-2.5v2.5a.5.5 0 0 1-1 0v-2.5H15a.5.5 0 0 1 0-1h2.5v-2.5zm-11 4.5a1 1 0 0 1 1-1H11a.5.5 0 0 0 0-1H7.5a2 2 0 0 0-2 2v14a.5.5 0 0 0 .8.4l5.7-4.4 5.7 4.4a.5.5 0 0 0 .8-.4v-8.5a.5.5 0 0 0-1 0v7.48l-5.2-4a.5.5 0 0 0-.6 0l-5.2 4V5.75z" ></path></svg>



const allTags = [
      {
      id:1,
      name:'Culture',
      },
      {
      id:2,
      name:'Technology',
      },
      {
      id:3,
      name:'Business',
      },
      {
      id:4,
      name:'Politics',
      },
      {
      id:5,
      name:'Finance',
      },
      {
      id:6,
      name:'Faith & Spiritually',
      },
      {
      id:7,
      name:'Climate & Environment',
      },
      {
      id:8,
      name:'Fiction',
      },
      {
      id:9,
      name:'Design',
      },
      {
      id:10,
      name:'Travel',
      },
      {
      id:11,
      name:'Comics',
      },
      {
      id:12,
      name:'Crypto',
      },
      {
      id:13,
      name:'Humor',
      },
      {
      id:14,
      name:'Food & Drink',
      },
      {
      id:15,
      name:'Sports',
      },
      {
      id:16,
      name:'Arts',
      },
      {
      id:17,
      name:'Health',
      },
      {
      id:18,
      name:'News',
      },
      {
      id:19,
      name:'Fashion & Beauty',
      },
      {
      id:20,
      name:'Music',
      },
      {
      id:21,
      name:'Science',
      },
      {
      id:22,
      name:'Literature',
      },
      {
      id:23,
      name:'Parenting',
      },
      {
      id:24,
      name:'Philosophy',
      },
      {
      id:25,
      name:'International',
      },
      {
      id:26,
      name:'History',
      },
      {
      id:27,
      name:'Education',
      },
      {
      id:28,
      name:'Relationship',
      },
      {
      id:29,
      name:'Self improvement',
      },
      {
      id:30,
      name:'Family',
      }
  ]
