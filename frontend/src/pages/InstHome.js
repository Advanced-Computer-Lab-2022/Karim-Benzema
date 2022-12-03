import {useEffect,useState} from 'react';
import React from 'react';
//components 
import InstCoursesOnly from '../components/instCoursesOnly';
import RatingReviewInst from '../components/ratingReviewInst';
const InstHome = () => {
    const [courses,setCourses] = useState(null);
    const [minprice, setMinPrice] = useState('')
    const [maxprice, setMaxPrice] = useState('')
    const [error,setError] = useState(null)
    const [subject, setSubject] = useState('')
    const [rating, setRating] = useState('')
    const [miniBio, setBio] = useState('')
    const [email, setEmail] = useState('')
    const [instructor, setInstructor] = useState('')
    // const [reviews, setReview] = useState('')
    // const [ratingInst2, setRratingInst2] = useState('')
    // const [ratingReview, setRatingReview] = useState('')

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
const handleSubmit = async(e) => {  
    //const priceVal = {price:price}
    e.preventDefault();
    // const seacrhVal = {title:title,subject:subject,Instructor:Instructor}
    if (minprice!=='' && maxprice!=='' ){ 
        const response = await fetch(`/api/courses/filterbyprice/`+ minprice +'/'+ maxprice)
    const json = await response.json()
if(!response.ok){
    setError(json.error)
}
if(response.ok){
  setCourses(json); 
 // setPrice('')
  setError(null)

    }
}
else {
    setError("please enter both fields!")
}
}
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
          setSubject('')
          setRating('')
          setError(null) 
          
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
          setSubject('')
          setRating('')
          setError(null)
        
        }
    }
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
    return (
        <div className="InstHome">
        <div className="Instcourses">
            {courses && courses.map((course) => (
            <InstCoursesOnly key={course._id} course={course} />
            ))}
            {/* {error && <div className="error">{error}</div>} */}
        </div>
        <div className="RatingReviewInst">
        {instructor && instructor.map( (instructor) => (
            <RatingReviewInst key={instructor._id} instructor={instructor} />
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
<form className="edit bio" onSubmit={handleSubmit1}>
         <input  className="edit bio" 
        type={"text"}
        placeholder="enter mini bio"
        onChange={(e)=>setBio(e.target.value)}/>
        <button onChange={(e) => setBio(e.target.value)}>Edit MiniBio</button>
        {/* {error && <div className="error">{error}</div>} */}
</form>
<form className="edit email" onSubmit={handleSubmit3}>
         <input  className="edit mail" 
        type={"text"}
        placeholder="enter email"
        onChange={(e)=>setEmail(e.target.value)}/>
        <button onChange={(e) => setEmail(e.target.value)}>Edit Email</button>
        {/* {error && <div className="error">{error}</div>} */}
</form>






<form className="change password" onSubmit={handleSubmit2} >
                <button
                    onClick={() => window.location.href = "/changePasswordInst"}>
                    Change password</button>
            </form>
        </div>
    );

}
export default InstHome;