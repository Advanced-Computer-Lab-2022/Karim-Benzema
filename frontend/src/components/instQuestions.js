import { useState } from 'react';
import React from 'react';

const InstQuestions = () => {
    const [error,setError] = useState(null)
    const [error1,setError1] = useState(null)
    const [name,setQuestionName] = useState('')
    const [questionAnswer,setquestionAnswer] = useState('')

    const [mcq1,setMcq1] = useState('')
    const [mcq2,setMcq2] = useState('')
    const [mcq3,setMcq3] = useState('')
    const [mcq4,setMcq4] = useState('')

    const handleSubmit = async (e) => {
        e.preventDefault();
        if(name!=='' && mcq1!=='' & mcq2!==''
         && mcq3!=='' & mcq4!=='' &&  questionAnswer!==''){ 
        const user = {name,mcq1,mcq2,mcq3,mcq4,questionAnswer}
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
        setError1('Created')
        console.log("Added!",json)
        }
}
else{
    setError("Fill all required fields")
}
}
    return (
       <form className="form_container" onSubmit={handleSubmit}>
        <h3>Create Question</h3>
        <input  className='input'
        type="text"
        placeholder="Course Name"
        onChange={(e) => setQuestionName(e.target.value)}
        value={name}
        />       

         <input  className='input'
        type="text"
        placeholder="Option 1"
        onChange={(e) => setMcq1(e.target.value)}
        value={mcq1}
        />

        <input  className='input'
            type="text"
            placeholder="Option 2"
            onChange={(e) => setMcq2(e.target.value)}
            value={mcq2}
            />

        <input className='input'
        type="text"
        placeholder="Option 3"
        onChange={(e) => setMcq3(e.target.value)}
        value={mcq3}
        />
    <input className='input'
    type="text"
    placeholder="Option 4"
    onChange={(e) => setMcq4(e.target.value)}
    value={mcq4}
    />

    <input className='input'
    type="text"
    placeholder="Answer"
    onChange={(e) => setquestionAnswer(e.target.value)}
    value={questionAnswer}
    />
    <button className='green_btn' >Add</button>
    {error && <div className="error_msg">{error}</div>}
    {error1 && <div className="error_msg2">{error1}</div>}
        </form>

       
    )
}

export default InstQuestions