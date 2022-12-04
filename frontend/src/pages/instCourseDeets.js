import {useEffect,useState} from 'react';
import React from 'react';
//components 
import CourseDetails from '../components/courseDetails';
import SubtitleDetails from '../components/subtitleDetails';
//import { set } from 'mongoose';

const InstCourseDeets = () => {
    const [courses,setCourses] = useState(null);
   //const [subtitles,setSubtitles] = useState(null);
    const [discount,setDiscount] = useState(null);
    const [period,setperiod] = useState(null);
    const [preview,setPreview] = useState(null);
    const [error,setError] = useState(null)
    const params = new URLSearchParams(window.location.search);
    const id = params.get('id');
    useEffect(() => {
        const fetchCourses = async () => {
        const response = await fetch('/api/courses/getcoursebyid/'+id)
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
        const inputVal= {discount:discount,period:period,id:id}
        if ((discount!=='' )&&(period!=='')){ 
            const response = await fetch('/api/instructor/discount', {
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
      setperiod('')
        }
    }
    }
    const handleSubmit2 = async(e) => {  
        e.preventDefault();
        window.location=`/Subtitle?id=`+id
    
    }
    //     const inputVal= {discount:discount,period:period,id:id}
    //     if ((discount!=='' )&&(period!=='')){ 
    //     //     const response = await fetch('/api/instructor/discount', {
    //     //         method: 'PATCH',
    //     //         body: JSON.stringify(inputVal),
    //     //         headers: {
    //     //             'Content-Type': 'application/json'
    //     //         }
    //     // })
    //    // const json = await response.json()
    // // if(!response.ok){
    // //     setError(json.error)
    // // }
    // // if(response.ok){
    // //   setError(null)
    // //   setDiscount('')
    // //   setperiod('')
    // //     }
    // // }
    // }


    const handleSubmit1 = async(e) => {  
        e.preventDefault();
        const inputVal= {id:id,preview:preview}
        console.log(preview)
        if (preview!=='' ){ 
            const response = await fetch('/api/instructor/preview', {
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
      setPreview('')
        }
    }
    }
    return (
        <div className="ITHome">
        <div className="courses">
            {courses && courses.map((course) => (
            < CourseDetails key={course._id} course={course} />
            ))}
        </div>
       
        <form className="promotion" onSubmit={handleSubmit}>
        <input className="promotion" 
        type={"text"}
        placeholder="discount"
        onChange={(e)=>setDiscount(e.target.value)}
        />
      
        <input className="promotion1" 
        type={"text"}
        placeholder="valid until date"
        onChange={(e)=>setperiod(e.target.value)}
        />
        <button onChange={(e) => handleSubmit()}>Add discount</button>
        {error && <div className="error">{error}</div>}
        </form>


        <form className="preview" onSubmit={handleSubmit1}>
        <input className="previewLink" 
        type={"text"}
        placeholder="link"
        onChange={(e)=>setPreview(e.target.value)}
        />
        <button onChange={(e) => handleSubmit1()}>Upload Link</button>
        {error && <div className="error">{error}</div>}
        </form>
        <form className="Subtitles" onSubmit={handleSubmit2} >
        <button  >View Subtitles</button>
        {error && <div className="error">{error}</div>}
        </form>
        </div>
        
    );
}

export default InstCourseDeets;