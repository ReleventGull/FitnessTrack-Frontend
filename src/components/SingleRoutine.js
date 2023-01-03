import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import {attachActivityToRoutine, deleteActivityFromRoutine, updateRoutine} from '../api/api'
import {ActivityItem} from './index'


const SingleRoutine = ({ routines, token, user, activities, setSubmit}) => {
    const [count, setCount] = useState('')
    const [duration, setDuration] = useState('')
    const [selectedActivity, setselectedActivity] = useState('')
    const [userEditing, setUserEditing] = useState(false)
    const [addAcitivtyerror, setAddActivityError] = useState('')
    const [updateName, setupdateName] = useState('')
    const [updateGoal, setUpdateGoal] = useState('')

    const { id } = useParams();

    const [filteredRoutines] = routines.filter((routine) => {
        const particularRoutine = routine.id == id
        
        return particularRoutine;
    })
    console.log(filteredRoutines)
const updateCurrentRoutine = async(event) => {
event.preventDefault()
const updatedRoutined = updateRoutine({token: token, name:updateName, goal:updateGoal, id:id})
console.log(updatedRoutined)
setSubmit(true)
}
const removeActivity = async(activity) => {
    const deletedActivity = await deleteActivityFromRoutine({token: token, id: activity.routineActivityId})
    setSubmit(true)
    }

const handleSubmit = async(event) => {
     event.preventDefault()
     const result =await attachActivityToRoutine({
        id: id,
        activityId: selectedActivity,
        count: count,
        duration: duration,
        token: token
     })
     if(result.error) {
        console.log(result)
        setAddActivityError('That activity is already added!')
     }else {
        setAddActivityError('')
        setSubmit(true)
     }
     
}
    return (
       
        <div className='singleRoutineOuter'>
            {user ? user.id === filteredRoutines.creatorId ? 
            
            <form onSubmit={handleSubmit}>
                <h2>Add Activity To Routine</h2>
            <select onChange={(event) => setselectedActivity(event.target.value)} placeholder='Add Activity to Routine'>
                <option value='none'>none</option>
            {activities.map(activity =>
                <option value={activity.id}>{activity.name}</option>
                )}
                
            </select>
                    <input value={count} type='number' onChange={(event) => setCount(event.target.value)} placeholder='count'></input>
                    <input value={duration} type='number'onChange={(event) => setDuration(event.target.value)}  placeholder='duration'></input>
                <button type="Submit">Submit!</button>
            </form>
            
            : null: null
            }
           
           <h2>{addAcitivtyerror}</h2>
            <div className='singleRoutineInner'>
                <h1 className='routineHeader'>Routine: {filteredRoutines.name}</h1>
                <h2 className='goal'>Goal: {filteredRoutines.goal}</h2>
            </div>
           {user ? user.id === filteredRoutines.creatorId ? userEditing ? 
        <form onSubmit={updateCurrentRoutine} className='updateRoutine'>
        <p>Name</p>   
        <input onChange={(event) => setupdateName(event.target.value)} value={updateName}></input>
        <p>Goal</p>   
        <input onChange={(event) => setUpdateGoal(event.target.value)} value={updateGoal}></input>
        <button>Update!</button>
        <button onClick={() => setUserEditing(false)}>Cancel</button>
          </form>
          : 
          <button onClick={() => setUserEditing(true)}>Update Routine</button>: null: null}
            
            
            {filteredRoutines.activities.length > 0 ?
            <div className="activities-container">
                {filteredRoutines.activities.map(activity =>
                    <div className="activities-container">
                    <ActivityItem 
                    activity={activity}
                    left={user ? user.id === filteredRoutines.creatorId ?  <button onClick={(event) => removeActivity(activity)} className='removeActivity'>Remove Activity</button>: null: null}
                    user={user}
                    filteredRoutines={filteredRoutines}
                    setSubmit={setSubmit}
                    token={token}
                    >
                    <p>Count: {activity.count}</p>
                    <p>Duration: {activity.duration}</p>
                    
                  
                    </ActivityItem>
                    </div>
                    )}
                </div>
                :
                <h2>There are no acitivites on this routine!</h2>
                }
        </div>
    )
}

export default SingleRoutine;