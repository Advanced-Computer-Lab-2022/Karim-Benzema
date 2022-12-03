import React from 'react';
import {useEffect,useState} from 'react';

const CoursesOnly = ({course}) => {
    return (
        <div className="course-details">
            <button
              
              onClick={() => window.location.href=`/Course?id=${course._id}`}
            >
            {course.title} Course </button>
        </div>
    );
}

export default CoursesOnly;