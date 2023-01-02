import {useEffect,useState} from 'react';

//components 
import GetAdmins from '../components/getAdmins';



const AllAdmins = () => {

    const [admins,setAdmins] = useState(null);

useEffect(() => {
    const fetchAdmins = async () => {
      const response = await fetch('/api/admin/getAdmins')
      const json = await response.json()
 
    if(response.ok){
        setAdmins(json)
    }

    }

    fetchAdmins();
}, []);

    return (
        <div className="home">
        <div className="admins">
            {admins && admins.map( (admin) => (
            <GetAdmins key={admin._id} admin={admin} />
            ))}
        </div>
        </div>
    );

}

export default AllAdmins;