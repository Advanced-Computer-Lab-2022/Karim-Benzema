import { useState } from 'react';
const CreateCourse = () => {
    const [title,setTitle] = useState('')
    const [subtitle,setSubtitle] = useState('')
    const [totalHours,setTotalHours] = useState('')
    const [price,setPrice] = useState('')
    const [rating,setRating] = useState('')
    const [subject,setSubject] = useState('')
    const [instructor,setInstructor] = useState('')
    const [exercises,setExercises] = useState('')
    const [discount,setDiscount] = useState('')
    const [shortSummary,setSummary] = useState('')

    const [error,setError] = useState(null)
    
    const handleSubmit = async (e) => {
        e.preventDefault();

        const course = {title,subtitle,totalHours,price,rating,subject,instructor,exercises,discount,shortSummary}
        const response = await fetch('/api/instructor/createcourse', {
            method: 'POST',
            body: JSON.stringify(course),
            headers: {
                'Content-Type': 'application/json'
            }
    })
    const json = await response.json()

    if(!response.ok){
        setError(json.error)
    }
    if(response.ok){
        setTitle('')
        setSubtitle('')
        setTotalHours('')
        setPrice('')
        setRating('')
        setSubject('')
        setInstructor('')
        setExercises('')
        setDiscount('')
        setSummary('')
        setError(null)
        console.log("Added!",json)
        }
}
    return (
       <form className="create" onSubmit={handleSubmit}>
        <h3>Create Course</h3>

        <label>Title:</label>
        <input
        type="text"
        onChange={(e) => setTitle(e.target.value)}
        value={title}
        />

        <label>Subtitle:</label>
        <input
        type="text"
        onChange={(e) => setSubtitle(e.target.value)}
        value={subtitle}
        />

        <label>Total Hours:</label>
        <input
        type="text"
        onChange={(e) => setTotalHours(e.target.value)}
        value={totalHours}
        />

        <label>Price:</label>
        <input
        type="text"
        onChange={(e) => setPrice(e.target.value)}
        value={price}
        />

        <label>Rating:</label>
        <input
        type="text"
        onChange={(e) => setRating(e.target.value)}
        value={rating}
        />

        <label>Subject:</label>
        <input
        type="text"
        onChange={(e) => setSubject(e.target.value)}
        value={subject}
        /> 

        <label>Instructor:</label>
        <input
        type="text"
        onChange={(e) => setInstructor(e.target.value)}
        value={instructor}
        /> 

        <label>Exercises:</label>
        <input
        type="text"
        onChange={(e) => setExercises(e.target.value)}
        value={exercises}
        /> 
        
        <label>Discount:</label>
        <input
        type="text"
        onChange={(e) => setDiscount(e.target.value)}
        value={discount}
        /> 

        <label>Short Summary:</label>
        <input
        type="text"
        onChange={(e) => setSummary(e.target.value)}
        value={shortSummary}
        /> 


        <button>Add</button>
        {error && <div className="error">{error}</div>}
        </form>

       
    )
}

export default CreateCourse