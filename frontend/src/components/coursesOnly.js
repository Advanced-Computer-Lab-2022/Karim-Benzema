import React from 'react';

const CoursesOnly = ({course,itid}) => {
  //console.log(itid)
    return (
        <div className="course_container div"
              onClick={() => window.location.href=`/Course/?id=${course[0]._id}&itid=${itid}`}>
            <p><strong>Title : </strong>{course[0].title} </p>
            <p><strong>Total Hours: </strong>{course[0].totalHours}</p>
            <p><strong>Price: </strong>{course[0].price}</p> 
            {/* {Math.round(course[0].price*(100-course[0].discount)/100)} */}
            <p><strong>Rating: </strong>{course[0].rating}</p> 
              </div>
    );
}

export default CoursesOnly;