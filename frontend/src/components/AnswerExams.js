import { useState,useEffect, useTransition } from 'react';
import React from 'react';
import axios from 'axios';

import QuestionDetail from '../components/questionDetail';
import CorrDetail from '../components/corrDetail';

const AnswerExams =()=> {

  const [error,setError] = useState(null)
  const [search,setSearch] = useState('')
  const [courses,setCourses] = useState(null);
const corr=[]
  
  const [exams,setExam] = useState(null);
  let [correct,setCorrect] = useState(null);

  
  const handleSubmit = async (e) => {
    e.preventDefault();
   // const user = {search}
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

    e.preventDefault();
  

   const response = await fetch('/api/it/getAnswers').then((res)=>(res.json()))
   .then((data)=>
   console.log(data))

   const res= await fetch('/api/it/getAnswers')
   const json = await res.json()

 setCorrect(json)
 corr.push(json)

 console.log(corr)
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

useEffect(() => {
    const fetchExam = async () => {
      const response = await fetch('/api/it/viewExam')
      const json = await response.json()
      
 console.log(json)
 console.log(json)
    if(response.ok){
        setExam(json)
        
    }
    }
    fetchExam();
}, []);
return(
  <div> 
    
        
    <div className="Exam">
            {exams && exams.map((exam) => (
            <QuestionDetail key={exam._id} exam={exam} />
            ))}
        </div>
        <button onClick={handleSubmit2}>submit</button>
        <div className="correct">
        {correct && correct.map((cor) => (
            <CorrDetail  cor={cor} />
            ))}
        </div>
  </div>
)
}


export default AnswerExams
