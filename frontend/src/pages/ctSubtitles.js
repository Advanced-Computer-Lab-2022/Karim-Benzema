import {useEffect,useState} from 'react';
import SubtitleDetails2 from '../components/subtitleDetails2';

const CtSubtitles = ({}) => {
    const [subtitles,setSubtitles] = useState(null);
    const params = new URLSearchParams(window.location.search);
    const id = params.get('id');
    const ctid = params.get('ctid');
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
            <SubtitleDetails2 key={subtitle._id} subtitle={subtitle} ctid={ctid}/>
            ))}
        </div>
        {/* <button className='green_btn' onClick={handleSubmit4}>Solve Exercise</button> */}
        </div>

    );

}

export default CtSubtitles;