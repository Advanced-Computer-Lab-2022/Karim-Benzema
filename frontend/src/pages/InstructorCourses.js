import {useEffect,useState} from 'react';
import NavBar from '../components/Navbar';

//components 
import ViewInstructorCourses from '../components/viewInstructorCourses';


const InstructorCourses = () => {

    const [courses,setCourses] = useState(null);

useEffect(() => {
    const fetchCourses = async () => {
      const response = await fetch('/api/instructor/name')
      const json = await response.json()
 
    if(response.ok){
        setCourses(json)
    }

    }

    fetchCourses();
}, []);

    return (
        <div className="home">
             <NavBar />
        <div className="courses">
            {courses && courses.map( (course) => (
            <ViewInstructorCourses key={course._id} course={course} />
            ))}
        </div>
        </div>
    );

}

export default InstructorCourses;