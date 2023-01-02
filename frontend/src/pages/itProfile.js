import {useEffect,useState} from 'react';
import React from 'react';

import ProfileIt from '../components/profileIt';
import NavBar from '../components/Navbar';


const ItProfile = () => {
    const [it, setIt] = useState('')
    const [reviews, setReviews] = useState('')
    const [isDeleting, setIsDeleting] = useState(false);

    const params = new URLSearchParams(window.location.search);
    const itid = params.get('id');
    useEffect(() => {
        
        const fetchit = async () => {
            const response = await fetch('/api/it/getIt/'+itid)
            const json = await response.json()
       
          if(response.ok){
            setIt(json)
          }
          }
          const fetchreviews = async ()=>{
            const response = await fetch('/api/it/getMyReviews/'+itid)
            const json = await response.json()
       
            if(response.ok){
              setReviews(json)
            }
          }
            
          fetchit();
          fetchreviews();
    }
    
    , []);

const handleSubmit4 = async(e) => {  
    e.preventDefault();
    window.location=`/selectCountryIt?id=${itid}`
}
const handleSubmit5 = async(e) => {  
    e.preventDefault();
    window.location=`/changePasswordIt?id=${itid}`
}
const handleDelete = id => {
    setIsDeleting(true); // Set the deleting flag to true

    fetch(`/api/it/delete/${id}`, { method: 'DELETE' }) // Make API call to delete the review
      .then(res => res.json()) // Parse the response as JSON
      .then(() => {
        // Update the reviews state to remove the deleted review
        setReviews(reviews.filter(review => review._id !== id));
        setIsDeleting(false); // Reset the deleting flag to false
      })
      .catch(error => console.error(error)); // Log any errors
  };

    return (
        <div className="itprofile">
            	<NavBar/>
        <center> <h4>My Profile</h4></center> 
        <form className="course_container">
        {it && it.map( (it1) => (
            <ProfileIt key={it1._id} it={it1} />
            ))}
        </form>
        <center> <h4>My reviews</h4></center> 
        <form className="course_container">
        <div>
      {reviews && reviews.map(review => (
        <div key={review._id}>
          <p>{review.reviews}</p>
          {isDeleting ? (
            <p>Deleting...</p>
          ) : (
            <button onClick={() => handleDelete(review._id)}>Delete</button>
          )}
        </div>
      ))}
    </div>
        </form>
        <br></br>
        <br></br>
            <div className='form_container2'>
               <form className="bottom_container2" onSubmit={handleSubmit4} >
                <button className="green_btn" >
                   Select Country</button>
            </form>
            <form className="bottom_container2" onSubmit={handleSubmit5} >
                <button className="green_btn"  >
                    Change password</button>
            </form>
            </div>
        </div>
        
    );

}

export default ItProfile;
