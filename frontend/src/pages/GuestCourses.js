import {useEffect,useState} from 'react';

//components 
import CourseDetailsGuest from '../components/courseDetailsGuest';


const GuestCourses = () => {

    const [courses,setCourses] = useState(null);

useEffect(() => {
    const fetchCourses = async () => {
      const response = await fetch('/api/guest/viewcourses')
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
            <CourseDetailsGuest key={course._id} course={course} />
            ))}
        </div>
        </div>
    );

}

export default GuestCourses;