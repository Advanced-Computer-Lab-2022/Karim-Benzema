import React from 'react';
import {useEffect,useState} from 'react';

const CoursesOnly2 = ({course,ctid}) => {
    return (
        <div className="course_container div"
            onClick={() => window.location.href=`/Coursesct?id=${course[0]._id}&ctid=${ctid}`}>
            <p><strong>Title : </strong>{course[0].title} </p>
            <p><strong>Total Hours: </strong>{course[0].totalHours}</p>
            <p><strong>Rating: </strong>{course[0].rating}</p> 
              </div>
    );
}

export default CoursesOnly2;