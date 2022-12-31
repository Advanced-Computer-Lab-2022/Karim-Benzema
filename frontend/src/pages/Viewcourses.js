import {useEffect,useState} from 'react';

//components 
import CourseD from '../components/courseD';


const Viewcourses = () => {

    const [courses,result] = useState(null);

useEffect(() => {
    const fetchCourses = async () => {
      const response = await fetch('/api/it/viewcourses')
      const json = await response.json()
 
    if(response.ok){
        result(json)
    }

    }
    fetchCourses();
}, []);

    return (
        <div className="view">
        <div className="courses">
            {courses && courses.map( (course) => (
            <CourseD key={course._id} course={course} />
            ))}
        </div>
        </div>
    );

}

export default Viewcourses;