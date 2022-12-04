import { useEffect, useState } from 'react';
import React from 'react';
//components 
import CoursesOnly2 from '../components/coursesOnly2';

const CThome = () => {
    const [courses, setCourses] = useState(null);
   
    useEffect(() => {
        const fetchCourses = async () => {
            const response = await fetch('/api/ct/getcoursebyctid')
            const json = await response.json()

            if (response.ok) {
                setCourses(json)
            }
        }
        fetchCourses();
    }
        , []);
    const handleSubmit3 = async(e) => {  
        e.preventDefault();
        window.location=`/CtCourses`
    
    }

    const handleSubmit4 = async(e) => {  
        e.preventDefault();
        window.location=`/selectCountry`
    
    }
    const handleSubmit5 = async(e) => {  
        e.preventDefault();
        window.location=`/changePasswordCt`
    
    }
    return (
        <div className="CThome">
            <div className="courses">
                {courses && courses.map((course) => (
                    <CoursesOnly2 key={course._id} course={course} />
                ))}
            </div> 
            <form className="All Courses" onSubmit={handleSubmit3} >
                <button>
                    View All Courses</button>
            </form>
            <form className="Select Country" onSubmit={handleSubmit4} >
                <button>
                   Select Country</button>
            </form>
            <form className="change password" onSubmit={handleSubmit5} >
                <button>
                    Change password</button>
            </form>
        </div>
    );

}
export default CThome;