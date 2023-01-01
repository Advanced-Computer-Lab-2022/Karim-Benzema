import {useEffect,useState} from 'react';

//components 
import Instdeets from '../components/instdeets';


const instRating = () => {

    const [instructor,setinstructor] = useState(null);

useEffect(() => {
    const fetchRatings= async () => {
      const response = await fetch('/api/instructor/getMyRating')
      const json = await response.json()
 
    if(response.ok){
        setinstructor(json)
    }

    }

    fetchRatings();
}, []);

    return (
        <div className="home">
        <div className="instructor">
            {instructor && instructor.map( (instructor) => (
            <Instdeets key={instructor._id} instructor={instructor} />
            ))}
        </div>
        </div>
    );

}

export default instRating;