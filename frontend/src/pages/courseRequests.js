
//components 
import { useEffect, useState } from 'react';
import React from 'react';
import CourseReqs from '../components/courseReqs';

const CourseRequests = () => {
    const [cts, setCts] = useState(null);
    useEffect(() => {
        const fetchCourses = async () => {
            const response = await fetch('/api/admin/getrequests');
            const json = await response.json()

            if (response.ok) {
                setCts(json)
            }
        }
        fetchCourses();
    }
        , []);
    return (
        <div className="home">
        <div className="create">
        {cts && cts.map((ct) => (
                    <CourseReqs key={ct._id} ct={ct} />
                ))}
        </div>
        </div>
        
    );

}

export default CourseRequests;
