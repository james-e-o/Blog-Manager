import './App.css';
import Main from './main';
import Header from './header';
import Footer from './footer';
import React, { useState,useEffect, Children } from 'react';
import { Route, Router, createBrowserRouter, RouterProvider, Routes} from 'react-router-dom';
import Sign from './sign';

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
    element: <Home/>,
  },
  {
    path:'/sign',
    element:<Sign/>,
    Children: [
      {
        path:'signup',
        element:<Sign/>
      },
      {
        path:'login',
        element:<Sign/>
      }
    ]
  }
])

function App() {
  return (
    <div className="App">
      <RouterProvider router={router}/>
    </div>
  );
}

export default App;




