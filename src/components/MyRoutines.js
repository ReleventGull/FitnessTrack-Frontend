import React from "react";
import {Link} from 'react-router-dom'
const MyRoutines = ({useRoutines}) => {
    return (
        <div className='routinesPage'>
        <div className='routinesContainer'>
            {useRoutines.map((routine) => {
                return(
                    <div key={routine.id} className='routineCard'>
                            <h2 className='routineHeader'>{routine.creatorName}'s routine: {routine.name}</h2>
                            <h3 className='goal'>{routine.goal}</h3>
                            <Link to={`/routines/${routine.id}`} className="viewRoutine">View Routine</Link>
                            <button className="deleteRoutine">Delete</button>
                    </div>
                )
            })}
        </div>
    </div>
    );
}

export default MyRoutines;