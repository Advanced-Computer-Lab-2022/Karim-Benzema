//components 
import AnswerExams from '../components/AnswerExams';
import React from 'react';
import NavbarIt from '../components/navbarIt';

const AnswerExam = () => {
    return (
        <div className="home">
            	<NavbarIt/>
        <div className="create">
            <AnswerExams /> 
        </div>
        </div>
        
    );

}

export default AnswerExam;