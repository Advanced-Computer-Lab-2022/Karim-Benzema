import { useEffect, useState } from 'react';
import React from 'react';

const NavbarGuest = () => {
    const [error,setError] = useState(null)
    
    const handleSubmit3 = async(e) => {  
        e.preventDefault();
        window.location=`/selectCountryIt`
    
    }
    const handleSubmit4 = async(e) => {  
        e.preventDefault();
        window.location=`/SignUp`
    }
    const handleSubmit5 = async(e) => {  
        e.preventDefault();
        window.location=`/Login`
    }


    return (
   
        <h1 className="bottom_container2">   
        BLW 
        <div className="bottom_container3" >
        <form className=" bottom_container" onSubmit={handleSubmit3} >
                <button className="green_btn" >
                   Select Country</button>
            </form>
            &nbsp; &nbsp;  &nbsp; &nbsp; &nbsp;  &nbsp;
            <form  onSubmit={handleSubmit4}>
                <button className="green_btn"  >
                   SignUp </button>
                   </form>
                   &nbsp; &nbsp;  &nbsp; &nbsp; &nbsp;  &nbsp;
                   <form onSubmit={handleSubmit5}>
                <button className="green_btn"   >
                   Login </button>
                   </form>
            </div>

     
       
            </h1>
           
    );
}
export default NavbarGuest;
  // <header>
        // <div className="container">
        // </div>
        // <div className="navbar__links">
        //     <Link to="/">
        //     <h1>BLW</h1>
        //     </Link>
        // </div>
        // </header>
