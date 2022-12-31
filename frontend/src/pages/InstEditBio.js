
//components 

//import changePassword from "../components/changePassword";
import React from 'react';
import EditBio from "../components/editBio";
import NavbarInst from '../components/navbarInst';

const   InsteditBio = () => {
    return (
        <div className="edit">
              <NavbarInst />
        <div className="bio">
    <EditBio/>

        </div>
        </div>
        
    );

}

export default InsteditBio