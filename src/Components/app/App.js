import './App.css';
import Main from '../main/main';
import Header from '../header/header';
import Footer from '../footer/footer';
import { createBrowserRouter, RouterProvider} from 'react-router-dom';


// route imports
import Corelayout from '../../Layouts/corelayout';
import Signlayout from '../../Layouts/signlayout';
import LoggedIn from '../../Layouts/LoggedinLayout';


// page imports
import {Sign, Signup, Signin} from '../../sign'


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
          element:<LoggedIn/>
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



