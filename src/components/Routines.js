import React from 'react';


const Routines = ({ routines }) => {
    return (
        <div className='routinescontainer'>
            <h1>Routines</h1>
            {routines.map((routine) => {
                return(
                    
                    <div className=''>
                        
                            <div>
                            <h2 className='routinecreater'>{routine.creatorName}'s routine: {routine.name}</h2>
                                <p className='goaltitle'>Goal</p>
                                <p className='goal'>{routine.goal}</p>
                                <p className='activitytitle'>Activities</p>
                                <p>activity name</p>
                                <p>description</p>
                                <p>duration or count</p>
                            </div>

                    </div>

                    
                )
            }) }
          
        </div>
    )

}

export default Routines;
