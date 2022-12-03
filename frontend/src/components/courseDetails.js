import React from 'react';

const CourseDetails = ({course}) => {
    return (
        <div className="course-details">
            <h4>{course.title}</h4>
            <p><strong>Title : </strong>{course.title}</p>
            {/* <p><strong>SubTitle: </strong>{course.subtitle}</p> */}
            <p><strong>Total Hours: </strong>{course.totalHours}</p>
            <p><strong>Price: </strong>{course.price}</p>
            <p><strong>Rating: </strong>{course.rating}</p>
            {/* <p><strong>Ratings: </strong>{course.ratings}</p> */}
            <p><strong>Reviews: </strong>{course.reviews + " "}</p>
            <p><strong>Subject: </strong>{course.subject}</p>
            <p><strong>Instructor: </strong>{course.instructor}</p>
            {/* <p><strong>Exercises: </strong>{course.exercises}</p> */}
            <p><strong>Discount: </strong>{course.discount}</p>
            <p><strong>Course Preview:</strong><iframe width="560" height="315" src="https://www.youtube.com/embed/98BzS5Oz5E4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></p>
            <p><strong>Short Summary: </strong>{course.shortSummary}</p>
        </div>
    );
}

export default CourseDetails;