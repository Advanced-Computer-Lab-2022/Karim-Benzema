import { useState } from 'react';
import React from 'react';

const ItAnswers = () => {
   
    
    const [error,setError] = useState(null)
    const [examNamee,setExam] = useState('')
    const [questions,setQuestion] = useState('')
    const[courses,setCourses]=useState('')

    const handleSubmit = async (e) => {
        e.preventDefault();

        const examName = {examNamee}
        const fetchedData = await fetch(`/api/it/itAnswer?${new URLSearchParams(examName).toString()}`);

    const json = await fetchedData.json()

    if(!fetchedData.ok){
        setError(json.error)
}
if(fetchedData.ok){

    setExam('')
    setQuestion('')
    setError(null)
    console.log("Added!",json)
    }
}

return (
<div>
   <form className="create" onSubmit={handleSubmit}>
        <h3>Create</h3>

        <label>Exam:</label>
        <input
            type="text"
            onChange={(e) => setExam(e.target.value)}
            value={examNamee} />

        <button>Add</button>
        {error && <div className="error">{error}</div>}
    </form><div className="courses">
            {questions && questions.map((question) => (
                <p key={question._id} question={question} />
            ))}

        </div>
      </div>
)
}

export default ItAnswers