
// import {useEffect, useState } from 'react';
// import React from 'react';
// import CourseDetails from '../components/courseDetails';
// const FilterPrice= () => {
//     const [price, setPrice] = useState('')
//     const [courses,setCourses] = useState(null)
//     const [error,setError] = useState(null)
    
//     const handleSubmit = async(e) => {
//         e.preventDefault();
//         // const user = {price}
//         const response = await fetch('/api/courses/filterbyprice')
//         const json = await response.json()
//     if(!response.ok){
        
//         setError(json.error)
//     }
//     if(response.ok){
//       setCourses(json); 
//       setError(null)
//         }
//     }

//     return (
//         <div className="home">
//         <div className="courses">
//             {courses && courses.map( (course) => (
//             <CourseDetails key={course._id} course={course} />
//             ))}
//         </div>
//         <form className="pricefilter" onSubmit={handleSubmit}>
//         <input 
//         type={"text"}
//         placeholder="filter by price"
//         onChange={(e)=>setPrice(e.target.value)}/>
//         <button onClick={(e) => setCourses(courses)}>Filter by Price </button>
//         {error && <div className="error">{error}</div>}
// </form>
//         </div>
// )
// }
// export default FilterPrice;
