import { useEffect, useState } from 'react';
import React from 'react';
//components 
import CoursesOnly2 from '../components/coursesOnly2';
import CourseDetailsGuest from '../components/courseDetailsGuest';
import CourseDetailsCt from '../components/courseDetailsCt';

const AdminHome = () => {
    const params = new URLSearchParams(window.location.search);
    const id = params.get('id');
    const [error, setError] = useState(null)

    useEffect(() => {
      
    }
        , []);


       
        const handlesubmit5 = async(e) =>{
            e.preventDefault();
            window.location.href =`/AddDiscount?id=`+id;//done
        }
        const handlesubmit6 = async(e) =>{
            e.preventDefault();
            window.location.href =`/refund?id=`+id;//done
        }
        const handlesubmit3 = async(e) =>{
            e.preventDefault();
            window.location.href =`/ReportedProblems?id=`+id;
        }
        const handlesubmit4 = async(e) =>{
            e.preventDefault();
            window.location.href =`/CourseRequests?id=`+id;
        }
        const handlesubmit2 = async(e) =>{
            e.preventDefault();
            window.location.href =`/AddCT?id=`+id;//done
        }
        const handlesubmit1 = async(e) =>{
            e.preventDefault();
            window.location.href =`/AddAdmin?id=`+id;//done
        }
        const handlesubmit = async(e) =>{
            e.preventDefault();
            window.location.href =`/AddInstructor?id=`+id;//done
        }


const logout = async(e) => {
    e.preventDefault();
    const response =
    await fetch('/api/logout', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    }
})
const json = await response.json()
if(!response.ok){
setError(json.error)
}
if(response.ok){
setError(null)
console.log("Logged out!",json)
window.location=`/`
}
}
    return (
        <div className='Admin Home'>
               &nbsp; &nbsp;  &nbsp;&nbsp;&nbsp;
            <form className="bottom_container2"  onSubmit={handlesubmit1}>
            <button className="green_btn" >Add Admin</button>
            </form>
            &nbsp; &nbsp;  &nbsp;&nbsp;&nbsp;
            <form className="bottom_container2"  onSubmit={handlesubmit2}>
            <button className="green_btn" >Add Corporate Trainee</button>
            </form>
            &nbsp; &nbsp;  &nbsp;&nbsp;&nbsp;
            <form className="bottom_container2" onSubmit={handlesubmit} >
                <button className="green_btn" > Add Instructor</button>
            </form>
            &nbsp; &nbsp;  &nbsp;&nbsp;&nbsp;
            <form className="bottom_container2" onSubmit={logout}>
           <button className="green_btn">Log Out</button>
            </form>
            <br></br>
            &nbsp; &nbsp;  &nbsp;&nbsp;&nbsp;
            <form className="bottom_container2" onSubmit={handlesubmit3}>
           <button className="green_btn">Reported Problems</button>
            </form>
            &nbsp; &nbsp;  &nbsp;&nbsp;&nbsp;
            <form className="bottom_container2" onSubmit={handlesubmit4}>
           <button className="green_btn">Course Requests</button>
            </form>
            &nbsp; &nbsp;  &nbsp;&nbsp;&nbsp;
            <form className="bottom_container2" onSubmit={handlesubmit5}>
           <button className="green_btn">Add Discount</button>
            </form>
            &nbsp; &nbsp;  &nbsp;&nbsp;&nbsp;
            <form className="bottom_container2" onSubmit={handlesubmit6}>
           <button className="green_btn">Refund</button>
            </form>
            <br></br>
            &nbsp; &nbsp;  &nbsp;&nbsp;&nbsp;
           
        </div>
    );

}
export default AdminHome;