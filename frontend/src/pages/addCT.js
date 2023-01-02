//components 
import CreateCT from '../components/createCT';
import React from 'react';
import NavBar from '../components/Navbar';

const AddCT = () => {
    return (
        <div className="home">
            <NavBar/>
        <div className="create">
            <CreateCT /> 
        </div>
        </div>
        
    );

}

export default AddCT;