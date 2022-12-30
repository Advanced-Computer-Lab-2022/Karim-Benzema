import { useEffect, useState } from 'react';
import React from 'react';
//components 
import CoursesOnly2 from '../components/coursesOnly2';
import CourseDetailsGuest from '../components/courseDetailsGuest';
import CourseDetailsCt from '../components/courseDetailsCt';

const CThome = () => {
    const [courses, setCourses] = useState(null);
    const [courses2,setCourses2] = useState(null);
    const [error, setError] = useState(null)
    const [subject, setSubject] = useState('')
    const [rating, setRating] = useState('')
    const [search,setSearch]=useState('')
    const [email, setEmail] = useState('')
    const params = new URLSearchParams(window.location.search);
    const id = params.get('id');
   
    useEffect(() => {
        const fetchCourses = async () => {
            const response = await fetch('/api/ct/getcoursebyctid/'+id)
            const json = await response.json()

            if (response.ok) {
                setCourses(json)
            }
        }
        const fetchCourses2 = async () => {
            const response = await fetch('/api/ct/viewcourses')
            const json = await response.json()
          if(response.ok){
              setCourses2(json)
          }}
        fetchCourses();
        fetchCourses2();
    }
        , []);
//yas
const handleSubmit2 = async(e) => {  
    e.preventDefault();
    const inputVal= {subject:subject,rating:rating}
    if(subject==='' || rating===''){ //or
        const response= await fetch(`/api/courses/subjectorRating?${new URLSearchParams(inputVal).toString()}`)
        const json = await response.json()
        if(!response.ok){
            setError(json.error)
        }
        if(response.ok){
          setCourses2(json);
          console.log(json)
          setError(null) 
          setSubject('')
          setRating('')
        }
    }
    else{ //and 
        const response= await fetch(`/api/courses/subjectRating?${new URLSearchParams(inputVal).toString()}`)
        const json = await response.json()
        if(!response.ok){
            setError(json.error)
        }
        if(response.ok){
          setCourses2(json);
          console.log(json)
          setError(null)
          setSubject('')
          setRating('')
        }
    }
}
const handleSubmit3 = async (e) => {
    e.preventDefault();
    const user = {search}
    const fetchedData = await fetch(`/api/courses/search?${new URLSearchParams(user).toString()}`);

   const json = await fetchedData.json()

setCourses2(json)
}

const handleSubmit4 = async(e) => {  
    e.preventDefault();
    window.location=`/selectCountry`

}
const handleSubmit5 = async(e) => {  
    e.preventDefault();
    window.location=`/changePasswordCt`

}
const handleSubmit6 = async(e) => {  
    e.preventDefault();
    window.location=`/viewproblems`
}
const handleSubmit7 = async (e) => {
    e.preventDefault();
    const user = {email}
    const response = await fetch('/api/ct/editemail/'+id, {
        method: 'PATCH',
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
    setEmail('');
    setError('Added')
    console.log("Changed!",json)
    }
}
    return (
        <div className="CThome">
            <header>
            &nbsp; &nbsp;  &nbsp;&nbsp; &nbsp;  &nbsp;&nbsp; &nbsp;  &nbsp;
            <form className="bottom_container2" onSubmit={handleSubmit4} >
                <button className="green_btn" >
                   Select Country</button>
            </form>
            &nbsp; &nbsp;  &nbsp;&nbsp; &nbsp;  &nbsp;&nbsp; &nbsp;  &nbsp;
            <form className="bottom_container2" onSubmit={handleSubmit5} >
                <button className="green_btn" > Change password</button>
            </form>
            &nbsp; &nbsp;  &nbsp;&nbsp; &nbsp;  
            <form className='bottom_container2' onSubmit={handleSubmit6}>
            <button className='green_btn'  onSubmit={handleSubmit6}>View All Problems</button>
            </form>
            &nbsp; &nbsp;  &nbsp;&nbsp; &nbsp; 
            <br></br>
            <form className="bottom_container" onSubmit={handleSubmit7}>
                    <input  className="input" 
                    type={"text"}
                    placeholder="enter email"
                    onChange={(e)=>setEmail(e.target.value)}/>
                     &nbsp; &nbsp;  &nbsp;
                    <button className="green_btn" onChange={(e) => setEmail(e.target.value)}>Add Email</button>
                    <div className='bottom_container'>
                    {error && <div className="error_msg2">{error}</div>}
                    </div>
            </form>
            </header>
            <br></br>
            <center> <h4>Registered Courses</h4></center> 
            <form className="course_container">
                {courses && courses.map((course) => (
                <CoursesOnly2 key={course._id} course={course}  ctid={id} />

                ))}
            </form> 
            <br></br>
            <center><h4>All Courses</h4></center> 
            <form className={"course_container"}>
            {courses2 && courses2.map((course) => (
            <CourseDetailsCt  key={course._id} course={course} ctid={id}/>
            ))}
        </form>
        <br></br>
        <form className="bottom_container" onSubmit={handleSubmit2}>
        <input  
        type={"text"}
        placeholder="filter by subject"
        onChange={(e)=>setSubject(e.target.value)}
        className="input"
        />
         &nbsp; &nbsp;  &nbsp;
         <input   
        type={"text"}
        placeholder="filter by rating"
        onChange={(e)=>setRating(e.target.value)}
        className="input"
        />
        &nbsp; &nbsp;  &nbsp;
        <button  className="green_btn" onChange={(e) => setCourses2(courses2)} >Filter
        </button>
</form>
<form className="bottom_container " onSubmit={handleSubmit3}>
        <input
        type="text"
        id="search"
        name="search"
        placeholder="Search by subject or title"
        className="input"
        onChange={(e) => setSearch(e.target.value)}
        value={search}
        />
         &nbsp; &nbsp;  &nbsp;
       <button  className="green_btn" onChange={(e) => setCourses2(courses2)} >Search
        </button>
        </form>
        </div>
    );

}
export default CThome;