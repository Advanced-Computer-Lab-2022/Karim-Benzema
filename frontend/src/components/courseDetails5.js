import React from 'react';

const CourseDetails5 = ({course}) => {
    return (
        <div className="course-details">
            <div
              onClick={() => window.location.href=`/Course?id=${course._id}`}
            >
            {course.title} </div>
        </div>
    );
}

export default CourseDetails5;