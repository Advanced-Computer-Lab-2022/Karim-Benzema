import React from 'react';


const CourseDetails3 = ({course}) => {
    return (
        <div className="course-details3">
            <h4>{course.title}</h4>
            {<p><strong>Title : </strong>{course.title}</p> }
            { <p><strong>SubTitle: </strong>{course.subtitle}</p> }
            {/* <p><strong>Total Hours: </strong>{course.totalHours}</p> */}
    
            { <p><strong>Rating: </strong>{course.rating}</p>}
            {/* <p><strong>Subject: </strong>{course.subject}</p>
            <p><strong>Instructor: </strong>{course.Instructor}</p>
            <p><strong>Exercises: </strong>{course.Exercises}</p>
            <p><strong>Discount: </strong>{course.discount}</p>
            <p><strong>Short Summary: </strong>{course.shortSummary}</p> */}
        </div>
    );
}
export default CourseDetails3;