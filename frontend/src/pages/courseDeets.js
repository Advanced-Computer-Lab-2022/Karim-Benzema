import {useEffect,useState} from 'react';
import React from 'react';
//components 
import CourseDetails from '../components/courseDetails';
import pdf from "./images/certificate.pdf"
import NavbarIt from '../components/navbarIt';
//import { set } from 'mongoose';

const CourseDeets = () => {
    const [courses,setCourses] = useState(null);
    const [rating,setRating] = useState(null);
    const [rating2,setRating2] = useState(null);
    const [review,setReview] = useState(null);
    const [review2,setReview2] = useState(null);
    const [subtitle,setSubtitle] = useState(null);
    const [type, setType] = useState('')
    const [report,setReport]=useState('')
    const [error,setError] = useState(null)
    const [error1,setError1] = useState(null)
    const [error2,setError2] = useState(null)
    const [error3,setError3] = useState(null)
    const [error4,setError4] = useState(null)
    const [error5,setError5] = useState(null)
    const [progress,setProgress] = useState(null);
    const params = new URLSearchParams(window.location.search);
    const id = params.get('id');
    const itid = params.get('itid');

    let prog="none";
console.log(itid)
    useEffect(() => {
        const fetchCourses = async () => {
        const response = await fetch('/api/courses/getcoursebyid/'+id)
        const json = await response.json()
        console.log(json)
        if(response.ok){
            setCourses(json)
        }
        const responsee = await fetch('/api/it/getprogress/'+id+'/'+itid)
        const jsonn = await responsee.json()
        console.log(json)
        if(response.ok){
            setProgress(jsonn)
        }
        }
        fetchCourses();
    }, []);
    const handleSubmit = async(e) => {  
        e.preventDefault();
        const inputVal= {id:id,rating:rating}
        if (rating!==''){ 
            const response = await fetch('/api/it/rateCourse', {
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
    else {
        setError5("Required Field")
    }
    }
    const handleSubmit1 = async(e) => {  
        e.preventDefault();
        const inputVal= {id:id,review:review}
        if (review!==''){ 
            const response = await fetch('/api/it/reviewCourse', {
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
            const response = await fetch('/api/it/rateInstructor', {
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

const handleSubmit3 = async(e) => { 
    console.log(id) 
    e.preventDefault();
    window.location = `/itSubtitles?id=`+id+`&itid=`+itid
    
}
const handleSubmit4 = async(e) => {  
    e.preventDefault();
    const inputVal= {id:id,review:review2}
    if (review2!==''){ 
        const response = await fetch('/api/it/reviewInstructor', {
            method: 'PATCH',
            body: JSON.stringify(inputVal),
            headers: {
                'Content-Type': 'application/json'
            }
    })
    const json = await response.json()
if(!response.ok){
    setError4(json.error)
}
if(response.ok){
  setError4("Added")
  setReview2('')
    }
}
else {
    setError4("Required Field")
}
}
const handleSubmit5 = async(e) => {  
    e.preventDefault();
    window.location=`/viewproblems`
}
const handleSubmit6 = async(e) => {  
    e.preventDefault();
    const user = {type:type,report:report}
    if (type!=='' && report!=='' ){ 
        const response =
        await fetch('/api/it/createProblem/'+itid, {
        method: 'POST',
        body:JSON.stringify(user),
        headers: {
            'Content-Type': 'application/json'
        }
})
const json = await response.json()
if(!response.ok){
    setError(json.error)
}
if(response.ok){
    setType('')
    setReport('')
    setError("Submitted")
    // window.location=`/GuestCourse?=id`+id
    }
}
else {
    setError5("Enter both fields!")
}
}
if (progress === 100) {

    prog="block"
     
 
 } else {
     prog="none"

 }

 const handleRefund = async () => {
    // Make an API call to update the trainee's courses array and refund the course price
    const response = await fetch(`/api/ct/refundCourse/${id}`, {
      method: 'PATCH'
    });
    const json = await response.json();
    if (!response.ok) {
      // Handle error
    }
    // Update the courses state to reflect the change
    setCourses(json.courses);
  };
  
    return (
            <div className="ITHome">
                    <NavbarIt/>
                <div className="container">
            <h1> Progress:{progress} %</h1>
            </div>

            <div className="course_container">
                {courses && courses.map((course) => (
                < CourseDetails key={course._id} course={course} />
                ))}
            </div>
            <br></br>
            <form className="bottom_container" onClick={handleSubmit3}>
                    <button className='green_btn'>
                        View Subtitle Content</button>
                </form>
                <form className='bottom_container' onSubmit={handleSubmit5}>
                <button className='green_btn' onSubmit={handleSubmit5}>View Problems</button>
                </form>

            <form className="bottom_container" onSubmit={handleSubmit6}>
            <input 
            type={"text"}
            placeholder="report type: technical, financial or other"
            onChange={(e)=>setType(e.target.value)}
            className="input"/>
            &nbsp; &nbsp;  &nbsp;
            <input 
            type={"text"}
            placeholder="report"
            onChange={(e)=>setReport(e.target.value)}
            className="input" />    
            &nbsp; &nbsp;  &nbsp;
            <button className="green_btn" > Submit Problem</button>
            &nbsp; &nbsp;  &nbsp;
            {error && <div className="error_msg2">{error}</div>}
            {error5 && <div className="error_msg">{error5}</div>}
            </form>

            <form className="bottom_container" onSubmit={handleSubmit}>
            <input className="input" 
            type={"text"}
            placeholder="rate course"
            onChange={(e)=>setRating(e.target.value)}
            /> 
                &nbsp; &nbsp;  &nbsp;
            <button className='green_btn' onChange={(e) => setRating(e.target.value)}>Add Rating</button>
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
            <button className='green_btn' onChange={(e) => setReview(e.target.value)}>Add review</button>
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
            <button className='green_btn' onChange={(e) => setRating2(e.target.value)}>Rate Instructor</button>
            &nbsp; &nbsp;  &nbsp;
            {error3 && <div className="error_msg2">{error3}</div>}
            </form>
            <form className="bottom_container" onSubmit={handleSubmit4}>
            <input className="input" 
            type={"text"}
            placeholder="review instructor"
            onChange={(e)=>setReview2(e.target.value)} />
            &nbsp; &nbsp;  &nbsp;
            <button  className='green_btn' onChange={(e) => setReview2(e.target.value)}>Review Instructor</button>
            &nbsp; &nbsp;  &nbsp;
            {error4 && <div className="error_msg2">{error4}</div>}
            </form>
            <a className="bottom_container" href={pdf} style={{display:prog}} download="cert.pdf">Download the Cerificate</a>        </div>
            
            
              
              
        );
}

export default CourseDeets;