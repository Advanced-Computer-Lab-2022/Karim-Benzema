
//components 

//import changePassword from "../components/changePassword";
import React from 'react';
import EditEmail from "../components/editEmail";
import NavBar from '../components/Navbar';
const   InsteditEmail = () => {
    return (
        <div className="edit">
              <NavBar />
        <div className="bio">
    <EditEmail/>

        </div>
        </div>
        
    );

}

export default InsteditEmail