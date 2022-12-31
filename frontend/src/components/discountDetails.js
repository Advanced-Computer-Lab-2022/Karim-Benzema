import React from 'react';
import {useEffect,useState} from 'react';

const DiscountDetails = ({course}) => {
    const [discount,setDiscount] = useState(null);
    const [validDate,setvalidDate] = useState(null);
    const [error,setError] = useState(null);

    const handleSubmit = async(e) => {  
        e.preventDefault();
        const inputVal= {discount:discount,validDate:validDate}
        if ((discount!=='' )&&(validDate!=='')){ 
            const response = await fetch('/api/admin/discount1/'+course._id, {
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
      setDiscount('')
      setvalidDate('')
        }
    }
    }


    return (
        <div className="course_container div">
            <p><strong>Title : </strong>{course.title}</p>
            <p><strong>Discount : </strong>{course.discount}</p>
            
            <form className="bottom_container" onSubmit={handleSubmit}>
        <input className="input" 
        type={"text"}
        placeholder="discount"
        onChange={(e)=>setDiscount(e.target.value)}
        />
           &nbsp; &nbsp;  &nbsp;
        <input className="input" 
        type={"text"}
        placeholder="valid until date"
        onChange={(e)=>setvalidDate(e.target.value)}
        />
             &nbsp; &nbsp;  &nbsp;
        <button className='green_btn'  onChange={(e) => handleSubmit()}>Add discount</button>
        {error && <div className="error">{error}</div>}
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

export default DiscountDetails;