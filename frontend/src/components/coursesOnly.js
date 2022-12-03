import React from 'react';
import {useEffect,useState} from 'react';

const CoursesOnly = ({course}) => {
    return (
        <div className="course-details">
            {/* for(var i=0;i<course.length;i++){ */}
            <button
              onClick={() => window.location.href=`/Course?id=${course[0]._id}`}
            >
            {course[0].title} Course </button>
            {/* } */}
        </div>
    );
}

export default CoursesOnly;