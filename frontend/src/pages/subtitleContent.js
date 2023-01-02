import {useEffect,useState} from 'react';
import NavBar from '../components/Navbar';
import SubtitleDetails3 from '../components/subtitleDetails3';

//components 
//import CourseDetailsinst from '../components/courseDetailsinst';


const SubtitleContent = () => {
    const [link,setLink] = useState(null);
    const [error,setError] = useState(null)
    const [error1,setError1] = useState(null)
    const [description,setDescription] = useState(null)
    const [subtitles,setSubtitles] = useState(null);
    const params = new URLSearchParams(window.location.search);
    const id = params.get('id');

useEffect(() => {
    const fetchSubtitles = async () => {
      const response = await fetch('/api/courses/getSubtitleById/'+ id)
      const json = await response.json()
 
    if(response.ok){
        setSubtitles(json)
    }

    }

    fetchSubtitles();
}, []);
const handleSubmit = async (e) => {
    e.preventDefault();
    window.location=`/instQuestion`
}
const handleSubmit1 = async(e) => {  
    e.preventDefault();
    const inputVal= {id:id,link:link,description:description}
    if (link!=='' && description!=='' ){ 
        const response = await fetch('/api/instructor/upload', {
            method: 'PATCH',
            body: JSON.stringify(inputVal),
            headers: {
                'Content-Type': 'application/json'
            }
    })
    const json = await response.json()
if(!response.ok){
    setError(json.error)
}
if(response.ok){
  setError('Added')
  setLink('')
    }
}
else{
    setError1('Fill both fields')
}
}

    return (
        <div className="home">
             <NavBar />
        <div className="course_container">
            {subtitles && subtitles.map( (subtitle) => (
            <SubtitleDetails3 key={subtitle._id} subtitle={subtitle} />
            ))}
            
        
        </div>
    <br></br>
        <form className="bottom_container" onSubmit={handleSubmit1}>
       <input className="input" 
       type={"text"}
       placeholder="link"
       onChange={(e)=>setLink(e.target.value)}
       />
       &nbsp; &nbsp;  &nbsp;
       <input className="input" 
       type={"video description"}
       placeholder="description"
       onChange={(e)=>setDescription(e.target.value)}
       />
          &nbsp; &nbsp;  &nbsp;
       <button className='green_btn' onChange={(e) => handleSubmit1()}>Upload Link</button>
       {error && <div className="error_msg2">{error}</div>}
       {error1 && <div className="error_msg">{error1}</div>}
       </form>
       <form className='bottom_container'>
       <button className='green_btn' onClick={handleSubmit}>Create Exercise</button>
       </form>
        </div>

    );

}

export default SubtitleContent;