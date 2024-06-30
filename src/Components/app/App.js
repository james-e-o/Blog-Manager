import './App.css';
import { createBrowserRouter, RouterProvider} from 'react-router-dom';
import React,{createContext, lazy, Suspense} from 'react';

// route imports
const Home = lazy(()=>import('../Home/home'))
// const Signlayout = lazy(()=>import('../../Layouts/signlayout'))
import LoggedIn from '../../Layouts/LoggedLayout'
import Corelayout from '../../Layouts/CoreLayout';
import Signlayout from '../../Layouts/signlayout';

// page imports
import {Sign, Signup, Signin} from '../../sign'
const Notfound = lazy(()=>import('../Errors/Notfound'))
const Feeds = lazy(()=>import('../dashboards/feed/feeds'))
const About = lazy(()=>import('../about/About'))
const NewContent = lazy(()=>import('../dashboards/dashboard-components/new-content/new-content'))
const Bookmarked = lazy(()=>import('../dashboards/dashboard-components/bookmarked/bookmarked'))
const Niches = lazy(()=>import('../dashboards/dashboard-components/niche/niche'))
const Explore = lazy(()=>import('../dashboards/dashboard-components/explore/explore'))
const Write = lazy(()=>import('../dashboards/dashboard-components/write/write'))
const Notifications = lazy(()=>import('../dashboards/dashboard-components/notifications/notifications'))
const HomeExplore = lazy(()=>import('../Home/explore/HomeExplore'))
const Reading = lazy(()=>import('../read/reading'))
const Settings = lazy(()=>import('../dashboards/settings/settings'))
const Chat = lazy(()=>import('../dashboards/chats/chat'))
const MyProfile = lazy(()=>import('../dashboards/myProfile/MyProfile'))
//actions
import { signupValidate,loginValidation } from '../../sign';


//context export
export const screenWidth = createContext('')

const Loading = ()=>{
  return(
    <div className='loading'>
      <p className="dot-slateblue"></p>
      <p className="dot-turquoise"></p>
      <p className="dot-orange"></p>
    </div>
  )
}

const router = createBrowserRouter([
  {
    path:'/',
    element:<Corelayout />,
    children:[
        {index:true, element:<Home/>},
        {
          path:'about',
          element:<About/>,
        },
        {
          path:'explore',
          element:<HomeExplore/>,
        },
        {
          path:'sign', 
          element:<Signlayout/>,
          children:[
            {index:true, element:<Sign/>},
            {path:'login',element:<Signin/>, action : loginValidation},
            {path:'signup',element:<Signup/>, action : signupValidate}             
          ]
        },
        {
          path:'home',
          element:<LoggedIn/>,
          children: [
            {index:true, element:<Feeds/>},
            {path:"explore", element:<Explore/>},
            {path:"write", element:<Write/>,},
            {path:"notifications", element:<Notifications/> },
            {path:"chats", element:<Chat /> },
            {path:"settings", element:<Settings /> },
            {path:"niche", element:<Niches/>},
            {path:"profile", element:<MyProfile/>},
            {path:"bookmarks", element:<Bookmarked/>},
          ]
        },
        {
          path:"new-content",
          element:<NewContent/>
        },
        {
          path:"article",
          element:<Reading/>
        },
        {
          path:"*",
          element:<Notfound/>
        }
    ]
  }
])

function App() {
  return (
        <Suspense fallback={<Loading />} >
            <RouterProvider router={router}/>
        </Suspense>
  );
}

export default App;






