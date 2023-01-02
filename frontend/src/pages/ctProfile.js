import {useEffect,useState} from 'react';
import React from 'react';

import ProfileIt from '../components/profileIt';
import NavBar from '../components/Navbar';
import ProfileCt from '../components/profileCt';


const CtProfile = () => {
    const [ct, setCt] = useState('')
    const [email, setEmail] = useState('')
    const [error, setError] = useState(null)
    
    const [reviews, setReviews] = useState('')
    const [isDeleting, setIsDeleting] = useState(false);
    const params = new URLSearchParams(window.location.search);
    const id = params.get('id');
    const ctid = params.get('id');
    useEffect(() => {
        
        const fetchct = async () => {
            const response = await fetch('/api/ct/getCt/'+ctid)
            const json = await response.json()
       
          if(response.ok){
            setCt(json)
          }
          }
          const fetchreviews = async ()=>{
            const response = await fetch('/api/it/getMyReviews/'+ctid)
            const json = await response.json()
       
            if(response.ok){
              setReviews(json)
            }
          }
        fetchreviews();
          fetchct();
    }
    
    , []);

    const handleSubmit4 = async(e) => {  
        e.preventDefault();
        window.location=`/selectCountry?id=${id}`
    
    }
const handleSubmit5 = async(e) => {  
    e.preventDefault();
    window.location=`/changePasswordCt?id=${id}`

}
const handleSubmit7 = async(e) => {  
    e.preventDefault();
    window.location=`/addemail?id=${id}`

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
        <div className="ctprofile">
            	<NavBar/>
        <center> <h4>My Profile</h4></center> 
        <form className="course_container">
        {ct && ct.map( (ct1) => (
            <ProfileCt key={ct1._id} ct={ct1} />
            ))}
        </form>
        <br></br>
        <br></br>
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
            <div className='form_container2'>
               <form className="bottom_container2" onSubmit={handleSubmit4} >
                <button className="green_btn" >
                   Select Country</button>
            </form>
            <form className="bottom_container2" onSubmit={handleSubmit5} >
                <button className="green_btn"  >
                    Change password</button>
            </form>

            <form className="bottom_container2" onSubmit={handleSubmit7} >
            <button className="green_btn"  onChange={(e) => 
            setEmail(e.target.value)}>Add Email</button>
            </form>
            </div>
        </div>
        
    );

}

export default CtProfile;
