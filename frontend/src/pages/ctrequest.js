import {useEffect,useState} from 'react';
import React from 'react';
import axios from "axios";
//components 
import CourseDetails from '../components/courseDetails';
//import { set } from 'mongoose';

const Ctrequest = () => {
    const [courses,setCourses] = useState(null);
    const [error,setError] = useState(null)
    const [data,setData] = useState(null)

    const params = new URLSearchParams(window.location.search);
    const id = params.get('id');
    const ctid = params.get('ctid');
    
    useEffect(() => {
        const fetchCourses = async () => {
        const response = await fetch('/api/courses/getcoursebyid/'+id)
        const json = await response.json()
        console.log(json)
        if(response.ok){
            setCourses(json)
        }
        }
        fetchCourses();
    }, []);

    const handleSubmit= async(e) => {
        e.preventDefault();
        const response = await fetch('/api/ct/register/'+id+'/'+ctid, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            }
    })
    const json = await response.json()
    if(!response.ok){
        setError('Course Already Registered')
    }
    if(response.ok){
        setError('Requested')
        console.log("Changed!",json)
        }
}
    const handleSubmit3 = async(e) => {  
        e.preventDefault();
        window.location = `/guestSubtitles?id=`+id
        
    }
    
    return (
        <div className="Home">
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
            <form className="bottom_container" onClick={handleSubmit}>
                <button className='green_btn'>Request Course</button>
                <div className="bottom_container">
                {error && <div className="error_msg2">{error}</div>}
                </div>
            </form>
            
        </div>
        
    );
}

export default Ctrequest;