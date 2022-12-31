import React from 'react';
import SetDetail from './setDetail';
import styles from './styles.module.css'
const QuesDetail = ({question,correct,wrong}) => {
    console.log(correct)
    return (
        
        <div className="QuestionDetail">
                 
    <div className="Exam">
          <h4>{question.name}</h4>
        </div>
        
        <p><strong>Choices: </strong>{(question.questionSet) && question.questionSet.map((set) => (
            
            <SetDetail key={set._id} set={set} question={question} correct={correct} wrong={wrong}  />
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
export default QuesDetail;