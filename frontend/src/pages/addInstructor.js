
//components 
import CreateInstructor from '../components/createInstructor';
import React from 'react';
import NavBar from '../components/Navbar';

const AddInstructor = () => {
    return (
        <div className="home">
            <NavBar/>
        <div className="create">
            <CreateInstructor /> 
        </div>
        </div>
        
    );

}

export default AddInstructor;
