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
    
    const [discount,setDiscount] = useState('')
    const [shortSummary,setSummary] = useState('')
    const [period,setPeriod] = useState('')
    // const [preview,setPreview] = useState('')
    // const [reviews,setReviews] = useState('')

    const [error,setError] = useState(null)
    const params = new URLSearchParams(window.location.search);
    const instructor = params.get('id');
    const handleSubmit = async (e) => {
        e.preventDefault();
        
        const course = {title,totalHours,price,subject,discount,shortSummary,period}
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
        setError(null)
        console.log("Added!",json)
        }
}
const handleSubmit2 = async (e) => {
    e.preventDefault();
    
    const subtitle = {totalHoursSUB,number}
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
    //setError(null)
    console.log("Added!",json)
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
        placeholder="Total Hours"
        onChange={(e) => setTotalHours(e.target.value)}
        value={totalHours}
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
        placeholder="Discount"
        onChange={(e) => setDiscount(e.target.value)}
        value={discount}
        /> 

     
        <input className='input'
        type="text"
        placeholder="Short Summary"
        onChange={(e) => setSummary(e.target.value)}
        value={shortSummary}
        /> 

         {/* <label>Valid until date :</label> */}
         <input className='input'
        type="text"
        placeholder="Discount Until (DD/MM/YY)"
        onChange={(e) => setPeriod(e.target.value)}
        value={period}
        /> 

        <button className='green_btn'>Create Course</button>
        {error && <div className="error">{error}</div>}
 

        </form>
        <form className='form_container' onSubmit={handleSubmit2}>
            <h3>Create Subtitle</h3>
            <input className='input'
        type="number"
        placeholder="number"
        onChange={(e) => setNumber(e.target.value)}
        value={number}
        /> 
            <input className='input'
        type="text"
        placeholder="totalhours"
        onChange={(e) => setTotalHoursSub(e.target.value)}
        value={totalHoursSUB}
        /> 

        <button className='green_btn'>Create Subtitle</button>
        </form>
        </div>
        

       
    )
}

export default CreateCourse