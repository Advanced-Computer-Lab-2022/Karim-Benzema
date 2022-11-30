import {useEffect,useState} from 'react';

//components 
import CourseDetails1 from '../components/courseDetails1';


const ItCourses = () => {

    const [courses,setCourses] = useState(null);

useEffect(() => {
    const fetchCourses = async () => {
      const response = await fetch('/api/it/viewcourses')
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
            <CourseDetails1 key={course._id} course={course} />
            ))}
        </div>
        </div>
    );

}

export default ItCourses;