import { useEffect, useState } from 'react';
import React from 'react';
import NavBar from '../components/Navbar';

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
            window.location.href =`/ITrefunds?id=`+id;
        }
        const handlesubmit3 = async(e) =>{
            e.preventDefault();
            window.location.href =`/ReportedProblems?id=`+id;//done
        }
        const handlesubmit4 = async(e) =>{
            e.preventDefault();
            window.location.href =`/CourseRequests?id=`+id;//done
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

    return (
        <div className='Admin Home'>
         <NavBar/>
         <br></br><br></br>
         <div className='form_container2'>
            <form className="bottom_container2"  onSubmit={handlesubmit1}>
            <button className="green_btn" >Add Admin</button>
            </form>
            <form className="bottom_container2"  onSubmit={handlesubmit2}>
            <button className="green_btn" >Add Corporate Trainee</button>
            </form>
            <form className="bottom_container2" onSubmit={handlesubmit} >
                <button className="green_btn" > Add Instructor</button>
            </form>
            <form className="bottom_container2" onSubmit={handlesubmit3}>
           <button className="green_btn">Reported Problems</button>
            </form>
            <form className="bottom_container2" onSubmit={handlesubmit4}>
           <button className="green_btn">Course Requests</button>
            </form>
            <form className="bottom_container2" onSubmit={handlesubmit5}>
           <button className="green_btn">Add Discount</button>
            </form>
            <form className="bottom_container2" onSubmit={handlesubmit6}>
           <button className="green_btn">Refund</button>
            </form>
            </div>
           
        </div>
    );

}
export default AdminHome;