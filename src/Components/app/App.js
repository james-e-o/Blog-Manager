import './App.css';
import Main from '../main/main';
import Header from '../header/header';
import Footer from '../footer/footer';
import { createBrowserRouter, RouterProvider} from 'react-router-dom';
import {createContext, useEffect, useState} from 'react';

// route imports
import Signlayout from '../../Layouts/signlayout';
import LoggedIn from '../../Layouts/LoggedLayout';

// page imports
import {Sign, Signup, Signin} from '../../sign'
import Notfound from '../Errors/Notfound';
import UserDashboard from '../dashboards/UserDashboard';
import About from '../about/About';
import NewContent from '../dashboards/dashboard-components/new-content/new-content';

//actions
import { signupValidate,loginValidation } from '../../sign';


//context export
export const screenWidth = createContext('')

const Home = () => { 
  const [innerWidth, setInnerWidth] = useState(window.innerWidth)
  useEffect(() => {
    window.onresize = () => {
      setInnerWidth(window.innerWidth)
    }
  }) 
  return (
    <screenWidth.Provider value={innerWidth}>
      <div>
        <Header />
        <Main />
        <Footer />
      </div>
    </screenWidth.Provider>
  )
}
const router = createBrowserRouter([
        {
          path:'/',
          element:<Home/>,
        },
        {
          path:'about',
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
            {path:"new", element:<NewContent/>}
          ]
        },
        {
          path:"*",
          element:<Notfound/>
        }
])

function App() {
  return (
        <RouterProvider router={router}/>
  );
}

export default App;






