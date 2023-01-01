import React from 'react';
import { useParams, useHistory } from 'react-router-dom';
import {ActivityItem} from './index'

const SingleRoutine = ({ routines }) => {
    const { id } = useParams();
    
    const [filteredRoutines] = routines.filter((routine) => {
        const particularRoutine = routine.id == id
        return particularRoutine;
    })
    console.log(filteredRoutines)
    const history = useHistory()
    return (
        <div className='singleRoutineOuter'>
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