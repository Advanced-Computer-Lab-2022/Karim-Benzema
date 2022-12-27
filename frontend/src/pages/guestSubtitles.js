import {useEffect,useState} from 'react';
import GuestSubtitleDetails from '../components/guestSubtitleDetails';

const GuestSubtitles = () => {
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
const handleSubmit4 = async(e) => {  
    e.preventDefault();
    window.location=`/viewExam`

}

    return (
        <div className="home">
        <div className="course_container">
            {subtitles && subtitles.map( (subtitle) => (
            <GuestSubtitleDetails key={subtitle._id} id={id} subtitle={subtitle} />
            ))}
        </div>
        <div className='bottom_container'>
        <button className='green_btn' onClick={handleSubmit4}>View Exercise</button>
         </div>
        </div>

    );

}

export default GuestSubtitles;