import React from 'react';


const ProbDetails = ({problem}) => {
    return (
        <div className="course_container div">
            <p><strong>Id: </strong>{problem._id}</p> 
            <p><strong>Problem: </strong>{problem.report}</p> 
            <p><strong>Status: </strong>{problem.resolved}</p> 
        </div>
    );
}
export default ProbDetails;