import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Link } from "react-router-dom";

const App = () => {
  return (
  <div className='bruh2'>
    <header className='mainHeader'>
      <h3>Fitness Tracker</h3>
      <nav  className='headerLinks'>
    <Link>Home</Link>
    
    <Link>Activities</Link>
    
    <Link>MyRoutines</Link>
    
    <Link>Routines</Link>
    
    <Link>Login</Link>
    
    <Link>Register</Link>
    </nav>
    </header>
  </div>



  )
}


const root = ReactDOM.createRoot(document.getElementById('app'))

root.render(
  <BrowserRouter>
  <App />
  </BrowserRouter>

);