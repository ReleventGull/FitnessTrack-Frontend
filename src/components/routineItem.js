import React from "react";
import {Link} from 'react-router-dom'


const RoutineItem = ({routine, children}) => {
        return(
            <div key={routine.id} className='routineCard'>
                    <h2 className='routineHeader'>{routine.creatorName}'s routine: {routine.name}</h2>
                    <h3 className='goal'>{routine.goal}</h3>
                    {children}
            </div>
        )
   
}

export default RoutineItem