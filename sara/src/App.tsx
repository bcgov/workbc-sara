import React from 'react';
import './App.scss';
import Footer from './footer';
import Header from './header';
import Home from './home';



function App(){
  return (
    <div className="App d-flex flex-column min-vh-100">
      <Header/>
      <Home/>
      <Footer/>
    </div>
  );
}

export default App;
