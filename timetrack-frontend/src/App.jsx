import { useState } from 'react';
import Home from './Pages/Home/Home'
import Analytics from './Pages/Analytics/Analytics';
import Login from './Pages/Login/Login';
import SignUp from './Pages/SignUp/SignUp';
import './App.css';
import { HashRouter as Router, Routes, Route  } from 'react-router-dom';  //NOTE - all 3 of these are react components that we are importing!


//HashRouter - component that wraps our entire application and creates the routing environment
//Routes - component where we specify all potential routes (pages)
//Route - component where we specify individual page routes

//ROUTE COMPONENT - 2 props
//Path - specifies URL path to component (EX '/login - URL GET request that we want to handle essentially...)
//Element - page you want to render at that URL path (React Component of that page essentially!)


function App() {

  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/user/login' element={<Login/>}/>
        <Route path='/user/sign-up' element={<SignUp/>}/>
        <Route path='/analytics' element={<Analytics/>}/>
      </Routes>
    </Router>

  );
 
}

export default App
