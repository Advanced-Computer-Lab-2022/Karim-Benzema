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
  const itid = params.get('itid');
let answers=[]
    const handleSubmit = async (e) => {
    
   
       
        e.preventDefault();
       const {settt}=set
       const {questionn}=question
answers.push(set)



       const response = await fetch('/api/it/answer/'+id+'/'+itid, {
        method: 'POST',
        body: JSON.stringify({set,question}),
        headers: {
            'Content-Type': 'application/json'
        }
}
)

const responsee = await fetch('/api/it/coloringAnswers')


const jsonn = await responsee.json()
correctColor=jsonn

  

}
if(correct!=null){

  for(let i=0;i<correct.length;i++){
console.log(correct[i])
    if(correct[i]===set){
      color= styles.green_btn;


    }

 
}

}
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

          <button className={color} onChange={({settt}) => setSet(settt)}
value={settt}
 onClick={handleSubmit}
>{set} </button>



 
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