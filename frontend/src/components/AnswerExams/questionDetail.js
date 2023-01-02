import React from 'react';

import QDetail from './qDetail';
import styles from './styles.module.css'

const QuestionDetail = ({exam,corr,correct,wrong}) => {
    console.log(exam.questions)
    console.log(correct)
    console.log(corr)
    return (
        <div className="QuestionDetail">
            <h4>{exam.examName}</h4>
            <p><strong>Question: </strong>{(exam.questions) && exam.questions.map((questions) => (
            <QDetail key={questions._id} questions={questions} correct={correct}  wrong={wrong}/>
            ))}</p>
         
            { /*<p><strong>SubTitle: </strong>{course.subtitle}</p> }
            {/* <p><strong>Total Hours: </strong>{course.totalHours}</p> */}
    
            { /*<p><strong>Rating: </strong>{course.rating}</p>}
            {/* <p><strong>Subject: </strong>{course.subject}</p>
            <p><strong>Instructor: </strong>{course.Instructor}</p>
            <p><strong>Exercises: </strong>{course.Exercises}</p>
            <p><strong>Discount: </strong>{course.discount}</p>
            <p><strong>Short Summary: </strong>{course.shortSummary}</p> */}
        </div>
    );
}
export default QuestionDetail;