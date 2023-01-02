import { useEffect, useState } from 'react';
import React from 'react';
import { Link } from 'react-router-dom';

const NavbarIt = () => {
    const [error,setError] = useState(null)
    const params = new URLSearchParams(window.location.search);
    const id = params.get('id');
    const itid = params.get('id');

    const handleSubmit4 = async(e) => {  
        e.preventDefault();
        window.location=`/profileit?id=${itid}`
    }
const logout = async(e) => {
    e.preventDefault();
    const response =
    await fetch('/api/logout', {
    method: 'POST',
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
console.log("Logged out!",json)
window.location=`/`
}
}

    return (
        <h1 className="bottom_container2">   
        BLW 
        <div className="bottom_container4" >
        <form onSubmit={handleSubmit4} >
                <button className="green_btn" >
                   Profile </button>
            </form>
                   &nbsp; &nbsp;  &nbsp; &nbsp; &nbsp;  &nbsp;
         <form  onSubmit={logout}>
        <button  className="green_btn" > Log Out</button>
        </form>
            </div>
            </h1>
           
    );
}
export default NavbarIt;
  // <header>
        // <div className="container">
        // </div>
        // <div className="navbar__links">
        //     <Link to="/">
        //     <h1>BLW</h1>
        //     </Link>
        // </div>
        // </header>
