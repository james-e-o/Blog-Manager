import React, { createContext, useContext, useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'

import { screenWidth } from '../../app/App'
import { Plus, Menu, Notify, RoundMenu, Arrow_B, Bookmark2, Menu_icon } from '../../svg'
import Logo from '../../logo/logo'
import CL_logo from "../../contents/images/category-pirates-logo.png"
import profileImg from "./gemini-profile.jpeg"
import Gl_ai from "../../contents/images/glai.png"
import Content_img from "../../contents/images/category-pirates.png"
import User from "../../contents/images/dummy.jpg"
import Content_img2 from "../../contents/images/glai-hackathon.jpeg"
import dataClean from "./CL_data-cleaning.jpeg"
import Content_img3 from "./Content_img3.jpeg"
import Content_img4 from "./Content_img4.jpeg"



const Publications = ()=>{
  return(
    <div className='publication-container'>
      {feeds.map(feed => (
          <Link key={feed.id} to={'/article'}><div className='publication-feed'>
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
  )
}


const Posts = ()=>{
  return(
    <div className='post-container'>
      <div className="following">
        <figure></figure>
      </div>
      {feeds.map(feed => (
        <Link to={'/articles'}><div key={feed.id} className='feed'>
          <div className="feed-head">
            <div className="content-author">
              <figure><img src={feed.author.photo!== ""? feed.author.photo:User} /></figure>
              <p className='author-name'>{feed.author.name}</p>
            </div>
            <p className="date-published">{`${feed.date.day} ${feed.date.month},${feed.date.year}`}</p>
          </div>
          <div className="feed-content">
            <div className="content-texts">
                <p className='content-title'>{feed.content.title}</p>
            </div>
            <div className="content-image"><img src={feed.content.image}/></div>
          </div>
          <div className="feed-foot"> 
            <div className="engagement-wrap">
              <p className="engagements comments">{comment} <span>{feed.engagements.comments}</span></p>
              <p className="engagements comments">{like} <span>{feed.engagements.likes}</span></p>
              <p className="engagements bookmarks">{bookmark} <span>{feed.engagements.bookmarked}</span></p>
            </div>            
          </div>
        </div></Link>
      ))}
  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolor illum deserunt amet inventore perspiciatis reiciendis totam nemo facilis impedit. Aspernatur dicta molestias beatae vero ullam. Voluptatum odit dolorem animi nemo.
    </div>
  )
}

// const Featured = ()=>{
//   return(
//     <>
//       {feeds.map(feed => (
//         <Link to={'/articles'}><div key={feed.id} className='feed'>
//           <div className="feed-head">
//             <div className="content-author">
//               <figure><img src={feed.author.photo!== ""? feed.author.photo:User} /></figure>
//               <p className='author-name'>{feed.author.name}</p>
//             </div>
//             <p className="date-published">{`${feed.date.day} ${feed.date.month},${feed.date.year}`}</p>
//           </div>
//           <div className="feed-content">
//             <div className="content-texts">
//                 <p className='content-title'>{feed.content.title}</p>
//             </div>
//             <div className="content-image"><img src={feed.content.image}/></div>
//           </div>
//           <div className="feed-foot"> 
//             <div className="engagement-wrap">
//               <p className="engagements comments">{comment} <span>{feed.engagements.comments}</span></p>
//               <p className="engagements comments">{like} <span>{feed.engagements.likes}</span></p>
//               <p className="engagements bookmarks">{bookmark} <span>{feed.engagements.bookmarked}</span></p>
//             </div>            
//           </div>
//         </div></Link>
//       ))}
//     </>
//   )
// }





const Feeds = () => {
  const screen = useContext(screenWidth)
  const [activeFeed, setActiveFeed] = useState('publications')

  return (
    //  MOBILE
    <div className="feeds">
      <p className="sponsored">Sponsored</p>
      <div className="adverts">
        <div className="adverts-scroll">
          <div className="adverts-wrap">
            <div className="advert">
              <figure><img src={CL_logo} alt="" /></figure>
              <p className="pub-title"></p>
              <p className="pub-author"></p>
              <div className="pub-foot"></div>
            </div>
            <div className="advert">
              
            </div>
            <div className="advert">
              
            </div>
            <div className="advert">
              
            </div>
            <div className="advert">
              
            </div>
          </div>
        </div>
      </div>
      <div className="feed-header">
          <p className={activeFeed === 'publications'? 'active feed-type':'feed-type'} onClick={()=>{setActiveFeed('publications')}} >Publications</p>
          <p className={activeFeed === 'posts'? 'active feed-type':'feed-type'} onClick={()=>{setActiveFeed('posts')}} >Posts</p>
          {/* <p className={activeFeed === 'podcasts'? 'active feed-type':'feed-type'} onClick={()=>{setActiveFeed('podcasts')}} >Podcasts</p> */}
          {/* <Link to={'explore'}><p className="search">{search}</p></Link> */}
      </div>
      <div className="feed-wrap">
            { 
              activeFeed === 'publications'? <Publications/>:
              activeFeed === 'posts'? <Posts/>:""
              // activeFeed === 'podcasts'? <Featured/>:""
            }
      </div>
    </div> 
  )
}

export default Feeds




export const feeds = [
{
  date:{
    day:4,
    month:"June",
    year:2024
  },
  author:{
    photo:CL_logo,
    name:"CATEGORY PIRATES",
  },
  content:{
    title:"The Value Of Your Value.",
    subText:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore sit voluptatem quasi totam.",
    image:Content_img,
  },
  engagements:{
    likes:144,
    comments:25,
    bookmarked:33,
  },
  id:1
},
{
  date:{
    day:5,
    month:"January",
    year:2024
  },
  author:{
    photo:"",
    name:"NOSA FAVOUR",
  },
  content:{
    title:"Essential Data Cleaning Techniques for Accurate Analysis.",
    subText:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore sit voluptatem quasi totam.",
    image:dataClean,
  },
  engagements:{
    likes:106,
    comments:35,
    bookmarked:52,
  },
  id:2
},
{
  date:{
    day:9,
    month:"September",
    year:2023
  },
  author:{
    photo:CL_logo,
    name:"CATEGORY PIRATES",
  },
  content:{
    title:"The Big Strategy Lie: Why Strategy Is Not As Complex, Hard, Or Intellectual As You've Been Taught.",
    subText:"Simplicity scales. Complexity fails.",
    image:Content_img4,
  },
  engagements:{
    likes:71,
    comments:28,
    bookmarked:22,
  },
  id:3
},
{
  date:{
    day:6,
    month:"October",
    year:2023
  },
  author:{
    photo:Gl_ai,
    name:"GETLINKED AI",
  },
  content:{
    title:"Hackathon 1.0.",
    subText:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore sit voluptatem quasi totam.",
    image:Content_img2,
  },
  engagements:{
    likes:124,
    comments:25,
    bookmarked:12,
  },
  id:4
},

{
  date:{
    day:6,
    month:"October",
    year:2023
  },
  author:{
    photo:Gl_ai,
    name:"GETLINKED AI",
  },
  content:{
    title:"Recruitment Metrics: Key Performance Indicators Tracked by Getlinked.ai.",
    subText:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore sit voluptatem quasi totam.",
    image:Content_img3,
  },
  engagements:{
    likes:144,
    comments:25,
    bookmarked:52,
  },
  id:5
},

{
  date:{
    day:12,
    month:"January",
    year:2024
  },
  author:{
    photo:CL_logo,
    name:"CATEGORY PIRATES",
  },
  content:{
    title:"The Value Of Your Value.",
    subText:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore sit voluptatem quasi totam.",
    image:Content_img,
  },
  engagements:{
    likes:144,
    comments:25,
    bookmarked:52,
  },
  id:6
},

]

const notify =  <svg xmlns="http://www.w3.org/2000/svg" height="22px" viewBox="0 -960 960 960" width="22px"><path d="M160-200v-80h80v-280q0-83 50-147.5T420-792v-28q0-25 17.5-42.5T480-880q25 0 42.5 17.5T540-820v28q80 20 130 84.5T720-560v280h80v80H160Zm320-300Zm0 420q-33 0-56.5-23.5T400-160h160q0 33-23.5 56.5T480-80ZM320-280h320v-280q0-66-47-113t-113-47q-66 0-113 47t-47 113v280Z"/></svg>
const comment =  <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 50 50" width="17px" height="17px"><path d="M 25 4.0625 C 12.414063 4.0625 2.0625 12.925781 2.0625 24 C 2.0625 30.425781 5.625 36.09375 11 39.71875 C 10.992188 39.933594 11 40.265625 10.71875 41.3125 C 10.371094 42.605469 9.683594 44.4375 8.25 46.46875 L 7.21875 47.90625 L 9 47.9375 C 15.175781 47.964844 18.753906 43.90625 19.3125 43.25 C 21.136719 43.65625 23.035156 43.9375 25 43.9375 C 37.582031 43.9375 47.9375 35.074219 47.9375 24 C 47.9375 12.925781 37.582031 4.0625 25 4.0625 Z M 25 5.9375 C 36.714844 5.9375 46.0625 14.089844 46.0625 24 C 46.0625 33.910156 36.714844 42.0625 25 42.0625 C 22.996094 42.0625 21.050781 41.820313 19.21875 41.375 L 18.65625 41.25 L 18.28125 41.71875 C 18.28125 41.71875 15.390625 44.976563 10.78125 45.75 C 11.613281 44.257813 12.246094 42.871094 12.53125 41.8125 C 12.929688 40.332031 12.9375 39.3125 12.9375 39.3125 L 12.9375 38.8125 L 12.5 38.53125 C 7.273438 35.21875 3.9375 29.941406 3.9375 24 C 3.9375 14.089844 13.28125 5.9375 25 5.9375 Z"/></svg>

const bookmark = <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 50 50" width="17px" height="17px"><path d="M 5 5 C 2.25 5 0 7.25 0 10 L 0 39 C 0 41.75 2.25 44 5 44 L 21 44 C 22.664063 44 24 45.351563 24 47 C 24 47.308594 24.144531 47.601563 24.386719 47.789063 C 24.632813 47.980469 24.949219 48.046875 25.25 47.96875 C 25.511719 47.902344 25.738281 47.734375 25.875 47.5 C 25.960938 47.347656 26.003906 47.175781 26 47 C 26 45.351563 27.335938 44 29 44 L 45 44 C 47.75 44 50 41.75 50 39 L 50 10 C 50 7.25 47.75 5 45 5 L 29 5 C 27.367188 5 25.914063 5.8125 25 7.03125 C 24.085938 5.8125 22.632813 5 21 5 Z M 5 7 L 21 7 C 22.667969 7 24 8.332031 24 10 L 24 43.125 C 23.152344 42.464844 22.148438 42 21 42 L 5 42 C 3.332031 42 2 40.667969 2 39 L 2 10 C 2 8.332031 3.332031 7 5 7 Z M 29 7 L 45 7 C 46.667969 7 48 8.332031 48 10 L 48 39 C 48 40.667969 46.667969 42 45 42 L 29 42 C 27.851563 42 26.847656 42.464844 26 43.125 L 26 10 C 26 8.332031 27.332031 7 29 7 Z"/></svg>

const like = <svg fill="orange" height="17px" width="17px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg"viewBox="0 0 512 512" ><g><g><g><path d="M495.736,290.773C509.397,282.317,512,269.397,512,260.796c0-22.4-18.253-47.462-42.667-47.462H349.918c-4.284-0.051-25.651-1.51-25.651-25.6c0-4.71-3.814-8.533-8.533-8.533s-8.533,3.823-8.533,8.533c0,33.749,27.913,42.667,42.667,42.667h119.467c14.182,0,25.6,16.631,25.6,30.396c0,4.437,0,17.946-26.53,20.855c-4.506,0.495-7.834,4.42-7.586,8.951c0.239,4.523,3.985,8.064,8.516,8.064c14.114,0,25.6,11.486,25.6,25.6s-11.486,25.6-25.6,25.6h-17.067c-4.719,0-8.533,3.823-8.533,8.533s3.814,8.533,8.533,8.533c14.114,0,25.6,11.486,25.6,25.6s-11.486,25.6-25.6,25.6h-25.6c-4.719,0-8.533,3.823-8.533,8.533s3.814,8.533,8.533,8.533c8.934,0,17.067,8.132,17.067,17.067c0,8.61-8.448,17.067-17.067,17.067h-128c-35.627,0-48.444-7.074-63.292-15.258c-12.553-6.921-26.786-14.763-54.963-18.79c-4.668-0.674-8.994,2.577-9.66,7.236c-0.666,4.668,2.569,8.994,7.236,9.66c25.105,3.584,37.325,10.325,49.152,16.845c15.497,8.542,31.505,17.374,71.526,17.374h128c17.869,0,34.133-16.273,34.133-34.133c0-6.229-1.775-12.134-4.83-17.229c21.794-1.877,38.963-20.224,38.963-42.505c0-10.829-4.062-20.736-10.735-28.271C500.42,358.212,512,342.571,512,324.267C512,310.699,505.634,298.59,495.736,290.773z"/><path d="M76.8,443.733c9.412,0,17.067-7.654,17.067-17.067S86.212,409.6,76.8,409.6c-9.412,0-17.067,7.654-17.067,17.067S67.388,443.733,76.8,443.733z"/><path d="M179.2,247.467c25.353,0,57.429-28.297,74.3-45.167c36.634-36.634,36.634-82.167,36.634-151.1c0-5.342,3.191-8.533,8.533-8.533c29.508,0,42.667,13.158,42.667,42.667v102.4c0,4.71,3.814,8.533,8.533,8.533s8.533-3.823,8.533-8.533v-102.4c0-39.083-20.659-59.733-59.733-59.733c-14.831,0-25.6,10.769-25.6,25.6c0,66.978,0,107.401-31.633,139.034C216.661,215.006,192.811,230.4,179.2,230.4c-4.719,0-8.533,3.823-8.533,8.533S174.481,247.467,179.2,247.467z"/><path d="M145.067,213.333H8.533c-4.719,0-8.533,3.823-8.533,8.533v256c0,4.71,3.814,8.533,8.533,8.533h136.533c4.719,0,8.533-3.823,8.533-8.533v-256C153.6,217.156,149.786,213.333,145.067,213.333z M136.533,469.333H17.067V230.4h119.467V469.333z"/></g></g></g></svg>

const search = <svg xmlns="http://www.w3.org/2000/svg" fill='slateblue'  viewBox="0 0 64 64" width="23px" height="23px"><path d="M 27 9 C 17.075 9 9 17.075 9 27 C 9 36.925 17.075 45 27 45 C 31.129213 45 34.9263 43.587367 37.966797 41.240234 L 51.048828 54.322266 C 51.952828 55.226266 53.418266 55.226266 54.322266 54.322266 C 55.226266 53.418266 55.226266 51.952828 54.322266 51.048828 L 41.240234 37.966797 C 43.587367 34.9263 45 31.129213 45 27 C 45 17.075 36.925 9 27 9 z M 27 13 C 34.719 13 41 19.281 41 27 C 41 34.719 34.719 41 27 41 C 19.281 41 13 34.719 13 27 C 13 19.281 19.281 13 27 13 z"/></svg>

const addBookmark = <svg width="17" height="17" viewBox="0 0 24 24" fill="none"><path d="M17.5 1.25a.5.5 0 0 1 1 0v2.5H21a.5.5 0 0 1 0 1h-2.5v2.5a.5.5 0 0 1-1 0v-2.5H15a.5.5 0 0 1 0-1h2.5v-2.5zm-11 4.5a1 1 0 0 1 1-1H11a.5.5 0 0 0 0-1H7.5a2 2 0 0 0-2 2v14a.5.5 0 0 0 .8.4l5.7-4.4 5.7 4.4a.5.5 0 0 0 .8-.4v-8.5a.5.5 0 0 0-1 0v7.48l-5.2-4a.5.5 0 0 0-.6 0l-5.2 4V5.75z" ></path></svg>