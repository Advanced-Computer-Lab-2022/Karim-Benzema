import { useState,useEffect, useTransition } from 'react';
import React from 'react';
import axios from 'axios';
// ES6 Modules or TypeScript


// CommonJS

import QuestionDetail from './questionDetail';
import CorrDetail from './corrDetail';
import styles from './styles.module.css'
const Swal = require('sweetalert2')
const params = new URLSearchParams(window.location.search);
const id = params.get('id');
const ctid = params.get('ctid');


const AnswerExamsCt =()=> {

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
    const ress= await fetch('/api/ct/getAnswerss')
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
  
 
   const response = await fetch('/api/ct/getAnswers').then((res)=>(res.json()))
   .then((data)=>
   console.log(data))

   const res= await fetch('/api/ct/getAnswers')
   
   const json = await res.json()

 setCorrect(json)
 corr.push(json)
 const ress= await fetch('/api/ct/getWrongAnswers/'+id+'/'+ctid)
 const jsonn = await ress.json()
 const ressss= await fetch('/api/ct/coloringAnswers')

 const jsonnn = await ressss.json()
setCorrect(jsonnn)
const resssss= await fetch('/api/ct/coloringWrongs')

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
    

      const response = await fetch('/api/ct/viewExam/'+id)
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
    <script src="sweetalert2.all.min.js"></script>

        
    <div className="form_container">
          
            <QuestionDetail key={exams._id} exam={exams}
            corr={corr}
             correct={correct} wrong={wrong} />
       
       <form className='bottom_container'>
        <button className={styles.green_btn} onClick={handleSubmit2} >submit</button>
        </form>
        </div>
        <br></br>
        <div className="form_container2">
       {grade && grade.map((grad) => (
           <h4>{grad}</h4>
            ))}
        </div>
  </div>
)
}


export default AnswerExamsCt