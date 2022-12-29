import {useEffect,useState} from 'react';
import SubtitleDetails from '../components/subtitleDetails';

const ItSubtitles = ({}) => {
    const [subtitles,setSubtitles] = useState(null);
    const params = new URLSearchParams(window.location.search);
    const id = params.get('id');
    const itid = params.get('itid');
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
// const handleSubmit4 = async(e) => {  
//     e.preventDefault();
//     window.location = `/viewExam?id=`+id

// }

    return (
        <div className="home">
        <div className="courses">
            {subtitles && subtitles.map( (subtitle) => (
            <SubtitleDetails key={subtitle._id} subtitle={subtitle} itid={itid}/>
            ))}
        </div>
        {/* <button className='green_btn' onClick={handleSubmit4}>Solve Exercise</button> */}
        </div>

    );

}

export default ItSubtitles;