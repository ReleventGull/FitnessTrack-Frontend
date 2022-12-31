import React from 'react'


const ActivityItem = ({children, activity}) => {

        return (
            <div onClick={() => console.log(activity.id)} className="activity-card" key={activity.id}>
                    <h2>Activity</h2>
                    <p>{activity.name}</p>
                    <h2>Description</h2>
                    <p>{activity.description}</p>
            </div>
        );
}

export default ActivityItem