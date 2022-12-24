import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import {Header, Register} from './components/index'
const App = () => {
  return (
    
    <main>
    <Header />
    
    <Switch>
    <Route exact path='/register'>
    <Register/>
    </Route>
    </Switch>
    </main>
    
  )
}


const root = ReactDOM.createRoot(document.getElementById('app'))

root.render(
  <Router>
    <App />
  </Router>

);