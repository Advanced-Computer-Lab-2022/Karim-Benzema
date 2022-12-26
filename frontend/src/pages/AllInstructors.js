import {useEffect,useState} from 'react';

//components 
import GetInstructors from '../components/getInstructors';



const AllInstructors = () => {

    const [instructors,setInstructor] = useState(null);

useEffect(() => {
    const fetchInstructor = async () => {
      const response = await fetch('/api/instructor/get')
      const json = await response.json()
 
    if(response.ok){
        setInstructor(json)
    }

    }

    fetchInstructor();
}, []);

    return (
        <div className="home">
        <div className="admins">
            {instructors && instructors.map( (instructor) => (
            <GetInstructors key={instructor._id} instructor={instructor} />
            ))}
        </div>
        </div>
    );

}

export default AllInstructors;