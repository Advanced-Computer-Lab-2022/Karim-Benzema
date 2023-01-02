//components 
import {useEffect,useState} from 'react';
import React from 'react';

import RatingReviewInst from '../components/ratingReviewInst';
import NavBar from '../components/Navbar';
const InstProfile = () => {
    const [miniBio, setBio] = useState('')
    const [email, setEmail] = useState('')
    const [instructor, setInstructor] = useState('')
    const [reviews, setReviews] = useState('')

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
          const fetchreviews = async ()=>{
            const response = await fetch('/api/instructor/getMyReviews/'+id)
            const json = await response.json()
       
            if(response.ok){
              setReviews(json)
            }
          }
          const money = async ()=>{
            const response = await fetch('/api/instructor/calculateEarnings/'+id)

          }
          
         fetchreviews();   
        fetchratingreviews();
        money();
    }
    
    , []);

    const handleSubmit1 = async(e) => {  
        e.preventDefault();
        window.location=`/editemail?id=`+id
    
    }
    const handleSubmit2 = async(e) => {  
        e.preventDefault();
        window.location=`/changePasswordInst?id=`+id
    
    }
    const handleSubmit3 = async(e) => {  
        e.preventDefault();
        window.location=`/editbio?id=`+id
    
    }
    const handleSubmit5 = async(e) => {  
        e.preventDefault();
        window.location=`/SelectCountriesInst?id=`+id
    
    }

    return (
        <div className="instprofile">
             <NavBar />
             <center> <h4>My Profile</h4></center> 
        <form className="course_container">
        {instructor && instructor.map( (instructor) => (
            <RatingReviewInst key={instructor._id} instructor={instructor} />
            ))}
        </form>
        <br></br>
        <br></br>
        <div>
      {reviews && reviews.map(review => (
        <div key={review._id}>
          <p>{review.reviews}</p>
        
        </div>
      ))}
    </div>
        <div className='form_container2'>
        <form className="bottom_container2" onSubmit={handleSubmit5} >
                <button className="green_btn">Select Country</button>
            </form>
            <form className="bottom_container2" onSubmit={handleSubmit2} >
                <button className="green_btn"> Change password</button>
            </form>
            <form className="bottom_container2" onSubmit={handleSubmit1}>
                    <button className="green_btn" onChange={(e) => setBio(e.target.value)}>Edit MiniBio</button>
            </form>
            <form className="bottom_container2" onSubmit={handleSubmit3}>
                    <button className="green_btn" onChange={(e) => setEmail(e.target.value)}>Edit Email</button>
            </form>
            </div>
          
        </div>
        
    );

}

export default InstProfile;
