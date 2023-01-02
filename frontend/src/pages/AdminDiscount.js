import {useEffect,useState} from 'react';
import React from 'react';
//components 
import DiscountDetails from '../components/discountDetails';
import NavBar from '../components/Navbar';
//import { set } from 'mongoose';

const AddDiscount = () => {
    const [courses,setCourses] = useState(null);
   //const [subtitles,setSubtitles] = useState(null);
    const [discount,setDiscount] = useState(null);
    const [validDate,setvalidDate] = useState(null);
    const [error,setError] = useState(null)
    const params = new URLSearchParams(window.location.search);
    const id = params.get('id');
    useEffect(() => {
        const fetchCourses = async () => {
        const response = await fetch('/api/courses/getCourses')
        const json = await response.json()
        console.log(json)
        if(response.ok){
            setCourses(json)
        }
        }
        fetchCourses();
    }, []);
    
    const handleSubmit = async(e) => {  
        e.preventDefault();
        const inputVal= {discount:discount,validDate:validDate}
        if ((discount!=='' )&&(validDate!=='')){ 
            const response = await fetch('/api/admin/discountall', {
                method: 'PATCH',
                body: JSON.stringify(inputVal),
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
      setDiscount('')
      setvalidDate('')
        }
    }
    }
    return (
        <div className="InstHome">
             <NavBar />
        <div className="course_container">
            {courses && courses.map((course) => (
            < DiscountDetails key={course._id} course={course} />
            ))}
        </div>
       <br></br>
        <form className="bottom_container" onSubmit={handleSubmit}>
        <input className="input" 
        type={"text"}
        placeholder="discount"
        onChange={(e)=>setDiscount(e.target.value)}
        />
           &nbsp; &nbsp;  &nbsp;
        <input className="input" 
        type={"text"}
        placeholder="valid until date"
        onChange={(e)=>setvalidDate(e.target.value)}
        />
             &nbsp; &nbsp;  &nbsp;
        <button className='green_btn'  onChange={(e) => handleSubmit()}>Add discount</button>
        {error && <div className="error">{error}</div>}
        </form>

        

        </div>
        
    );
}

export default AddDiscount;