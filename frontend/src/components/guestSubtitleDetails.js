import React from 'react';


const GuestSubtitleDetails = ({subtitle}) => {
    return (
        <div className="course_container div">
            <h4>{subtitle.title}</h4>
            <p><strong>total hours: </strong>{subtitle.totalHours}</p> 
            <p><strong>description: </strong>{subtitle.description}</p> 
            
        </div>
    );
}
export default GuestSubtitleDetails;