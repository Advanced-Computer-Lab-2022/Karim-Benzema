import React from 'react';


const GuestSubtitleDetails = ({subtitle,id}) => {
    return (
        <div className="course_container div"
        onClick={() => window.location.href=`/viewExamGuest/?id=${id}&subtitle=${subtitle.title}`}>
            <h4>{subtitle.title}</h4>
            <p><strong>total hours: </strong>{subtitle.totalHours}</p> 
            <p><strong>description: </strong>{subtitle.description}</p> 
            
        </div>
    );
}
export default GuestSubtitleDetails;