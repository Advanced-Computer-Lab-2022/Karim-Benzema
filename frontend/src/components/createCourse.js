import { useState } from 'react';
const CreateCourse = () => {
    const [title,setTitle] = useState('')
    const [totalHours,setTotalHours] = useState('')
    const [totalHoursSUB,setTotalHoursSub] = useState('')
    const [number,setNumber] = useState('')
    const [price,setPrice] = useState('')
    // const [rating,setRating] = useState('')
    // const [ratings,setRatings] = useState('')
    const [subject,setSubject] = useState('')
    const [error,setError] = useState(null)
    const [error1,setError1] = useState(null)

    const [error2,setError2] = useState(null)
    const [error3,setError3] = useState(null)

    const [discount,setDiscount] = useState('')
    const [shortSummary,setSummary] = useState('')
    const [period,setPeriod] = useState('')
    // const [preview,setPreview] = useState('')
    // const [reviews,setReviews] = useState('')
    const params = new URLSearchParams(window.location.search);
    const instructor = params.get('id');
    const handleSubmit = async (e) => {
        e.preventDefault();
        if(title!=='' && price!=='' & subject!=='' && shortSummary!=='' ){ 
        const course = {title,price,subject,shortSummary}
        const response = await fetch('/api/instructor/createcourse/'+instructor, {
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
       // setExercises('')
        setDiscount('')
        setSummary('')
        setPeriod('')
        // setPreview('')
        // setReviews('')
        setError2("Created")
        console.log("Added!",json)
        }
}
else{
    setError("Fill all required fields")
}
}
const handleSubmit2 = async (e) => {
    e.preventDefault();
    if(number!=='' ){ 
    const subtitle = {number}
    const response = await fetch('/api/instructor/createSubtitle', {
        method: 'POST',
        body: JSON.stringify(subtitle),
        headers: {
            'Content-Type': 'application/json'
        }
})
const json = await response.json()
if(response.ok){
   // setTitle('')
   // setSubtitle('')
   //setTotalHours('')
   setTotalHoursSub('')
   //setPrice('')
   setNumber('')
    // setRating('')
    // setRatings('')
   // setSubject('')
   // setExercises('')
   // setDiscount('')
    //setSummary('')
    //setPeriod('')
    // setPreview('')
    // setReviews('')
    setError3("Created")
    console.log("Added!",json)
    }
}
else{
    setError1("Fill required field")
}
}

    return (
        <div>
       <form className="form_container" onSubmit={handleSubmit}>
        <h3>Create Course</h3>
       
        <input className='input'
        type="text"
        placeholder="Title"
        onChange={(e) => setTitle(e.target.value)}
        value={title}
        />
       
        <input className='input'
        type="text"
        placeholder="Price"
        onChange={(e) => setPrice(e.target.value)}
        value={price}
        />

        <input className='input'
        type="text"
        placeholder="Subject"
        onChange={(e) => setSubject(e.target.value)}
        value={subject}
        /> 

        <input className='input'
        type="text"
        placeholder="Short Summary"
        onChange={(e) => setSummary(e.target.value)}
        value={shortSummary}
        /> 
         {/* <label>Valid until date :</label> */}

        <button className='green_btn'>Create Course</button>
        &nbsp; &nbsp;  &nbsp;
        {error && <div className="error_msg">{error}</div>}
        {error2 && <div className="error_msg2">{error2}</div>}
        </form>
        <br></br>
        <br></br>

        <form className='form_container' onSubmit={handleSubmit2}>
        <h3>Create Subtitle</h3>
        <input className='input'
        type="number"
        placeholder="number"
        onChange={(e) => setNumber(e.target.value)}
        value={number}
        /> 
       
        <button className='green_btn'>Create Subtitle</button>
        &nbsp; &nbsp;  &nbsp;
        {error1 && <div className="error_msg">{error1}</div>}
        {error3 && <div className="error_msg2">{error3}</div>}
        </form>
        </div>
        

       
    )
}

export default CreateCourse