import {useEffect,useState} from 'react';
import React from 'react';
import pdf from "./images/certificate.pdf"

//components 

import CourseDetails2 from '../components/courseDetails2';
import NavBar from '../components/Navbar';
//import { set } from 'mongoose';

const CourseDeets2 = () => {
    const [courses,setCourses] = useState(null);
    const [rating,setRating] = useState(null);
    const [rating2,setRating2] = useState(null);
    const [review,setReview] = useState(null);
    const [review2,setReview2] = useState(null);
    const [subtitle,setSubtitle] = useState(null);
    const [error,setError] = useState(null)
    const [error1,setError1] = useState(null)
    const [error2,setError2] = useState(null)
    const [error3,setError3] = useState(null)
    const [progress,setProgress] = useState(null);
    const params = new URLSearchParams(window.location.search);
    const id = params.get('id');
    const ctid = params.get('ctid');
    let prog="none"
    useEffect(() => {
        const fetchCourses = async () => {
        const response = await fetch('/api/courses/getcoursebyid/'+id)
        const json = await response.json()
        console.log(json)
        if(response.ok){
            setCourses(json)
        }
        const responsee = await fetch('/api/ct/getprogress/'+id+'/'+ctid)
        const jsonn = await responsee.json()
        console.log(json)
        if(response.ok){
            setProgress(jsonn)
        }
        }
        fetchCourses();
    }, []);


    const onButtonClick = () => {

        fetch('/api/email/'+ctid, {
            method: 'POST',
            body: JSON.stringify({ctid:ctid}),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        // using Java Script method to get PDF file
        fetch(pdf).then(response => {
            response.blob().then(blob => {
                // Creating new object of PDF file
                const fileURL = window.URL.createObjectURL(blob);
                // Setting various property values
                let alink = document.createElement('a');
                alink.href = fileURL;
                alink.download = pdf;
                alink.click();
            })
        })
    }
    const handleSubmit = async(e) => {  
        e.preventDefault();
        const inputVal= {id:id,rating:rating}
        if (rating!==''){ 
            const response = await fetch('/api/ct/rateCourse', {
                method: 'PATCH',
                body: JSON.stringify(inputVal),
                headers: {
                    'Content-Type': 'application/json'
                }
        })
        const json = await response.json()
    if(!response.ok){
        setError1(json.error)
    }
    if(response.ok){
        setError1("Added")
      setRating('')
        }
    }
    }
    const handleSubmit1 = async(e) => {  
        e.preventDefault();
        const inputVal= {id:id,review:review}
        if (review!==''){ 
            const response = await fetch('/api/ct/reviewCourse', {
                method: 'PATCH',
                body: JSON.stringify(inputVal),
                headers: {
                    'Content-Type': 'application/json'
                }
        })
        const json = await response.json()
    if(!response.ok){
        setError2(json.error)
    }
    if(response.ok){
        setError2("Added")
      setReview('')
        }
    }
    else {
        setError2("Required Field")
    }
    }
    const handleSubmit2 = async(e) => {  
        e.preventDefault();
        const inputVal= {id:id,rating:rating2}
        if (rating2!==''){ 
            const response = await fetch('/api/ct/rateInstructor', {
                method: 'PATCH',
                body: JSON.stringify(inputVal),
                headers: {
                    'Content-Type': 'application/json'
                }
        })
        const json = await response.json()
    if(!response.ok){
        setError3(json.error)
    }
    if(response.ok){
        setError3("Added")
        setRating2('')
        }
    }
    else {
        setError3("Required Field")
    }
}
// const handleSubmit4 = async(e) => {  
//     e.preventDefault();
//     const inputVal= {id:id,review:review2}
//     if (review2!==''){ 
//         const response = await fetch('/api/ct/reviewInstructor', {
//             method: 'PATCH',
//             body: JSON.stringify(inputVal),
//             headers: {
//                 'Content-Type': 'application/json'
//             }
//     })
//     const json = await response.json()
// if(!response.ok){
//     setError(json.error)
// }
// if(response.ok){
//   setError(null)
//   setReview2('')
//     }
// }
// }

    const handleSubmit3 = async(e) => {  
        e.preventDefault();
        window.location = `/ctSubtitles?id=`+id+`&ctid=`+ctid
        
    }

    if (progress == 100) {

        prog="block"
         
     
     } else {
         prog="none"
 
     }
    return (
        <div className="CTHome">
            <NavBar/>
            <div className='bottom_container'>
            <form className="form_container3">
            <p> <strong>Progress: {progress} %</strong> </p>
            </form>
            </div>

        <div className="course_container div">
            {courses && courses.map((course) => (
            < CourseDetails2 key={course._id} course={course} />
            ))}
        </div>
        <form className="bottom_container2" onClick={handleSubmit3}>
        &nbsp; &nbsp;  &nbsp;&nbsp; &nbsp;  &nbsp;&nbsp; &nbsp;  &nbsp;&nbsp; &nbsp;  &nbsp;
            &nbsp; &nbsp;  &nbsp;&nbsp; &nbsp;  &nbsp;&nbsp; &nbsp;  &nbsp;&nbsp; &nbsp;  &nbsp;
            &nbsp; &nbsp;  &nbsp;&nbsp; &nbsp;  &nbsp;&nbsp; &nbsp;  &nbsp;&nbsp; &nbsp;  &nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;  &nbsp;&nbsp; &nbsp;  &nbsp;&nbsp; &nbsp;  &nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <button className='green_btn'>
                    View Subtitle Content</button>
        </form>
        <div className="bottom_container2">
                < button className='green_btn'  style={{display:prog}}  onClick={onButtonClick}>
                  Download Certificate
                </button> 
                </div>
        <form className="bottom_container" onSubmit={handleSubmit}>
        <input className="input" 
        type={"text"}
        placeholder="Rate course"
        onChange={(e)=>setRating(e.target.value)}
        /> 
          &nbsp; &nbsp;  &nbsp;
        <button  className='green_btn' onChange={(e) => setRating(e.target.value)}> Rate Course</button>
        &nbsp; &nbsp;  &nbsp;
        {error1 && <div className="error_msg2">{error1}</div>}
</form>
<form className="bottom_container" onSubmit={handleSubmit1}>
        <input className="input" 
        type={"text"}
        placeholder="review course"
        onChange={(e)=>setReview(e.target.value)}
        />
          &nbsp; &nbsp;  &nbsp;
        <button className='green_btn' onChange={(e) => setReview(e.target.value)}> Review Course</button>
        &nbsp; &nbsp;  &nbsp;
        {error2 && <div className="error_msg2">{error2}</div>}
</form>
<form className="bottom_container" onSubmit={handleSubmit2}>
        <input className="input" 
        type={"text"}
        placeholder="rate instructor"
        onChange={(e)=>setRating2(e.target.value)}
        />
          &nbsp; &nbsp;  &nbsp;
        
        <button className='green_btn' onChange={(e) => 
        setRating2(e.target.value)}>Rate Instructor</button>
         &nbsp; &nbsp;  &nbsp;
        {error3 && <div className="error_msg2">{error3}</div>}
<div>
        
                </div>
       {error && <div className="error">{error}</div>}
                </form>  

           
        </div>
        
    );
}

export default CourseDeets2;