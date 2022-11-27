import {useEffect,useState} from 'react';
import React from 'react';
//components 
import CourseDetails from '../components/courseDetails';

const Home = () => {
    const [courses,setCourses] = useState(null);
    const [minprice, setMinPrice] = useState('')
    const [maxprice, setMaxPrice] = useState('')
    const [error,setError] = useState(null)
    const [subject, setSubject] = useState('')
    const [rating, setRating] = useState('')

useEffect(() => {
    const fetchCourses = async () => {
      const response = await fetch('/api/courses/getCourses')
      const json = await response.json()
 //console.log(json)
    if(response.ok){
        setCourses(json)
    }
    }
    fetchCourses();
}, []);
const handleSubmit = async(e) => {  
    //const priceVal = {minprice:minprice,maxprice:maxprice}
    e.preventDefault();
    // const seacrhVal = {title:title,subject:subject,Instructor:Instructor}
    if (minprice!=='' && maxprice!=='' ){ 
    const response = await fetch(`/api/courses/filterbyprice/`+ minprice +'/'+ maxprice)
//await fetch(`/api/courses/filterbyprice?${new URLSearchParams(priceVal).toString()}`)
    const json = await response.json()
if(!response.ok){
    setError(json.error)
}
if(response.ok){
  setCourses(json); 
  setError(null)
//   setPrice(null)
    }
}
else {
    setError("please enter both fields!")
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
          setCourses(json);
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
          setCourses(json);
          console.log(json)
          setError(null)
          setSubject('')
          setRating('')
        }
    }
}


    return (
        <div className="home">
        <div className="courses">
            {courses && courses.map((course) => (
            <CourseDetails key={course._id} course={course} />
            ))}
        </div>
        <form className="pricefilter" onSubmit={handleSubmit}>
        <input 
        type={"text"}
        placeholder="enter min price"
        onChange={(e)=>setMinPrice(e.target.value)}/>
         <input 
        type={"text"}
        placeholder="enter max price"
        onChange={(e)=>setMaxPrice(e.target.value)}/>
        <button onChange={(e) => setCourses(courses)}
        >Filter by Price </button>
        {error && <div className="error">{error}</div>}
</form>
<form className="subjectratingfilter" onSubmit={handleSubmit2}>
        <input className="subjectfilter" 
        type={"text"}
        placeholder="filter by subject"
        onChange={(e)=>setSubject(e.target.value)}/>
         <input  className="ratingfilter" 
        type={"text"}
        placeholder="filter by rating"
        onChange={(e)=>setRating(e.target.value)}/>
        <button onChange={(e) => setCourses(courses)}>Filter</button>
        {/* {error && <div className="error">{error}</div>} */}
</form>
        </div>
    );

}

export default Home;
