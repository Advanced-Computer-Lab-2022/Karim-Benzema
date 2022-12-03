// import {useEffect,useState} from 'react';
// import React from 'react';
// //components 
// import CourseDetails from '../components/courseDetails';
// import CoursesOnly from '../components/coursesOnly';
// import InstructorsOnly from '../components/instructorsOnly';
// import instructor from '../../../backend/models/instructorModel';

// const InstDeets = () => {
 
//     const [instructor,setInstructor] = useState(null);
//     const [rating,setRating] = useState(null);
//     const [error,setError] = useState(null)
//     const params = new URLSearchParams(window.location.search);
//     const id = params.get('id');
//     useEffect(() => {
//         const fetchInst = async () => {
//         const response = await fetch('/api/instructor/get/')
//         const json = await response.json()
     
//         if(response.ok){
//             setInstructors(json)
//         }
//         }
//         fetchInst();
// }, []);
//     return (
//         <div className="ITHome">
//         <div className="instructors">
//             {instructors && instructors.map((instructor) => (
//             < oneInst key={instructor.id} instructor={instructor} />
//             ))}
//         </div>
//         </div>
        
//     );
// }

// export default InstDeets;