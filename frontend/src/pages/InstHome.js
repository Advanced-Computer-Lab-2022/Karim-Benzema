import {useEffect,useState} from 'react';
import React from 'react';
//components 

import InstCoursesOnly from '../components/instCoursesOnly';
import AllCoursesInst from '../components/allCoursesInst';
import NavbarInst from '../components/navbarInst';
const InstHome = () => {
    const [courses,setCourses] = useState(null);
    const [courses2, setCourses2] = useState(null);
    const [rating, setRating] = useState('')
    const [search,setSearch]=useState('')
    const [minprice, setMinPrice] = useState('')
    const [maxprice, setMaxPrice] = useState('')
    const [subject, setSubject] = useState('')
    const [subject2, setSubject2] = useState('')
    const [price, setPrice] = useState('')
    const [error,setError] = useState(null)
    const [error1,setError1] = useState(null)
    const [error2,setError2] = useState(null)
    const [error3,setError3] = useState(null)

    const params = new URLSearchParams(window.location.search);
    const instid = params.get('id');
  

useEffect(() => {
    const fetchCourses = async () => {
      const response = await fetch('/api/instructor/viewCourses/'+instid)
      const json = await response.json()
 
    if(response.ok){
        setCourses(json)
    }
    }
    const fetchCourses2 = async () => {
        const response = await fetch('/api/courses/getCourses')
        const json = await response.json()
   
      if(response.ok){
          setCourses2(json)
      }
      }
    fetchCourses();
    fetchCourses2();   
}

, []);
const handleSubmit = async(e) => {  
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
const handleSubmit4 = async(e) => {  
    e.preventDefault();
    const inputVal= {subject2:subject2,price:price}
    if(subject2==='' || price===''){ //or
        const response= await fetch(`/api/instructor/filter?${new URLSearchParams(inputVal).toString()}`)
        const json = await response.json()
        if(!response.ok){
            setError(json.error)
        }
        if(response.ok){
          setCourses(json); 
          setSubject2('')
          setPrice('')
        }
    }
    else{ 
        setError2("Enter only one field")
    }
}
const handleSubmit6 = async(e) => {  
        e.preventDefault();
        window.location=`/AddCourse?id=`+instid
    
    }
    const handleSubmit7 = async(e) => {  
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
        setError("Enter both fields")
    }
    }
    const handleSubmit8= async (e) => {
        e.preventDefault();
        const user = {search}
        if (search!=='' ){ 
        const fetchedData = await fetch(`/api/courses/search?${new URLSearchParams(user).toString()}`);
    
       const json = await fetchedData.json()
    
    setCourses2(json)
        }
        else {
            setError1("Required field")
        }
    }
    const handleSubmit9= async (e) => {
        e.preventDefault();
        if (search!=='' ){ 
        const user = {search}
        const fetchedData = await fetch(`/api/courses/search?${new URLSearchParams(user).toString()}`);
    
       const json = await fetchedData.json()
    
    setCourses(json)
        }
        else {
            setError3("Required field")
        }
    }
 
    
    return (
        <div className="InstHome">
              <NavbarInst />
              <form className="bottom_container" onSubmit={handleSubmit4}>
        <input  
        type={"text"}
        placeholder="filter by subject"
        onChange={(e)=>setSubject2(e.target.value)}
        className="input"
        />
         &nbsp; &nbsp;  &nbsp;
         <input   
        type={"text"}
        placeholder="filter by price"
        onChange={(e)=>setPrice(e.target.value)}
        className="input"
        />
        &nbsp; &nbsp;  &nbsp;
        <button  className="green_btn" onChange={(e) => setCourses(courses)} >Filter
        </button>
        &nbsp; &nbsp;  &nbsp;
        {error2 && <div className="error_msg">{error2}</div>}
</form>
        <form className="bottom_container2" onSubmit={handleSubmit9}>
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
       <button  className="green_btn" onChange={(e) => setCourses(courses)} >Search
        </button>
        &nbsp; &nbsp;  &nbsp;
        {error3 && <div className="error_msg">{error3}</div>}
        </form>
        <form className="bottom_container2" onSubmit={handleSubmit6} >
                <button className="green_btn"> Create Course</button>
                   {error && <div className="error">{error}</div>}
            </form>
         <center> <h4>My Courses</h4></center> 
        <form className="course_container">
            {courses && courses.map((course) => (
            <InstCoursesOnly key={course._id} course={course}  id ={instid}/>
            ))}
        </form>
        <br></br>

        <form className="bottom_container" onSubmit={handleSubmit}>
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
<form className="bottom_container" onSubmit={handleSubmit7}>
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
<form className="bottom_container2" onSubmit={handleSubmit8}>
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
       <button  className="green_btn" onChange={(e) => setCourses2(courses2)} >
        Search </button>
        &nbsp; &nbsp;  &nbsp;
        {error1 && <div className="error_msg">{error1}</div>}
        </form>

        <center> <h4>All Courses </h4></center> 
        <form className="course_container">
            {courses2 && courses2.map((course) => (
            <AllCoursesInst key={course._id} course={course} id ={instid} />
            ))}
            {error && <div className="error">{error}</div>}
        </form>
          
        </div>
    );

}
export default InstHome;
