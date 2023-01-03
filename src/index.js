import React, { useState, useEffect  } from 'react';
import ReactDOM from 'react-dom/client';
import { getAllActivities, getAllRoutines, getUser, getUserRoutines, } from './api/api';
import { BrowserRouter as Router, Route, useParams} from "react-router-dom";
import { Header, Register, Login, Activities, Routines, CreateActivity, CreateRoutine, SingleRoutine, MyRoutines, } from './components/index'

const App = () => {
const [token, setToken]= useState(localStorage.getItem('token') || '');
const [activities, setActivities] = useState([]);
const [routines, setRoutines] = useState([]);
const [user, setUser ] = useState([])
const [useRoutines, setUseRoutines] = useState([]);
const [submit, setSubmit] = useState(false)
const { id } = useParams();
console.log("ID IN INDEX", id)
useEffect(() => {
  console.log("I RAN BRO")
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
    const userRoutines = await getUserRoutines({token: token, username: usersFromAPI.username})
    setUser(usersFromAPI)
    setUseRoutines(userRoutines);
  }
  if (token) {
    getAllUsers()
  } else {null}
}, [token, submit])

  return (
    <main>
    <Header setToken={setToken} token={token}/>
    
    <Route path='/activities/create'>
    <CreateActivity setSubmit={setSubmit} token={token}/>
    </Route>

    <Route exact path='/activities'>
    <Activities token={token} activities={activities}/>
    </Route>

    <Route exact path = '/myRoutines'>
    <MyRoutines token={token} setSubmit={setSubmit} useRoutines={useRoutines}/>
    </Route>
    
    <Route path='/routines/:id'>
      <SingleRoutine setSubmit={setSubmit}activities={activities} user={user} token={token} routines={routines}/>
    </Route>
    
    <Route path='/createRoutine'>
     <CreateRoutine setSubmit={setSubmit} token={token}/>
    </Route>
    
    <Route exact path='/routines'>
    <Routines token={token} routines={routines}/>
    </Route>
     
    <Route path='/register'>
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