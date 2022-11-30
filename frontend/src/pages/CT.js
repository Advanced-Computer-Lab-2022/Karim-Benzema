import {useEffect,useState} from 'react';

//components 
import CtDetails from '../components/ctDetails.js';


const CTs = () => {

    const [ct,setCT] = useState(null);

useEffect(() => {
    const fetchCourses = async () => {
      const response = await fetch('/api/ct/hello')
      const json = await response.json()
 
    if(response.ok){
        setCT(json)
    }

    }

    fetchCourses();
}, []);

    return (
        <div className="home">
        <div className="ct">
            {ct && ct.map( (ct) => (
            <CtDetails key={ct._id} ct={ct} />
            ))}
        </div>
        </div>
    );

}

export default CTs;