import { useEffect, useState } from 'react';
import React from 'react';
//components 
import CoursesOnly from '../components/coursesOnly';
import CourseDetailsGuest from '../components/courseDetailsGuest';
import RegisterButtons from '../components/registerButtons';
import NavbarIt from '../components/navbarIt';

const ItHome = () => {
    const [courses, setCourses] = useState(null);
    const [courses2, setCourses2] = useState(null);
    const [courses3, setCourses3] = useState(null);
    const [minprice, setMinPrice] = useState('')
    const [maxprice, setMaxPrice] = useState('')
    const [error,setError] = useState(null)
    const [subject, setSubject] = useState('')
    const [rating, setRating] = useState('')
    const [search,setSearch]=useState('')
    const [error3,setError3] = useState(null)

    const params = new URLSearchParams(window.location.search);
    
    const itid = params.get('id');

    useEffect(() => {
        const fetchCourses = async () => {
            const response = await fetch('/api/it/getcoursebyitid/'+itid)
            const json = await response.json()

            if (response.ok) {
                setCourses(json)
            }
        }
        const fetchCourses2 = async () => {
            const response = await fetch('/api/it/viewcourses')
            const json = await response.json()
       
          if(response.ok){
              setCourses2(json)
          }
        }
        const fetchCourses3 = async () => {
            const response = await fetch('/api/courses/mostpopular')
            const json = await response.json()
          if(response.ok){
              setCourses3(json)
          }}
        fetchCourses();
        fetchCourses2();
        fetchCourses3();
    }
        , []);
//yas
const handleSubmit = async(e) => {  
    e.preventDefault();
    // const seacrhVal = {title:title,subject:subject,Instructor:Instructor}
    if (minprice!=='' && maxprice!=='' ){ 
    const response = await fetch(`/api/courses/filterbyprice/`+ minprice +'/'+ maxprice)
    const json = await response.json()
if(!response.ok){
    setError(json.error)
}
if(response.ok){
  setCourses2(json); 
  setError(null)
    }
}
else {
    setError("Enter both fields!")
}
}
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
    if (search!=='' ){ 
    const user = {search}
    const fetchedData = await fetch(`/api/courses/search?${new URLSearchParams(user).toString()}`);

   const json = await fetchedData.json()

setCourses2(json)
}
else{
    setError3("Required field")
}
}
const handleSubmit5 = async(e) => {  
    e.preventDefault();
    window.location=`/viewproblems`
}

   
    return (
        <div className="ITHome">
            <NavbarIt/>

        <center> <h4>Registered Courses</h4></center> 
            <form className="course_container">
                {courses && courses.map((course) => (
                    <CoursesOnly key={course._id} course={course} itid = {itid}/>
                ))}
            </form>
        <br></br>
        <form className="bottom_container" onSubmit={handleSubmit}>
        <input 
        type={"text"}
        placeholder="enter min price"
        onChange={(e)=>setMinPrice(e.target.value)}
        className="input"/>
        &nbsp; &nbsp;  &nbsp;
         <input 
        type={"text"}
        placeholder="enter max price"
        onChange={(e)=>setMaxPrice(e.target.value)}
        className="input"
        />
        &nbsp; &nbsp;  &nbsp;
        <button className="green_btn" onChange={(e) => setCourses2(courses2)}
        >Filter by Price  </button>
        &nbsp; &nbsp;  &nbsp;
        {error && <div className="error_msg">{error}</div>}
</form>
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
<form className="bottom_container2 " onSubmit={handleSubmit3}>
&nbsp; &nbsp;  &nbsp; &nbsp; &nbsp;  &nbsp; &nbsp; &nbsp; 
&nbsp; &nbsp;  &nbsp; &nbsp; &nbsp;  &nbsp; &nbsp; &nbsp; 
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
        &nbsp; &nbsp;  &nbsp;
        {error3 && <div className="error_msg">{error3}</div>}
        </form>
<br></br>
        <form className='bottom_container' onSubmit={handleSubmit5}>
                <button className='green_btn' onSubmit={handleSubmit5}>View Problems</button>
                </form>
        <center><h4>All Courses</h4></center> 
            <form className={"course_container"}>
            {courses2 && courses2.map((course) => (
            <RegisterButtons  key={course._id} course={course} id ={itid}/>
            ))}
        </form>
        <center><h4>Popular Courses</h4></center> 
            <form className={"course_container"}>
            {courses3 && courses3.map((course) => (
            <RegisterButtons  key={course._id} course={course} id ={itid}/>
            ))}
        </form>
        
        </div>
    );

}
export default ItHome;