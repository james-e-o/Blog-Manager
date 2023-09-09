import './App.css';
import Main from '../main/main';
import Header from '../header/header';
import Footer from '../footer/footer';
import { createBrowserRouter, RouterProvider} from 'react-router-dom';
import {createContext} from 'react';

// route imports
import Corelayout from '../../Layouts/corelayout';
import Signlayout from '../../Layouts/signlayout';
import LoggedIn from '../../Layouts/loggedinLayout';

// page imports
import {Sign, Signup, Signin} from '../../sign'
import Notfound from '../Errors/Notfound';
import UserDashboard from '../dashboards/UserDashboard';

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
            {path:'login',element:<Signin/>},
            {path:'signup',element:<Signup/>}           
          ]
        },
        {
          path:'loggedin',
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




