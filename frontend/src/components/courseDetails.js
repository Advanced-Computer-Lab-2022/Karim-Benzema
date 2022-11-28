<<<<<<< HEAD
import React from 'react';

=======
>>>>>>> 7ad672e1bc7b892b54f07d76181cde99cd3cff9b
const CourseDetails = ({course}) => {
    return (
        <div className="course-details">
            <h4>{course.title}</h4>
            <p><strong>Title : </strong>{course.title}</p>
            <p><strong>SubTitle: </strong>{course.subtitle}</p>
            <p><strong>Total Hours: </strong>{course.totalHours}</p>
            <p><strong>Price: </strong>{course.price}</p>
            <p><strong>Rating: </strong>{course.rating}</p>
            <p><strong>Subject: </strong>{course.subject}</p>
<<<<<<< HEAD
            <p><strong>Instructor: </strong>{course.instructor}</p>
            <p><strong>Exercises: </strong>{course.exercises}</p>
=======
            <p><strong>Instructor: </strong>{course.Instructor}</p>
            <p><strong>Exercises: </strong>{course.Exercises}</p>
>>>>>>> 7ad672e1bc7b892b54f07d76181cde99cd3cff9b
            <p><strong>Discount: </strong>{course.discount}</p>
            <p><strong>Short Summary: </strong>{course.shortSummary}</p>
        </div>
    );
}

export default CourseDetails;