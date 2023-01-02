import CreateAdmin from '../components/createAdmin';
import React from 'react';
import NavBar from '../components/Navbar';

const AddAdmin = () => {
    return (
        <div className="home">
            <NavBar/>
        <div className="create">
            <CreateAdmin /> 
        </div>
        </div>
        
    );

}

export default AddAdmin;