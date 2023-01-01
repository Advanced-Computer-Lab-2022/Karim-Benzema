import { useEffect, useState } from 'react';
import React from 'react';
import CourseReqs from '../components/courseReqs';


const AdminRequest =()=> {
  const [problemsit,setProblemsit] = useState('')
  const [problemsinst,setProblemsinst] = useState('')
  const [problemsct,setProblemsct] = useState('')
  const [cts,setCts] = useState('')

    useEffect(() => {
        const fetchCts = async () => {
            const response = await fetch('/api/admin/getrequests')
            const json = await response.json()

            if (response.ok) {
                setCts(json)
            }
        }

        fetchCts();
    }
        , []);

return(
    <div className="problems">
    <center> <h4>CT Requests</h4></center> 
   <div className="course_container">
       {cts && cts.map((ct) => (
     <CourseReqs key={ct._id} ct={ct} />
       ))}
   </div>
  </div>
)
}
export default AdminRequest
