import React from 'react';
import {useEffect,useState} from 'react';

const Probfollowupit = ({problem}) => {
    const [followup,setFollowup] = useState(null);
    const [resolved,setResolved] = useState(null);
    const [error,setError] = useState(null);

    const handleSubmit = async(e) => {  
        e.preventDefault();
        const inputVal= {followup:followup,resolved:resolved}
        if ((followup!=='' )&&(resolved!=='')){ 
            const response = await fetch('/api/admin/followupIT/'+problem._id, {
                method: 'PATCH',
                body: JSON.stringify(inputVal),
                headers: {
                    'Content-Type': 'application/json'
                }
        })
        
        const json = await response.json()
    if(!response.ok){
        setError(json.error)
    }
    if(response.ok){
      setError(null)
      setFollowup('')
      setResolved('')
        }
    }
    }


    return (
        <div className="course_container div">
            <p><strong>ID : </strong>{problem._id}</p>
            <p><strong>status : </strong>{problem.resolved}</p>
            <p><strong>report : </strong>{problem.report}</p>
            
            <form className="jess" onSubmit={handleSubmit}>
       <form className="bottom_container" >
        <input className="input" 
        type={"text"}
        placeholder="Followup"
        onChange={(e)=>setFollowup(e.target.value)}
        />
        </form>
           {/* &nbsp; &nbsp;  &nbsp; */}
           <form className="bottom_container" >
        <input className="input" 
        type={"text"}
        placeholder="Resolved OR Pending"
        onChange={(e)=>setResolved(e.target.value)}
        /> </form>
             {/* &nbsp; &nbsp;  &nbsp; */}
             <form className="bottom_container" >
        <button className='green_btn'  onChange={(e) => handleSubmit()}>Add followup</button>
        {error && <div className="error">{error}</div>}
        </form>
        </form>
            {/* <p><strong>Total Hours: </strong>{course.totalHours}</p>
            <p><strong>Rating: </strong>{course.rating}</p>
            <p><strong>Reviews: </strong>{course.reviews + " "}</p>
            <p><strong>Subject: </strong>{course.subject}</p>
            <p><strong>Instructor: </strong>{course.instructorName}</p>
            <p><strong>Discount: </strong>{course.discount}</p>
            <p><iframe width="560" height="315" src={course.preview} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></p>
            <p><strong>Short Summary: </strong>{course.shortSummary}</p> */}
        </div>
    );
}
export default Probfollowupit;