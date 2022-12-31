import {useEffect,useState} from 'react';
import React from 'react';
import axios from 'axios';
//components 
import CourseDetails from '../components/courseDetails';
import NavbarIt from '../components/navbarIt';
//import { set } from 'mongoose';

const Itregister = () => {
    const [courses,setCourses] = useState(null);
    const [error,setError] = useState(null);
    const [data, setData] = useState(null)

    const params = new URLSearchParams(window.location.search);
    const id = params.get('id');
    const itid = params.get('itid');
    useEffect(() => {
        const fetchCourses = async () => {
        const response = await fetch('/api/courses/getcoursebyid/'+id)
        const json = await response.json()
        //console.log(json)
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
    
    const handleSubmit4 = async(e) => {
        e.preventDefault();
        const url = "http://localhost:3000/api/it/check/"+id+'/'+itid;
			const { data: res } = await axios.get(url, data);
			setData( res.data);
        console.log(res.data)
        if(res.data === true){
            setError("Already Registered!")
        }
        else{
        window.location = `/payment?id=`+id+`&itid=`+itid
        }
    }   
    return (
        <div className="Home">
            	<NavbarIt/>
        <div className="course_container">
            {courses && courses.map((course) => (
            < CourseDetails key={course._id} course={course} id={itid} />
            ))}
        </div>
        <br></br>
<form className="bottom_container" onClick={handleSubmit3}>
                <button className='green_btn'>
                    View Subtitle Content</button>
            </form>
            <form className="bottom_container" onClick={handleSubmit4}>
                <button className='green_btn'>
                   Register</button>
              
            </form>
            <div className='bottom_container'>
                {error && <div className="error_msg">{error}</div>}
                </div>


        </div>
        
    );
}

export default Itregister;