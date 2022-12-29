import React from 'react';
import QuesDetail from './quesDetail.js';
import styles from './styles.module.css'

const QDetail = ({questions, correct,wrong}) => {
  
  console.log(questions[0].name)
  console.log(correct)
 return (
        
        <div className="Exam">
                 
    <div className="Exam">
            {
            questions && questions.map((question) => (
               
            <QuesDetail  key={question._id} question={question} correct={correct} wrong={wrong} />
            ))}
        </div>
    
          
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
export default QDetail;