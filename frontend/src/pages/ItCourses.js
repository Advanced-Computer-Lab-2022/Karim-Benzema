import {useEffect,useState} from 'react';

//components 
import CourseDetails1 from '../components/courseDetails1';


const ItCourses = () => {

    const [courses,setCourses] = useState(null);
    const [search,setSearch] = useState('')
    const [error,setError] = useState(null)
    const [minprice, setMinPrice] = useState('')
    const [maxprice, setMaxPrice] = useState('')
    const [subject, setSubject] = useState('')
    const [rating, setRating] = useState('')

useEffect(() => {
    const fetchCourses = async () => {
      const response = await fetch('/api/it/viewcourses')
      const json = await response.json()
 
    if(response.ok){
        setCourses(json)
    }

    }

    fetchCourses();
}, []);
const handleSubmit = async (e) => {
    e.preventDefault();
    const user = {search}
    const fetchedData = await fetch(`/api/courses/search?${new URLSearchParams(user).toString()}`);

   const json = await fetchedData.json()

setCourses(json)
}
const handleSubmit1 = async (e) => {
    //const priceVal = {price:price}
    e.preventDefault();
    // const seacrhVal = {title:title,subject:subject,Instructor:Instructor}
    if (minprice !== '' && maxprice !== '') {
        const response = await fetch(`/api/courses/filterbyprice/` + minprice + '/' + maxprice)
        const json = await response.json()
        if (!response.ok) {
            setError(json.error)
        }
        if (response.ok) {
            setCourses(json);
            setError(null)
        }
    }
    
    else {
        setError("please enter both fields!")
    }
}
const handleSubmit2 = async (e) => {
    e.preventDefault();
    const inputVal = { subject: subject, rating: rating }
    if (subject === '' || rating === '') { //or
        const response = await fetch(`/api/courses/subjectorRating?${new URLSearchParams(inputVal).toString()}`)
        const json = await response.json()
        if (!response.ok) {
            setError(json.error)
        }
        if (response.ok) {
            setCourses(json);
            console.log(json)
            setSubject('')
            setRating('')
            setError(null)
           
        }
    }
    else { //and 
        const response = await fetch(`/api/courses/subjectRating?${new URLSearchParams(inputVal).toString()}`)
        const json = await response.json()
        if (!response.ok) {
            setError(json.error)
        }
        if (response.ok) {
            setCourses(json);
            console.log(json)
            setSubject('')
            setRating('')
            setError(null)
           
        }
    }
}
    return (
        <div className="home">
        <div className="courses">
            {courses && courses.map( (course) => (
            <CourseDetails1 key={course._id} course={course} />
            ))}
        </div>
        <form className="pricefilter" onSubmit={handleSubmit1}>
                <input
                    type={"text"}
                    placeholder="enter min price"
                    onChange={(e) => setMinPrice(e.target.value)} />
                <input
                    type={"text"}
                    placeholder="enter max price"
                    onChange={(e) => setMaxPrice(e.target.value)} />
                <button onChange={(e) => setCourses(courses)}
                >Filter by Price </button>
                {error && <div className="error">{error}</div>}
            </form>
            <form className="subjectratingfilter" onSubmit={handleSubmit2}>
                <input className="subjectfilter"
                    type={"text"}
                    placeholder="filter by subject"
                    onChange={(e) => setSubject(e.target.value)} />
                <input className="ratingfilter"
                    type={"text"}
                    placeholder="filter by rating"
                    onChange={(e) => setRating(e.target.value)} />
                <button onChange={(e) => setCourses(courses)}>Filter</button>
                {/* {error && <div className="error">{error}</div>} */}
            </form>
        <form className="create" onSubmit={handleSubmit}>
        <label>search:</label>
        <input
        type="text"
        id="search"
        name="search"
        placeholder="Search by subject or title"
        onChange={(e) => setSearch(e.target.value)}
        value={search}
        />
        <button>Search</button>
        {error && <div className="error">{error}</div>}
        </form>
                </div>
    );
}
export default ItCourses;