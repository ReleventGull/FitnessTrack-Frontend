import React from "react";
import { Link, useHistory} from "react-router-dom";
import {ActivityItem} from './index'

const Activities = ({ activities, token }) => {
    return (
    <div className='activitiesPage'>
        {token ? <Link to='/activities/create'className="createActivity">Create Activity</Link>: null}
        <div className="activities-container">
        {activities.map(activity =>
            <ActivityItem 
            activity={activity}>
            <div>Bruh</div>    
            </ActivityItem>
            )}
        </div>
     </div>
    );
}

export default Activities;