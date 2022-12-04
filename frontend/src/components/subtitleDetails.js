import React from 'react';


const SubtitleDetails = ({subtitle}) => {
    return (
        <div className="course-details3">
            <h4>{subtitle.title}</h4>
          
            <p><strong>number: </strong>{subtitle.number}</p> 
            <p><strong>total hours: </strong>{subtitle.totalHours}</p> 
            <p><strong>video: </strong><iframe width="560" height="315" src={subtitle.video} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></p> 
            <p><strong>description: </strong>{subtitle.description}</p> 
            
        </div>
    );
}
export default SubtitleDetails;