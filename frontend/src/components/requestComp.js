import React from 'react';
import {useEffect,useState} from 'react';

const RequestComp = ({ct}) => {
    const [error,setError] = useState(null);

    const handleSubmit = async(e) => {  
        e.preventDefault();
        if ((true)){ 
            const response = await fetch('/api/admin/followupIT/'+ct._id, {
                method: 'PATCH',
                body: JSON.stringify(),
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
        }
    }
    }


    return (
        <div className="course_container div">
            <p><strong> </strong>{ct._id}</p>
            <p><strong>First Name : </strong>{ct.firstName}</p>
            <p><strong>Last Name : </strong>{ct.firstName}</p>
            <p><strong>Requests : </strong>{ct.firstName}</p>

            
          
        </div>
    );
}
export default RequestComp;