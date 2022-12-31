import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';


const SingleRoutine = ({ routines }) => {
    console.log("Routines HERE:", routines)
    const { id } = useParams();
    console.log("ID:", id)

    const filteredRoutines = routines.filter((routine) => {
        const particularRoutine = routine.id == id
        return particularRoutine;
    })


    console.log("Filtered Routines:", filteredRoutines)

    return (
        <div className='routines-container'>
            <h1>{filteredRoutines[0].name}</h1>
        </div>
    )
}

export default SingleRoutine;