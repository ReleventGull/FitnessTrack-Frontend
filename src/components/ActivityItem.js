import React, {useState} from 'react'
import {updateRoutineActivities} from '../api/api'

const ActivityItem = ({children, activity, left, token, user, filteredRoutines, setSubmit}) => {
        const [updateCount, setUpdateCount] = useState('')
        const [updateDuration, setUpdateDuration] = useState('')
        const [userEditingActivity, setuserEditingActivity] = useState(false)
        
        
const handleUpdateRoutineActivity = async(event) => {
        event.preventDefault()
        console.log(activity.routineActivityId)
        const updatedRoutineActivity = await updateRoutineActivities({
             id: activity.routineActivityId,
             token:token,
             count: updateCount,
             duration: updateDuration
        })
        if(updatedRoutineActivity.error){
                console.log("There was an error")
        }else {
                setSubmit(true)
        }
        }
        return (
                <>
            <div onClick={() => console.log(activity.id)} className="activity-card" key={activity.id}>
                    <h2>Activity</h2>
                    <p>{activity.name}</p>
                    <h2>Description</h2>
                    <p>{activity.description}</p>
                    {children}
                    {left}
            </div>
            { user ? user.id === filteredRoutines.creatorId ? userEditingActivity ?
            
                <form onSubmit={handleUpdateRoutineActivity} className='updateActivtyForm'>
                <p>Count</p>
                <input required value={updateCount} onChange={(event) => setUpdateCount(event.target.value)}></input>
                <p>Duartion</p>
                <input required value={updateDuration} onChange={(event) => setUpdateDuration(event.target.value)}></input>
                
                        <div>
                            <button>Update Activity</button>
                            <button onClick={() => setuserEditingActivity(false)}>Cancel</button>
                        </div>
                </form>:
                <button className='updateActivityButton' onClick={() => setuserEditingActivity(true)}>Update!</button>:
                null:
                null
                    }
            </>
        );
}

export default ActivityItem