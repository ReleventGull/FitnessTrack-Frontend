import React from "react";
import { Link, useHistory} from "react-router-dom";


const Activities = ({ activities, token }) => {
    return (
    <div className='activitiesPage'>
        {token ? <Link to='/activities/create'className="createActivity">Create Activity</Link>: null}
        <div className="activities-container">
            {activities.map((activity) => {
                return (
                    <div className="activity-card" key={activity.id}>
                            <h2>Activity</h2>
                            <p>{activity.name}</p>
                            <h2>Description</h2>
                            <p>{activity.description}</p>
                    </div>
                );
            })}
        </div>
     </div>
    );
}

export default Activities;