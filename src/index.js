import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import {Header, Register, Login} from './components/index'
const App = () => {
  return (
    
    <main>
    <Header />
    

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