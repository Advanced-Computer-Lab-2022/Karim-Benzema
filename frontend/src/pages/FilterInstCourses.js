import { useState,useEffect } from 'react';
import React from 'react';
import CourseDetails from '../components/courseDetails';

const FilterInstCourses =()=> {
  const [courses,setCourses] = useState(null);
  const [error,setError] = useState(null)
  const [subject, setSubject] = useState('')
  const [price, setPrice] = useState('')
 
  useEffect(() => {
    const fetchCourses = async () => {
      const response = await fetch('/api/instructor/courses')
      const json = await response.json()
 
    if(response.ok){
        setCourses(json)
    }
    }
    fetchCourses();
}, []);
const handleSubmit = async(e) => {  
  e.preventDefault();
  const inputVal= {subject:subject,price:price}
  if(subject==='' || price===''){ 
    const response = await fetch(`/api/instructor/filter?${new URLSearchParams(inputVal).toString()}`)
    const json = await response.json()
if(!response.ok){
    setError(json.error)
}
if(response.ok){
  setCourses(json); 
  console.log(json)
  setError(null)
  setPrice('')
  setSubject('')
}
    }
    else {
      setError("please use only one filter!")
    }
  }
    return (
        <div className="InstCourses">
        <div className="courses">
        {courses && courses.map((course) => (
            <CourseDetails key={course._id} course={course} />
            ))}
        </div>
        <form className="subjectprice filter" onSubmit={handleSubmit}>
        <input  className="subject filter" 
        type={"text"}
        placeholder="filter by subject "
        onChange={(e)=>  setSubject(e.target.value) }/>
      <input  className=" price filter" 
        type={"text"}
        placeholder="filter by price"
        onChange={(e)=>setPrice(e.target.value)}/>
        <button onChange={(e) => setCourses(courses)}>Filter</button>
        {error && <div className="error">{error}</div>}
</form>
</div>
    );
}
export default FilterInstCourses;





