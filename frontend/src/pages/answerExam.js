//components 
import AnswerExams from '../components/AnswerExams';
import React from 'react';
import NavBar from '../components/Navbar';

const AnswerExam = () => {
    return (
        <div className="home">
            	<NavBar/>
                <br></br>
        <div className="create">
            <AnswerExams /> 
        </div>
        </div>
        
    );

}

export default AnswerExam;