import React from 'react';

const CourseDetails = ({course}) => {
    return (
        <div className="course_container div">
            <p><strong>Title : </strong>{course.title}</p>
            <p><strong>Total Hours: </strong>{course.totalHours}</p>
            <p><strong>Rating: </strong>{course.rating}</p>
            <p><strong>Reviews: </strong>{course.reviews + " "}</p>
            <p><strong>Subject: </strong>{course.subject}</p>
            <p><strong>Instructor: </strong>{course.instructorName}</p>
            <p><strong>Discount: </strong>{course.discount}</p>
            <p><iframe width="560" height="315" src={course.preview} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></p>
            <p><strong>Short Summary: </strong>{course.shortSummary}</p>
        </div>
    );
}

export default CourseDetails;