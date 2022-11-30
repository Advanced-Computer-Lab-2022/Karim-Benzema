import { useState } from 'react';
import React from 'react';

const InstQuestions = () => {
    const [error,setError] = useState(null)
    const [eName,setExam] = useState('')
    const [name,setQuestionName] = useState('')
    const [questionAnswer,setquestionAnswer] = useState('')

    const [mcq1,setMcq1] = useState('')
    const [mcq2,setMcq2] = useState('')
    const [mcq3,setMcq3] = useState('')
    const [mcq4,setMcq4] = useState('')

    const handleSubmit = async (e) => {
        e.preventDefault();

        const user = {eName,name,mcq1,mcq2,mcq3,mcq4,questionAnswer}
        const response = await fetch('/api/instructor/createQuestions', {
            method: 'POST',
            body: JSON.stringify(user),
            headers: {
                'Content-Type': 'application/json'
            }
    })
    const json = await response.json()

    if(!response.ok){
        setError(json.error)
    }
    if(response.ok){
        setQuestionName('')
        setquestionAnswer('')
        setMcq1('')
        setMcq2('')
        setMcq3('')
        setMcq4('')
        setExam('')
        
        setError(null)
        console.log("Added!",json)
        }
}
    return (
       <form className="create" onSubmit={handleSubmit}>
        <h3>Create</h3>

        <label>ExamName:</label>
        <input
        type="text"
        onChange={(e) => setExam(e.target.value)}
        value={eName}
        />
        <label>questionName:</label>
        <input
        type="text"
        onChange={(e) => setQuestionName(e.target.value)}
        value={name}
        />        <label>mcq1:</label>

         <input
        type="text"
        onChange={(e) => setMcq1(e.target.value)}
        value={mcq1}
        />
                <label>mcq2:</label>

       <input
        type="text"
        onChange={(e) => setMcq2(e.target.value)}
        value={mcq2}
        />
        <label>mcq3:</label>
    

    <input
     type="text"
     onChange={(e) => setMcq3(e.target.value)}
     value={mcq3}
     />
         <label>mcq4:</label>
    

<input
 type="text"
 onChange={(e) => setMcq4(e.target.value)}
 value={mcq4}
 /><label>Question Answer:</label>
    

 <input
  type="text"
  onChange={(e) => setquestionAnswer(e.target.value)}
  value={questionAnswer}
  />
   
        <button>Add</button>
        {error && <div className="error">{error}</div>}
        </form>

       
    )
}

export default InstQuestions