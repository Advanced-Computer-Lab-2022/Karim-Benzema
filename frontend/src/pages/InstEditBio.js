
//components 

//import changePassword from "../components/changePassword";
import React from 'react';
import EditBio from "../components/editBio";
import NavBar from '../components/Navbar';

const   InsteditBio = () => {
    return (
        <div className="edit">
              <NavBar />
        <div className="bio">
    <EditBio/>

        </div>
        </div>
        
    );

}

export default InsteditBio