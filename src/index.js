import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import { getAllActivities, getAllRoutines, getUser } from './api/api';
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Header, Register, Login, Activities, Routines, CreateActivity, SingleRoutine } from './components/index'

const App = () => {
const [token, setToken]= useState(localStorage.getItem('token') || '');
const [activities, setActivities] = useState([]);
const [routines, setRoutines] = useState([]);
const [userData, setUserData] = useState([]);
const [submit, setSubmit] = useState(false)

useEffect(() => {
  const getRoutines = async () => {
    const routinesFromAPI = await getAllRoutines();
    setRoutines(routinesFromAPI);
    setSubmit(false)
  }
  getRoutines();
}, [submit]);


useEffect(() => {
  const getActivities = async () => {
    const activitiesFromAPI = await getAllActivities();
    setActivities(activitiesFromAPI);
    setSubmit(false)
  };
  getActivities();
}, [submit]);


useEffect(() => {
  const getAllUsers = async () => {
    const usersFromAPI = await getUser(token);
    setUserData(usersFromAPI);
  }
  if (token) {
    getAllUsers()
  } else {null}
}, [token])

  return (
    <main>
    <Header setToken={setToken} token={token}/>
    
    <Route path='/activities/create'>
      <CreateActivity setSubmit={setSubmit} token={token}/>
    </Route>

    <Route exact path='/activities'>
    <Activities token={token} activities={activities}/>
    </Route>

    <Route path='/routines/:id'>
      <SingleRoutine routines={routines}/>
    </Route>
    
    <Route path='/routines/create'>
     <div>BRUH</div>
    </Route>
    
    <Route exact path='/routines'>
    <Routines token={token} routines={routines}/>
    </Route>
     
    <Route  path='/register'>
    <Register setToken={setToken}/>
    </Route>

    <Route  path='/login'>
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