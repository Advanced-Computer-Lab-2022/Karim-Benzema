import {useEffect,useState} from 'react';

//components 
import CourseDetails1 from '../components/courseDetails1';


const ItCourses = () => {

    const [courses,setCourses] = useState(null);
    const [search,setSearch] = useState('')
    const [error,setError] = useState(null)

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

    return (
        <div className="home">
        <div className="courses">
            {courses && courses.map( (course) => (
            <CourseDetails1 key={course._id} course={course} />
            ))}
        </div>
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