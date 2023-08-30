import './App.css';
import Main from './main';
import Header from './header';
import Footer from './footer';
import React, { useState,useEffect, Children } from 'react';
import { Route, Router, createBrowserRouter, RouterProvider, Routes} from 'react-router-dom';
// import Sign from './sign';
import {Sign, Signup, Signin} from './sign'

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
        path:'/signup',
        element:<Signup/>
      },
      {
        path:'/login',
        element:<Signin/>
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




