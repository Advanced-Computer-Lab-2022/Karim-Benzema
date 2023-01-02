import { useState,useEffect, useTransition } from 'react';
import React from 'react';
import axios from 'axios';

import QuestionDetail from './questionDetail';
import CorrDetail from './corrDetail';
import styles from './styles.module.css'
const params = new URLSearchParams(window.location.search);
const id = params.get('id');
const subtitle = params.get('subtitle');

const ViewExamGuest =()=> {

  const [error,setError] = useState(null)
  const [search,setSearch] = useState('')
  const [courses,setCourses] = useState(null);
const corr=[]
  
  const [exams,setExam] = useState("");
  let [correct,setCorrect] = useState(null);
  let [wrong,setWrong] = useState(null);

  let [grade,setGrade] = useState(null);





useEffect(() => {
    const fetchExam = async () => {
    

      const response = await fetch('/api/guest/viewExamGuest/'+id+'/'+subtitle)
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
       
      

        </div>
      
  </div>
)
}


export default ViewExamGuest