import { useState } from 'react';
import React from 'react';

const InstExams = () => {
    const [title,setCourse] = useState('')
    const [number,setsubtitle] = useState('')
    const [error,setError] = useState(null)
    const [error1,setError1] = useState(null)
    const [examName,setExam] = useState('')


    const handleSubmit = async (e) => {
        e.preventDefault();
        if(title!=='' && number!=='' & examName!=='' ){ 
        const user = {title,number,examName}
        const response = await fetch('/api/instructor/createExam', {
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
    setCourse('')
    setsubtitle('')
    setExam('')
    setError1('Created')
    console.log("Added!",json)
    }}
    else{
        setError("Fill all required fields")
    }
}
return (
   <form className="form_container" onSubmit={handleSubmit}>
    <h3>Create Exam </h3>

    <input className='input'
    type="text"
    placeholder="Course Name"
    onChange={(e) => setCourse(e.target.value)}
    value={title}
    />
    <input className='input'
    type="text"
    placeholder="Subtitle Number"
    onChange={(e) => setsubtitle(e.target.value)}
    value={number}
    /> 
     <input className='input'
    type="text"
    placeholder="Exam Name"
    onChange={(e) => setExam(e.target.value)}
    value={examName}
    />
    <button className='green_btn'>Add </button>
    {error && <div className="error_msg">{error}</div>}
    {error1 && <div className="error_msg2">{error1}</div>}
    </form>

   
)
}

export default InstExams