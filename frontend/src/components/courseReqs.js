import React from 'react';

const CourseReqs = ({ct}) => {
  //console.log(itid)
    return (
       
        <div className="form_container2" onClick={() => window.location.href=`/AcceptRequest/?id=${ct._id}`}>
            <p><strong>First Name : </strong>{ct.firstName} </p>
            <p><strong>Last Name : </strong>{ct.lastName} </p>
            {/* <ul><strong>Requests : </strong>{ct.requests} </ul> */}
           {/* <button className='green_btn' onClick={HandleSubmit}> View Requests</button> */}
              </div>
    )
}

export default CourseReqs;