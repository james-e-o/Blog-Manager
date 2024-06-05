import React, { useState, useEffect, useRef, lazy, Suspense} from 'react'
import Header from './header/header'
import Main from './main/main'
import Footer from './footer/footer'
const Home = () => { 
    return (
        <div className='home'>
          <Header />
          <Main />
          <Footer />
        </div>
    )
  }

  export default Home