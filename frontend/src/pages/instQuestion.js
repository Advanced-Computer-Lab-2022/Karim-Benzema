//components 
import InstQuestions from '../components/instQuestions';
import React from 'react';
import InstExams from '../components/instExams';

const InstQuestion = () => {
    return (
        <div className="home">
        <div className="create">
        <InstExams /> 
            <InstQuestions /> 
        </div>
        </div>
        
    );

}

export default InstQuestion;