import React from 'react';
import { useState,useEffect, useTransition } from 'react';

const SetDetail = ({set,question}) => {

  const [error,setError] = useState(null)
  const [settt,setSet] = useState(null);
  const [questionn,setQuestion] = useState(null);

    const handleSubmit = async (e) => {
        console.log({set})
        console.log({question})

        e.preventDefault();
       const {settt}=set
       const {questionn}=question

       console.log(settt)
       console.log({set})

       const response = await fetch('/api/it/answer', {
        method: 'POST',
        body: JSON.stringify({set,question}),
        headers: {
            'Content-Type': 'application/json'
        }
})

       // const fetchedData = await fetch(`/api/instructor/search?${new URLSearchParams(user).toString()}`);
    
    /*const res=fetch(`/api/instructor/viewcourses/${username}`)
    .then((res)=>(res.json()))
    .then((data)=>
    console.log(data))
    */
      // const json = await fetchedData.json()
    
    //setCourses(json)
        //const response = await fetch(`/api/instructor/viewcourses/${username}`).then((resp) => resp.json())
    
    
    }
    const handleSubmit2 = async (e) => {
      console.log({set})

      e.preventDefault();
     const {settt}=set
     console.log(settt)
     console.log({set})

     const response = await fetch('/api/it/getAnswers')

     // const fetchedData = await fetch(`/api/instructor/search?${new URLSearchParams(user).toString()}`);
  
  /*const res=fetch(`/api/instructor/viewcourses/${username}`)
  .then((res)=>(res.json()))
  .then((data)=>
  console.log(data))
  */
    // const json = await fetchedData.json()
  
  //setCourses(json)
      //const response = await fetch(`/api/instructor/viewcourses/${username}`).then((resp) => resp.json())
  
  
  }

    return (
        
        <div className="QuestionDetail">
                 
    <div className="Exam">
          <button onChange={({settt}) => setSet(settt)}
value={settt}
 onClick={handleSubmit}>{set}</button>
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