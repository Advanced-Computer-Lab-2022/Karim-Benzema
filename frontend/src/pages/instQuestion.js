//components 
import InstQuestions from '../components/instQuestions';
import React from 'react';
import InstExams from '../components/instExams';
import NavBar from '../components/Navbar';

const InstQuestion = () => {
    return (
        <div className="home">
             <NavBar />
        <div className="create">
             <InstExams /> 
             <br></br>
            <InstQuestions /> 
        </div>
        </div>
        
    );

}

export default InstQuestion;