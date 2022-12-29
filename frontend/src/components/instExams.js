import { useState } from 'react';
import React from 'react';

const InstExams = () => {
    const [title,setCourse] = useState('')
    const [number,setsubtitle] = useState('')
    const [error,setError] = useState(null)
    const [examName,setExam] = useState('')


    const handleSubmit = async (e) => {
        e.preventDefault();

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
    
    setError(null)
    console.log("Added!",json)
    }
}
return (
   <form className="create" onSubmit={handleSubmit}>
    <h3>Create</h3>

    <label>Course:</label>
    <input
    type="text"
    onChange={(e) => setCourse(e.target.value)}
    value={title}
    />
    <label>subtitle:</label>
    <input
    type="text"
    onChange={(e) => setsubtitle(e.target.value)}
    value={number}
    />        <label>Exam:</label>

     <input
    type="text"
    onChange={(e) => setExam(e.target.value)}
    value={examName}
    />
  
    
    <button>Add</button>
    {error && <div className="error">{error}</div>}
    </form>

   
)
}

export default InstExams