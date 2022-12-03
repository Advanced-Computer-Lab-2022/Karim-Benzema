// import {useEffect,useState} from 'react';
// import React from 'react';
// //components 
// import CourseDetails from '../components/courseDetails';

// const OneInstructor = () => {
//     const [courses,setCourses] = useState(null);
//     const [rating,setRating] = useState(null);
//     const [error,setError] = useState(null)
//     const params = new URLSearchParams(window.location.search);
//     const id = params.get('id');
//     useEffect(() => {
//         const fetchCourses = async () => {
//         const response = await fetch('/api/instructor/getinstbyid/'+id)
//         const json = await response.json()
     
//         if(response.ok){
//             setCourses(json)
//         }
//         }
//         fetchCourses();
//     }, []);
//     const handleSubmit = async(e) => {  
//         e.preventDefault();
//         const inputVal= {id:id,rating:rating}
//         if (rating!==''){ 
//         const response= await fetch(`/api/it/rateInstructor?${new URLSearchParams(inputVal).toString()}`)
//         const json = await response.json()
//     if(!response.ok){
//         setError(json.error)
//     }
//     if(response.ok){
//       setError(null)
//       setRating('')
//         }
//     }
//     }
//     return (
//         <div className="ITHome">
//         <div className="courses">
//             {courses && courses.map((course) => (
//             < CourseDetails key={course.id} course={course} />
//             ))}
//         </div>
//         <form className="rate course" onSubmit={handleSubmit}>
//         <input className="rate course" 
//         type={"text"}
//         placeholder="rate course"
//         onChange={(e)=>setRating(e.target.value)}
//         />
//         <button onChange={(e) => setRating(e.target.value)}>Add Rating</button>
//         {error && <div className="error">{error}</div>}
// </form>
//         </div>
        
//     );
// }

// export default OneInstructor;