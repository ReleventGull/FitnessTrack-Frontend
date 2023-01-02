import React from "react";
import {Link} from 'react-router-dom'
import {deleteUserRoutine} from '../api/api'
const MyRoutines = ({useRoutines, setSubmit, token}) => {



    const handleSubmit = async(id) => {
        console.log(id)
        const deleteRoutine = await deleteUserRoutine({token:token, id:id})
        setSubmit(true)
    }
    return (
        <div className='routinesPage'>
        <div className='routinesContainer'>
            {useRoutines.map((routine) => {
                return(
                    <div value={routine.id} key={routine.id} className='routineCard'>
                            <h2 className='routineHeader'>{routine.creatorName}'s routine: {routine.name}</h2>
                            <h3 className='goal'>{routine.goal}</h3>
                            <Link to={`/routines/${routine.id}`} className="viewRoutine">View Routine</Link>
                            <button onClick={() => handleSubmit(routine.id)} className="deleteRoutine">Delete</button>
                    </div>
                )
            })}
        </div>
    </div>
    );
}

export default MyRoutines;