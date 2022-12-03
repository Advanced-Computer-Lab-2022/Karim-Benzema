import React from 'react';
import {useEffect,useState} from 'react';

const InstCoursesOnly = ({course}) => {
    return (
        <div className="course-details">
            <button
              
              onClick={() => window.location.href=`/InstCourse?id=${course._id}`}
            >
            {course.title} Course </button>
        </div>
    );
}

export default InstCoursesOnly;