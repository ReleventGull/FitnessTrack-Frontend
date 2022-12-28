import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import { getAllActivities } from './api/api';
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Header, Register, Login, Activities, Routines } from './components/index'

const App = () => {
const [token, setToken]= useState(localStorage.getItem('token') || '');
const [activities, setActivities] = useState([]);

useEffect(() => {
  const getActivities = async () => {
    const activitiesFromAPI = await getAllActivities();
    setActivities(activitiesFromAPI);
  };
  getActivities();
}, []);

  return (
    <main>
    <Header setToken={setToken} token={token}/>
    
    
    <Route exact path='/activities'>
    <Activities activities={activities}/>
    </Route>

    <Route exact path='/Routines'>
    <Routines />
    </Route>
     
    <Route exact path='/register'>
    <Register setToken={setToken}/>
    </Route>

    <Route exact path='/login'>
    <Login setToken={setToken}/>
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