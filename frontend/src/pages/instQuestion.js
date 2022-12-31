//components 
import InstQuestions from '../components/instQuestions';
import React from 'react';
import InstExams from '../components/instExams';
import NavbarInst from '../components/navbarInst';

const InstQuestion = () => {
    return (
        <div className="home">
             <NavbarInst />
        <div className="create">
        <InstExams /> 
            <InstQuestions /> 
        </div>
        </div>
        
    );

}

export default InstQuestion;