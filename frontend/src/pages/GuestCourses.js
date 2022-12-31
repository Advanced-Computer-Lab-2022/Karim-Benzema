import {useEffect,useState} from 'react';
import React from 'react';
//components 
import CourseDetails from '../components/courseDetails';
import NavbarInst from '../components/navbarInst';
//import { set } from 'mongoose';

const CourseDeets = () => {
    const [courses,setCourses] = useState(null);

    const params = new URLSearchParams(window.location.search);
    const id = params.get('id');
    
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
        </div>
        
    );
}

export default CourseDeets;