
//components 

//import changePassword from "../components/changePassword";
import React from 'react';
import EditEmail from "../components/editEmail";
import NavbarInst from '../components/navbarInst';

const   InsteditEmail = () => {
    return (
        <div className="edit">
              <NavbarInst />
        <div className="bio">
    <EditEmail/>

        </div>
        </div>
        
    );

}

export default InsteditEmail