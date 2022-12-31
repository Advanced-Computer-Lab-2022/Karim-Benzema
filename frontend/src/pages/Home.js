import {useEffect,useState} from 'react';
import React from 'react';
//components 
import CourseDetailsGuest from '../components/courseDetailsGuest';
import NavbarGuest from '../components/navbarGuest';

const Home = () => {
    const [courses,setCourses] = useState(null);
    const [minprice, setMinPrice] = useState('')
    const [maxprice, setMaxPrice] = useState('')
    const [error,setError] = useState(null)
    const [subject, setSubject] = useState('')
    const [rating, setRating] = useState('')
    const [search,setSearch]=useState('')

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
const handleSubmit3 = async (e) => {
    e.preventDefault();
    const user = {search}
    const fetchedData = await fetch(`/api/courses/search?${new URLSearchParams(user).toString()}`);

   const json = await fetchedData.json()

setCourses(json)
}


    return (
        <div className="home">
         <NavbarGuest />
        <center><h4>All Courses</h4></center> 
        <form className={"course_container"}>
            {courses && courses.map((course) => (
            <CourseDetailsGuest  key={course._id} course={course}/>
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
        <button className="green_btn" onChange={(e) => setCourses(courses)}
        >Filter by Price  </button>
        {error && <div className="error">{error}</div>}
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
        <button  className="green_btn" onChange={(e) => setCourses(courses)} >Filter
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
       <button  className="green_btn" onChange={(e) => setCourses(courses)} >Search
        </button>
        </form>
        </div>
    );

}

export default Home;
