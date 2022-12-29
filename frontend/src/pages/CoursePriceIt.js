import {useEffect,useState} from 'react';
import CourseDetails2 from '../components/courseDetails2';


const ItPrices = () => {

    const [courses,setCourses] = useState(null);

useEffect(() => {
    const fetchCourses = async () => {
      const response = await fetch('/api/it/getpriceof1course')
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
            <CourseDetails2 key={course._id} course={course} />
            ))}
        </div>
        </div>
    );

}

export default ItPrices;