//components 
import AnswerExamsCt from '../components/AnswerExamsCt';
import React from 'react';
import NavBar from '../components/Navbar';

const AnswerExamCt = () => {
    return (
        <div className="home">
            <NavBar/>
        <div className="create">
            <AnswerExamsCt /> 
        </div>
        </div>
        
    );

}

export default AnswerExamCt;