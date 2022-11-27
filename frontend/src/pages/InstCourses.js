import {useEffect,useState} from 'react';

//components 
import CourseDetailsinst from '../components/courseDetailsinst';


const InstCourses = () => {

    const [courses,setCourses] = useState(null);

useEffect(() => {
    const fetchCourses = async () => {
      const response = await fetch('/api/instructor/viewcourses')
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
            <CourseDetailsinst key={course._id} course={course} />
            ))}
        </div>
        </div>
    );

}

export default InstCourses;