import React from 'react';
import {Link} from 'react-router-dom'


const Routines = ({ routines, token }) => {
    return (
    <div className='routinesPage'>
        {token ? <Link to='/routines/create' className="createActivity">Create Routine</Link>: null}
        <div className='routinesContainer'>
            {routines.map((routine) => {
                return(
                    <div key={routine.id} className='routineCard'>
                            <h2 className='routineHeader'>{routine.creatorName}'s routine: {routine.name}</h2>
                                <h3 className='goal'>{routine.goal}</h3>         
                    </div>
                )
            }) }
        </div>
    </div>
    )

}

export default Routines;
