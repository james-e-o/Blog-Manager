import './App.css';
import Main from '../main/main';
import Header from '../header/header';
import Footer from '../footer/footer';
import { createBrowserRouter, RouterProvider} from 'react-router-dom';
import {createContext} from 'react';

// route imports
import Corelayout from '../../Layouts/corelayout';
import Signlayout from '../../Layouts/signlayout';
import LoggedIn from '../../Layouts/LoggedLayout';

// page imports
import {Sign, Signup, Signin} from '../../sign'
import Notfound from '../Errors/Notfound';
import UserDashboard from '../dashboards/UserDashboard';

//actions
import { signupValidate,loginValidation } from '../../sign';

//context export
export const screenWidth = createContext('')

const Home = () => {  
  return (
    <div>
      <Header />
      <Main />
      <Footer />
    </div>
  )
}
const router = createBrowserRouter([
  {
    path:'/',
    element: <Corelayout />,
    children:[
        {index:true, element:<Home/>},
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
            {index:true, element:<UserDashboard/>}
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
        <RouterProvider router={router}/>
  );
}

export default App;






