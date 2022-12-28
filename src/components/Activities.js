import React from "react";

const Activities = ({ activities }) => {
    return (
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
    );
}

export default Activities;