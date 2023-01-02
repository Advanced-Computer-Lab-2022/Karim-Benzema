import React from 'react';
import { useState,useEffect, useTransition } from 'react';
import styles from './styles.module.css';
const SetDetail = ({set,question,correct,wrong}) => {

  const [error,setError] = useState(null)
  const [settt,setSet] = useState(null);
  const [questionn,setQuestion] = useState(null);
  let color=styles.gray_btn
  let flag=0;
let correctColor=[];
  let farah=[];
  const params = new URLSearchParams(window.location.search);
  const id = params.get('id');

let answers=[]
   
// if(wrong!=null){

//   for(let i=0;i<wrong.length;i++){
// console.log(wrong[i])
//     if(wrong[i]===set ){
//       color= styles.red_btn;


//     }
    

 
// }
// }
    return (
        
        <div className="QuestionDetail">
                 
    <div >
 
    <br></br>

          <h1 className={styles.h1}>{set} </h1>



 
        </div>
        <div className="Exam">
           
        </div>
    
          
            { /*<p><strong>SubTitle: </strong>{course.subtitle}</p> }
            {/* <p><strong>Total Hours: </strong>{course.totalHours}</p> */}
    
            { /*<p><strong>Rating: </strong>{course.rating}</p>}
            {/* <p><strong>Subject: </strong>{course.subject}</p>
            <p><strong>Instructor: </strong>{course.Instructor}</p>
            <p><strong>Exercises: </strong>{course.Exercises}</p>
            <p><strong>Discount: </strong>{course.discount}</p>
            <p><strong>Short Summary: </strong>{course.shortSummary}</p> */}
            <div>
      

            </div>

        </div>
        
    );
}
export default SetDetail;