import { useEffect, useState } from 'react';
import React from 'react';
//components 
import CoursesOnly from '../components/coursesOnly';

const ItHome = () => {
    const [courses, setCourses] = useState(null);

    useEffect(() => {
        const fetchCourses = async () => {
            const response = await fetch('/api/it/getcoursebyitid')
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
        window.location=`/ItCourses`
    
    }

    const handleSubmit4 = async(e) => {  
        e.preventDefault();
        window.location=`/selectCountryIt`
    
    }
    const handleSubmit5 = async(e) => {  
        e.preventDefault();
        window.location=`/changePasswordIt`
    
    }
    return (
        <div className="ITHome">
            <div className="courses">
                {courses && courses.map((course) => (
                    <CoursesOnly key={course._id} course={course} />
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
export default ItHome;