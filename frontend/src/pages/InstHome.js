import {useEffect,useState} from 'react';
import React from 'react';
//components 

import InstCoursesOnly from '../components/instCoursesOnly';
import RatingReviewInst from '../components/ratingReviewInst';
const InstHome = () => {
    const [courses,setCourses] = useState(null);
    const [error,setError] = useState(null)
    const [miniBio, setBio] = useState('')
    const [email, setEmail] = useState('')
    const [instructor, setInstructor] = useState('')
  

useEffect(() => {
    const fetchCourses = async () => {
      const response = await fetch('/api/instructor/viewCourses')
      const json = await response.json()
 
    if(response.ok){
        setCourses(json)
    }
    }
    const fetchratingreviews = async () => {
        const response = await fetch('/api/instructor/getMyRating')
        const json = await response.json()
   
      if(response.ok){
        setInstructor(json)
      }
      }

    fetchCourses();            
    fetchratingreviews();
}

, []);
const handleSubmit1 = async (e) => {
    const user = {miniBio}
    const response = await fetch('/api/instructor/editbio', {
        method: 'PATCH',
        body:JSON.stringify(user),
       // body: JSON.stringify(x),
        headers: {
            'Content-Type': 'application/json'
        }
})
const json = await response.json()
if(!response.ok){
    setError(json.error)
}
if(response.ok){
    setBio('');
    //setUsername('')
    setError(null)
    console.log("Changed!",json)
    }
}
const handleSubmit2 = async(e) => {  
    e.preventDefault();
    window.location=`/changePasswordInst`

}
const handleSubmit3 = async (e) => {
    const user = {email}
    const response = await fetch('/api/instructor/editemail', {
        method: 'PATCH',
        body:JSON.stringify(user),
       // body: JSON.stringify(x),
        headers: {
            'Content-Type': 'application/json'
        }
})
const json = await response.json()
if(!response.ok){
    setError(json.error)
}
if(response.ok){
    setEmail('');
    //setUsername('')
    setError(null)
    console.log("Changed!",json)
    }
}
const handleSubmit4= async(e) => {  
    e.preventDefault();
    window.location=`/InstCourses`

}
    const handleSubmit5 = async(e) => {  
        e.preventDefault();
        window.location=`/selectCountryInst`
    
    }
    const handleSubmit6 = async(e) => {  
        e.preventDefault();
        window.location=`/AddCourse`
    
    }
    return (
        <div className="InstHome">
        <div className="Instcourses">
            {courses && courses.map((course) => (
            <InstCoursesOnly key={course._id} course={course} />
            ))}
            {error && <div className="error">{error}</div>}
        </div>
        <div className="RatingReviewInst">
        {instructor && instructor.map( (instructor) => (
            <RatingReviewInst key={instructor._id} instructor={instructor} />
            ))}
            {error && <div className="error">{error}</div>}
        </div>
        <form className="All Courses" onSubmit={handleSubmit4} >
                <button>
                    View All Courses</button>
                    {error && <div className="error">{error}</div>}
            </form>
            <form className="Create Course" onSubmit={handleSubmit6} >
                <button>
                Create Course</button>
                   {error && <div className="error">{error}</div>}
            </form>
            <form className="Select Country" onSubmit={handleSubmit5} >
                <button>
                   Select Country</button>
                   {error && <div className="error">{error}</div>}
            </form>
            <form className="change password" onSubmit={handleSubmit2} >
                <button>
                    Change password</button>
                    {error && <div className="error">{error}</div>}
            </form>
           
            <form className="edit bio" onSubmit={handleSubmit1}>
                    <input  className="edit bio" 
                    type={"text"}
                    placeholder="enter mini bio"
                    onChange={(e)=>setBio(e.target.value)}/>
                    <button onChange={(e) => setBio(e.target.value)}>Edit MiniBio</button>
                    {error && <div className="error">{error}</div>}
            </form>
            <form className="edit email" onSubmit={handleSubmit3}>
                    <input  className="edit mail" 
                    type={"text"}
                    placeholder="enter email"
                    onChange={(e)=>setEmail(e.target.value)}/>
                    <button onChange={(e) => setEmail(e.target.value)}>Edit Email</button>
                    {error && <div className="error">{error}</div>}
            </form>
        </div>
    );

}
export default InstHome;
