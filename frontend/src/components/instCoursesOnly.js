import React from 'react';
import {useEffect,useState} from 'react';

const InstCoursesOnly = ({course}) => {
    return (
        <div className="course_container div"
             onClick={() => window.location.href=`/InstCourse?id=${course._id}`}>
              <p><strong></strong>{course.title} </p>
        </div>
    );
}

export default InstCoursesOnly;