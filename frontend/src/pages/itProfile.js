
//components 
import React from 'react';

const params = new URLSearchParams(window.location.search);
    const itid = params.get('id');

const handleSubmit4 = async(e) => {  
    e.preventDefault();
    window.location=`/selectCountryIt?id=${itid}`
}
const handleSubmit5 = async(e) => {  
    e.preventDefault();
    window.location=`/changePasswordIt?id=${itid}`
}
const ItProfile = () => {
    return (
        <div className="itprofile">
            <div className='form_container2'>
         &nbsp; &nbsp;  &nbsp;&nbsp; &nbsp;  &nbsp;&nbsp; &nbsp;  &nbsp;
               <form className="bottom_container" onSubmit={handleSubmit4} >
                <button className="green_btn" >
                   Select Country</button>
            </form>
            &nbsp; &nbsp;  &nbsp;&nbsp; &nbsp;  &nbsp;&nbsp; &nbsp;  &nbsp;
            <form className="bottom_container" onSubmit={handleSubmit5} >
                <button className="green_btn"  >
                    Change password</button>
            </form>
            </div>
        </div>
        
    );

}

export default ItProfile;
