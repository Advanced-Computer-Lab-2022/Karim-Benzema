import {useEffect,useState} from 'react';
import React from 'react';
//components 

import InstCoursesOnly from '../components/instCoursesOnly';
import RatingReviewInst from '../components/ratingReviewInst';
import CourseDetailsGuest from '../components/courseDetailsGuest';
const InstHome = () => {
    const [courses,setCourses] = useState(null);
    const [courses2, setCourses2] = useState(null);
    const [error,setError] = useState(null)
    const [miniBio, setBio] = useState('')
    const [email, setEmail] = useState('')
    const [instructor, setInstructor] = useState('')
    const [rating, setRating] = useState('')
    const [search,setSearch]=useState('')
    const [minprice, setMinPrice] = useState('')
    const [maxprice, setMaxPrice] = useState('')
    const [subject, setSubject] = useState('')
    const [subject2, setSubject2] = useState('')
    const [price, setPrice] = useState('')
    const params = new URLSearchParams(window.location.search);
    const id = params.get('id');
  

useEffect(() => {
    const fetchCourses = async () => {
      const response = await fetch('/api/instructor/viewCourses/'+id)
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
    const fetchratingreviews = async () => {
        const response = await fetch('/api/instructor/getMyRating/'+id)
        const json = await response.json()
   
      if(response.ok){
        setInstructor(json)
      }
      }

    fetchCourses();
    fetchCourses2();            
    fetchratingreviews();
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
const handleSubmit1 = async (e) => {
    e.preventDefault();
    const user = {miniBio}
    const response = await fetch('/api/instructor/editbio/'+id, {
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
    setBio('');
    //setUsername('')
    setError(null)
    console.log("Changed!",json)
    }
}
const handleSubmit2 = async(e) => {  
    e.preventDefault();
    window.location=`/changePasswordInst?id=`+id

}
const handleSubmit3 = async (e) => {
    e.preventDefault();
    const user = {email}
    const response = await fetch('/api/instructor/editemail/'+id, {
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
          setError(null) 
          setSubject2('')
          setPrice('')
        }
    }
    else{ 
        setError("please enter only one field!")
    }
}
const handleSubmit5 = async(e) => {  
        e.preventDefault();
        window.location=`/selectCountryInst?id=`+id
    
    }
const handleSubmit6 = async(e) => {  
        e.preventDefault();
        window.location=`/AddCourse?id=`+id
    
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
        setError("please enter both fields!")
    }
    }
    const handleSubmit8= async (e) => {
        e.preventDefault();
        const user = {search}
        const fetchedData = await fetch(`/api/courses/search?${new URLSearchParams(user).toString()}`);
    
       const json = await fetchedData.json()
    
    setCourses2(json)
    }
    const handleSubmit9= async (e) => {
        e.preventDefault();
        const user = {search}
        const fetchedData = await fetch(`/api/courses/search?${new URLSearchParams(user).toString()}`);
    
       const json = await fetchedData.json()
    
    setCourses(json)
    }
    
const logout = async(e) => {
        e.preventDefault();
        const response =
        await fetch('/api/logout', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        }
})
const json = await response.json()
if(!response.ok){
    setError(json.error)
}
if(response.ok){
    setError(null)
    console.log("Logged out!",json)
    window.location=`/`
    }
}
    return (
        <div className="InstHome">
        <center> <h4>My Ratings</h4></center> 
        <form className="course_container">
        {instructor && instructor.map( (instructor) => (
            <RatingReviewInst key={instructor._id} instructor={instructor} />
            ))}
            {error && <div className="error">{error}</div>}
        </form>

         <center> <h4>My Courses</h4></center> 
        <form className="course_container">
            {courses && courses.map((course) => (
            <InstCoursesOnly key={course._id} course={course} />
            ))}
            {error && <div className="error">{error}</div>}
        </form>
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
</form>
        <form className="bottom_container " onSubmit={handleSubmit9}>
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

        <center> <h4>All Courses </h4></center> 
        <form className="course_container">
            {courses2 && courses2.map((course) => (
            <CourseDetailsGuest key={course._id} course={course} />
            ))}
            {error && <div className="error">{error}</div>}
        </form>

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
        {error && <div className="error">{error}</div>}
</form>
<form className="bottom_container " onSubmit={handleSubmit8}>
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

        <form className="bottom_container" onSubmit={handleSubmit1}>
                    <input  className="input" 
                    type={"text"}
                    placeholder="enter mini bio"
                    onChange={(e)=>setBio(e.target.value)}/>
                    &nbsp; &nbsp;  &nbsp;
                    <button className="green_btn" onChange={(e) => setBio(e.target.value)}>Edit MiniBio</button>
                    {error && <div className="error">{error}</div>}
            </form>
            <form className="bottom_container" onSubmit={handleSubmit3}>
                    <input  className="input" 
                    type={"text"}
                    placeholder="enter email"
                    onChange={(e)=>setEmail(e.target.value)}/>
                     &nbsp; &nbsp;  &nbsp;
                    <button className="green_btn" onChange={(e) => setEmail(e.target.value)}>Edit Email</button>
                    {error && <div className="error">{error}</div>}
            </form>

        <form className="bottom_container2" onSubmit={handleSubmit5} >
                <button className="green_btn">Select Country</button>
                   {error && <div className="error">{error}</div>}
            </form>
            <form className="bottom_container2" onSubmit={handleSubmit2} >
                <button className="green_btn"> Change password</button>
                    {error && <div className="error">{error}</div>}
            </form>
            <form className="bottom_container2" onSubmit={handleSubmit6} >
                <button className="green_btn"> Create Course</button>
                   {error && <div className="error">{error}</div>}
            </form>
            <form className="bottom_container2" onSubmit={logout}>
            <button className="green_btn"> Log Out</button>
            </form>
     
      
    
          
        </div>
    );

}
export default InstHome;
