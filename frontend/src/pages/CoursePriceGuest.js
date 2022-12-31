import {useEffect,useState} from 'react';
import CourseDetails3 from '../components/courseDetails3';


const GuestPrices = () => {

    const [courses,setCourses] = useState(null);

useEffect(() => {
    const fetchCourses = async () => {
      const response = await fetch('/api/guest/getpriceof1course')
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
            <CourseDetails3 key={course._id} course={course} />
            ))}
        </div>
        </div>
    );

}

export default GuestPrices;