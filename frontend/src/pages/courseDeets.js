import {useEffect,useState} from 'react';
import React from 'react';
//components 
import CourseDetails from '../components/courseDetails';
//import { set } from 'mongoose';

const CourseDeets = () => {
    const [courses,setCourses] = useState(null);
    const [rating,setRating] = useState(null);
    const [rating2,setRating2] = useState(null);
    const [review,setReview] = useState(null);
    const [subtitle,setSubtitle] = useState(null);
    const [error,setError] = useState(null)
    const params = new URLSearchParams(window.location.search);
    const id = params.get('id');
    useEffect(() => {
        const fetchCourses = async () => {
        const response = await fetch('/api/courses/getcoursebyid/'+id)
        const json = await response.json()
     
        if(response.ok){
            setCourses(json)
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
        setError(json.error)
    }
    if(response.ok){
      setError(null)
      setRating('')
        }
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
        setError(json.error)
    }
    if(response.ok){
      setError(null)
      setReview('')
        }
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
        setError(json.error)
    }
    if(response.ok){
      setError(null)
      setRating2('')
        }
    }
    // const handleSubmit3 = async(e) => {  
    //     e.preventDefault();
    //     const inputVal= {id:id,rating:rating}
    //     if (subtitle!==''){ 
    //         const response = await fetch('/api/it/rateCourse', {
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
    //   setSubtitle('')
    //     }
    // }
     }
    
    return (
        <div className="ITHome">
        <div className="courses">
            {courses && courses.map((course) => (
            < CourseDetails key={course.id} course={course} />
            ))}
        </div>
        <form className="view content" onSubmit={handleSubmit2} >
                <button
                    onClick={() => window.location.href = "/subtitlecontent"}>
                    View Subtitle Content</button>
                    {error && <div className="error">{error}</div>}
            </form>
        <form className="rate course" onSubmit={handleSubmit}>
        <input className="rate course" 
        type={"text"}
        placeholder="rate course"
        onChange={(e)=>setRating(e.target.value)}
        /> 
        <button onChange={(e) => setRating(e.target.value)}>Add Rating</button>
        {error && <div className="error">{error}</div>}
</form>
<form className="review course" onSubmit={handleSubmit1}>
        <input className="review course" 
        type={"text"}
        placeholder="review course"
        onChange={(e)=>setReview(e.target.value)}
        />
        <button onChange={(e) => setReview(e.target.value)}>Add review</button>
        {error && <div className="error">{error}</div>}
</form>
<form className="rate instructor" onSubmit={handleSubmit2}>
        <input className="rate instructor" 
        type={"text"}
        placeholder="rate instructor"
        onChange={(e)=>setRating2(e.target.value)}
        />
        <button onChange={(e) => setRating2(e.target.value)}>Rate Instructor</button>
        {error && <div className="error">{error}</div>}
</form>



        </div>
        
    );
}

export default CourseDeets;