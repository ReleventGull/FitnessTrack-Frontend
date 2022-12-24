import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Link } from "react-router-dom";

const App = () => {
  return (
  <div className='bruh2'>
    <header>
      <nav  className='headerLinks'>
        <a>bUR</a>
    <Link>Home</Link>
    <Link>Activies</Link>
    <Link>MyRoutines</Link>
    <Link>Routines</Link>
    <Link>Login</Link>
    <Link>Registerrrr</Link>
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