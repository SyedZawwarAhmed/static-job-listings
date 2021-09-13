import React from 'react';
import "../Stylesheets/Job.css";

function Job(props) {
    return (
        <div className="job">
            <h3 className="company">{props.company}</h3>
            <h1 className="position">props.position</h1>
        </div>
    )
}

export default Job
