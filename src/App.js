import './App.css';
import Main from './main';
import Header from './header';
import Footer from './footer';

import React, { useState,useEffect } from 'react';


function App() {

  return (
    <div className="App">
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
