import React, { useCallback, useState } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import {Header, Register, Login, Activities, Routines} from './components/index'
const App = () => {
const [token, setToken]= useState(localStorage.getItem('token') || '')


  
  return (
    <main>
    <Header />
    
    
    <Route exact path='/activities'>
    <Activities />
    </Route>

    <Route exact path='/Routines'>
    <Routines />
    </Route>
     
    <Route exact path='/register'>
    <Register/>
    </Route>

    <Route exact path='/login'>
    <Login />
    </Route>


    </main>
    
  )
}


const root = ReactDOM.createRoot(document.getElementById('app'))

root.render(
  <Router>
    <App />
  </Router>

);