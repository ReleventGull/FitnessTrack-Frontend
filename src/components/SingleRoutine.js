import React from 'react';
import { useParams } from 'react-router-dom';


const SingleRoutine = ({ routines }) => {
    const { id } = useParams();

    const filteredRoutines = routines.filter((routine) => {
        const particularRoutine = routine.id == id
        return particularRoutine;
    })

    return (
        <div className='singleRoutineOuter'>
            <div className='singleRoutineInner'>
                <h1 className='routineHeader'>Routine: {filteredRoutines[0].name}</h1>
                <h2 className='goal'>Goal: {filteredRoutines[0].goal}</h2>
            </div>
        </div>
    )
}

export default SingleRoutine;