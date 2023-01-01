import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import {attachActivityToRoutine} from '../api/api'
import {ActivityItem} from './index'

const SingleRoutine = ({ routines, token, user, activities, setSubmit}) => {
    const [count, setCount] = useState('')
    const [duration, setDuration] = useState('')
    const [selectedActivity, setselectedActivity] = useState('')
    const { id } = useParams();

    const [filteredRoutines] = routines.filter((routine) => {
        const particularRoutine = routine.id == id
        return particularRoutine;
    })

const handleSubmit = async(event) => {
     event.preventDefault()
     console.log('Duration',duration)
     console.log('Counter', count)
     console.log('Id', selectedActivity)

     const result =await attachActivityToRoutine({
        id: id,
        activityId: selectedActivity,
        count: count,
        duration: duration,
        token: token
     })
     setSubmit(true)
     console.log(result)
     setselectedActivity('none')
}
    return (
        <div className='singleRoutineOuter'>
            {user ? user.id === filteredRoutines.creatorId ? 
            
            <form onSubmit={handleSubmit}>
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
           
            
            <div className='singleRoutineInner'>
                <h1 className='routineHeader'>Routine: {filteredRoutines.name}</h1>
                <h2 className='goal'>Goal: {filteredRoutines.goal}</h2>
            </div>
            {filteredRoutines.activities.length > 0 ?
            <div className="activities-container">
                {filteredRoutines.activities.map(activity =>
                    <div className="activities-container">
                    <ActivityItem activity={activity}>
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