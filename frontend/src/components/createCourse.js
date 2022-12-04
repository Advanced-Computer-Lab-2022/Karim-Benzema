import { useState } from 'react';
const CreateCourse = () => {
    const [title,setTitle] = useState('')
    const [totalHours,setTotalHours] = useState('')
    const [price,setPrice] = useState('')
    // const [rating,setRating] = useState('')
    // const [ratings,setRatings] = useState('')
    const [subject,setSubject] = useState('')
    const [instructor,setInstructor] = useState('')
    const [discount,setDiscount] = useState('')
    const [shortSummary,setSummary] = useState('')
    const [period,setPeriod] = useState('')
    // const [preview,setPreview] = useState('')
    // const [reviews,setReviews] = useState('')

    const [error,setError] = useState(null)
    
    const handleSubmit = async (e) => {
        e.preventDefault();

        const course = {title,totalHours,price,subject,instructor,discount,shortSummary,period}
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
       // setSubtitle('')
        setTotalHours('')
        setPrice('')
        // setRating('')
        // setRatings('')
        setSubject('')
        setInstructor('')
       // setExercises('')
        setDiscount('')
        setSummary('')
        setPeriod('')
        // setPreview('')
        // setReviews('')
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
        placeholder="Title"
        onChange={(e) => setTitle(e.target.value)}
        value={title}
        />

        <label>Total Hours:</label>
        <input
        type="text"
        placeholder="Total Hours"
        onChange={(e) => setTotalHours(e.target.value)}
        value={totalHours}
        />

        <label>Price:</label>
        <input
        type="text"
        placeholder="Price"
        onChange={(e) => setPrice(e.target.value)}
        value={price}
        />

        <label>Subject:</label>
        <input
        type="text"
        placeholder="Subject"
        onChange={(e) => setSubject(e.target.value)}
        value={subject}
        /> 

        <label>Instructor:</label>
        <input
        type="text"
        placeholder="Instructor"
        onChange={(e) => setInstructor(e.target.value)}
        value={instructor}
        /> 
        
        <label>Discount:</label>
        <input
        type="text"
        placeholder="Discount"
        onChange={(e) => setDiscount(e.target.value)}
        value={discount}
        /> 

        <label>Short Summary:</label>
        <input
        type="text"
        placeholder="Short Summary"
        onChange={(e) => setSummary(e.target.value)}
        value={shortSummary}
        /> 

         <label>Valid until date :</label>
        <input
        type="text"
        placeholder="DD/MM/YY"
        onChange={(e) => setPeriod(e.target.value)}
        value={period}
        /> 

        <button>Create</button>
        {error && <div className="error">{error}</div>}
 

        </form>

       
    )
}

export default CreateCourse