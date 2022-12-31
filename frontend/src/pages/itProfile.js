import {useEffect,useState} from 'react';
import React from 'react';

import NavbarIt from '../components/navbarIt';
import ProfileIt from '../components/profileIt';


const ItProfile = () => {
    const [it, setIt] = useState('')
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
            
          fetchit();
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

    return (
        <div className="itprofile">
            	<NavbarIt/>
        <center> <h4>My Profile</h4></center> 
        <form className="course_container">
        {it && it.map( (it1) => (
            <ProfileIt key={it1._id} it={it1} />
            ))}
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
