import {useEffect,useState} from 'react';

//components 
import CourseDetailsCt from '../components/courseDetailsCt';


const CtCourses = () => {

    const [courses,setCourses] = useState(null);

useEffect(() => {
    const fetchCourses = async () => {
      const response = await fetch('/api/ct/viewcourses')
      const json = await response.json()
 
    if(response.ok){
        setCourses(json)
    }

    }

    fetchCourses();
}, []);

    return (
        <div className="home">
        <div className="courses">
            {courses && courses.map( (course) => (
            <CourseDetailsCt key={course._id} course={course} />
            ))}
        </div>
        </div>
    );

}

export default CtCourses;