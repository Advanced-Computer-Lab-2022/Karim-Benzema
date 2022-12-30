import {useEffect,useState} from 'react';
import SubtitleDetails from '../components/subtitleDetails';

//components 
//import CourseDetailsinst from '../components/courseDetailsinst';


const SubtitleContent = () => {
    const [link,setLink] = useState(null);
    const [error,setError] = useState(null)
    const [description,setDescription] = useState(null)
    const [number,setNumber] = useState(null)
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
    const inputVal= {id:id,number:number,link:link,description:description}
    if (link!=='' ){ 
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
  setError(null)
  setLink('')
    }
}
}

    return (
        <div className="home">
        <div className="courses">
            {subtitles && subtitles.map( (subtitle) => (
            <SubtitleDetails key={subtitle._id} subtitle={subtitle} />
            ))}
        </div>
        <button onClick={handleSubmit}>Create Exercise</button>
        <form className="Upload" onSubmit={handleSubmit1}>
        <input className="link" 
        type={"text"}
        placeholder="link"
        onChange={(e)=>setLink(e.target.value)}
        />
        <input className="description" 
        type={"video description"}
        placeholder="description"
        onChange={(e)=>setDescription(e.target.value)}
        />
        <input className="Subtitle Number" 
        type={"Subtitle Number"}
        placeholder="number"
        onChange={(e)=>setNumber(e.target.value)}
        />
        <button onChange={(e) => handleSubmit1()}>Upload Link</button>
        {error && <div className="error">{error}</div>}
        </form>
        </div>

    );

}

export default SubtitleContent;