import { useState,useEffect, useTransition } from 'react';
import React from 'react';
import axios from 'axios';
import CourseDetails from './courseDetails';

const ViewSubjectRatingsCt =()=> {

  const [error,setError] = useState(null)
  const [search,setSearch] = useState('')
 
  
  const [courses,setCourses] = useState(null);
 
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    const user = {search}
    const fetchedData = await fetch(`/api/courses/search?${new URLSearchParams(user).toString()}`);

/*const res=fetch(`/api/instructor/viewcourses/${username}`)
.then((res)=>(res.json()))
.then((data)=>
console.log(data))
*/
   const json = await fetchedData.json()

setCourses(json)
    //const response = await fetch(`/api/instructor/viewcourses/${username}`).then((resp) => resp.json())


}
useEffect(() => {
  const AllCoursesInitialize = async () => {
  
    const fetchedData = await fetch(`/api/courses/getCourses`);
    const coursesAsJSON = await fetchedData.json();
    setCourses(coursesAsJSON);
  };
  AllCoursesInitialize ();
}, []);

return(
  <div>
           <form className="create" onSubmit={handleSubmit}>

      <label>search:</label>
        <input
        type="text"
        id="search"
        name="search"
        placeholder="Search"
       
        onChange={(e) => setSearch(e.target.value)}
        value={search}
        />
        
 <button>Add</button>
        {error && <div className="error">{error}</div>}

 
 
        </form>
        <div className="courses">
            {courses && courses.map( (course) => (
            <CourseDetails  key={course._id} course={course} />
            ))}
           
        </div>
  </div>
)
}


export default ViewSubjectRatingsCt
