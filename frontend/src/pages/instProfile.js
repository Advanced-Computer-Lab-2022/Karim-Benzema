//components 
import {useEffect,useState} from 'react';
import React from 'react';

import RatingReviewInst from '../components/ratingReviewInst';
const InstProfile = () => {
    const [miniBio, setBio] = useState('')
    const [email, setEmail] = useState('')
    const [instructor, setInstructor] = useState('')
    const [error,setError] = useState(null)
    const [error1,setError1] = useState(null)

    const params = new URLSearchParams(window.location.search);
    const id = params.get('id');

    useEffect(() => {
        
        const fetchratingreviews = async () => {
            const response = await fetch('/api/instructor/getMyRating/'+id)
            const json = await response.json()
       
          if(response.ok){
            setInstructor(json)
          }
          }
            
        fetchratingreviews();
    }
    
    , []);

    const handleSubmit1 = async (e) => {
        e.preventDefault();
        const user = {miniBio}
        const response = await fetch('/api/instructor/editbio/'+id, {
            method: 'PATCH',
            body:JSON.stringify(user),
            headers: {
                'Content-Type': 'application/json'
            }
    })
    const json = await response.json()
    if(!response.ok){
        setError(json.error)
    }
    if(response.ok){
        setBio('');
        //setUsername('')
        setError('Edited!')
        console.log("Changed!",json)
        }
    }
    const handleSubmit2 = async(e) => {  
        e.preventDefault();
        window.location=`/changePasswordInst?id=`+id
    
    }
    const handleSubmit3 = async (e) => {
        e.preventDefault();
        const user = {email}
        const response = await fetch('/api/instructor/editemail/'+id, {
            method: 'PATCH',
            body:JSON.stringify(user),
           // body: JSON.stringify(x),
            headers: {
                'Content-Type': 'application/json'
            }
    })
    const json = await response.json()
    if(!response.ok){
        setError1(json.error)
    }
    if(response.ok){
        setEmail('');
        //setUsername('')
        setError1('Edited!')
        console.log("Changed!",json)
        }
    }
    const handleSubmit5 = async(e) => {  
        e.preventDefault();
        window.location=`/selectCountryInst?id=`+id
    
    }

    return (
        <div className="instprofile">
             <center> <h4>My Ratings</h4></center> 
        <form className="course_container">
        {instructor && instructor.map( (instructor) => (
            <RatingReviewInst key={instructor._id} instructor={instructor} />
            ))}
        </form>
        <br></br>
        <br></br>
        <div className='form_container2'>
        <form className="bottom_container2" onSubmit={handleSubmit5} >
                <button className="green_btn">Select Country</button>
            </form>
            <form className="bottom_container2" onSubmit={handleSubmit2} >
                <button className="green_btn"> Change password</button>
            </form>
            </div>
            <br></br>
            <br></br>
            <form className="bottom_container" onSubmit={handleSubmit1}>
                    <input  className="input" 
                    type={"text"}
                    placeholder="enter mini bio"
                    onChange={(e)=>setBio(e.target.value)}/>
                    &nbsp; &nbsp;  &nbsp;
                    <button className="green_btn" onChange={(e) => setBio(e.target.value)}>Edit MiniBio</button>
                    <form className='bottom_container'>
                    {error && <div className="error_msg2">{error}</div>}
                    </form>
            </form>
            <form className="bottom_container" onSubmit={handleSubmit3}>
                    <input  className="input" 
                    type={"text"}
                    placeholder="enter email"
                    onChange={(e)=>setEmail(e.target.value)}/>
                     &nbsp; &nbsp;  &nbsp;
                    <button className="green_btn" onChange={(e) => setEmail(e.target.value)}>Edit Email</button>
                    <form className='bottom_container'>
                    {error1 && <div className="error_msg2">{error1}</div>}
                    </form>
            </form>
        </div>
        
    );

}

export default InstProfile;
