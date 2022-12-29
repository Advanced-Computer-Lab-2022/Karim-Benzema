import { useState,useEffect, useTransition } from 'react';
import React from 'react';
import axios from 'axios';

import QuestionDetail from './questionDetail';
import CorrDetail from './corrDetail';
import styles from './styles.module.css'
const params = new URLSearchParams(window.location.search);
const id = params.get('id');

const AnswerExams =()=> {

  const [error,setError] = useState(null)
  const [search,setSearch] = useState('')
  const [courses,setCourses] = useState(null);
const corr=[]
  
  const [exams,setExam] = useState("");
  let [correct,setCorrect] = useState(null);
  let [wrong,setWrong] = useState(null);

  let [grade,setGrade] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const ress= await fetch('/api/it/getAnswerss')
    const jsonn = await ress.json()
 
 
  setGrade(jsonn)
 
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
 const ress= await fetch('/api/it/getWrongAnswers')
 const jsonn = await ress.json()
 const ressss= await fetch('/api/it/coloringAnswers')

 const jsonnn = await ressss.json()
setCorrect(jsonnn)
const resssss= await fetch('/api/it/coloringWrongs')

const jsonnnn = await resssss.json()
setWrong(jsonnnn)
setGrade(jsonn)
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
    

      const response = await fetch('/api/it/viewExam/'+id)
      const json = await response.json()


 console.log(json)
    if(response.ok){
        setExam(json)
        
    }
    }
    fetchExam();
}, []);
return(
  <div> 
    
        
    <div className="form_container">
          
            <QuestionDetail key={exams._id} exam={exams}
            corr={corr}
             correct={correct} wrong={wrong} />
       
      
        <button className={styles.green_btn} onClick={handleSubmit2}>submit</button>

        </div>
      
        <div className="correct">
        {grade && grade.map((grad) => (
           <h4>{grad}</h4>
            ))}
        </div>
  </div>
)
}


export default AnswerExams