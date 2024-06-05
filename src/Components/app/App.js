import './App.css';
import { createBrowserRouter, RouterProvider} from 'react-router-dom';
import React,{createContext, lazy, Suspense} from 'react';

// route imports
const Home = lazy(()=>import('../Home/home'))
// const Signlayout = lazy(()=>import('../../Layouts/signlayout'))
const LoggedIn = lazy(()=>import('../../Layouts/LoggedLayout'))
import Corelayout from '../../Layouts/CoreLayout';
import Signlayout from '../../Layouts/signlayout';

// page imports
import {Sign, Signup, Signin} from '../../sign'
const Notfound = lazy(()=>import('../Errors/Notfound'))
const UserDashboard = lazy(()=>import('../dashboards/UserDashboard'))
const About = lazy(()=>import('../about/About'))
const NewContent = lazy(()=>import('../dashboards/dashboard-components/new-content/new-content'))
const Bookmarked = lazy(()=>import('../dashboards/dashboard-components/bookmarked/bookmarked'))
const Niche = lazy(()=>import('../dashboards/dashboard-components/niche/niche'))
// import NewContent from '../dashboards/dashboard-components/new-content/new-content';
// import Bookmarked from '../dashboards/dashboard-components/bookmarked/bookmarked';
// import Niche from '../dashboards/dashboard-components/niche/niche';

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
          element:<About/>,
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
          path:'dashboard',
          element:<LoggedIn/>,
          children: [
            {index:true, element:<UserDashboard/>},
            {path:"new", element:<NewContent/>},
            {path:"bookmarks", element:<Bookmarked/>},
            {path:"niche", element:<Niche/>}
          ]
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






