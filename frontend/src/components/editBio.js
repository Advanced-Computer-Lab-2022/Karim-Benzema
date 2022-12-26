import { useState,useMemo } from 'react';
import React from 'react';

//import Select from 'react-select'
//import countryList from 'react-select-country-list'

const EditBio =()=> {
  const [miniBio, setBio] = useState('')
  //const [id, setId] = useState('')
  const [error,setError] = useState(null)
 // const [username,setUsername] = useState('')

  //const options = useMemo(() => countryList().getData(), [])
  
 
  
  const handleSubmit = async (e) => {
    const user = {miniBio}
   // const x ={password}
    const response = await fetch('/api/instructor/editbio', {
        method: 'PATCH',
        body:JSON.stringify(user),
       // body: JSON.stringify(x),
        headers: {
            'Content-Type': 'application/json'
        }
})
const json = await response.json()
if(!response.ok){
    setError(json.error)
}
if(response.ok){
    setBio('');
    //setUsername('')
    setError(null)
    console.log("Changed!",json)
    }
}
return(
  <div>
           <form className="create" onSubmit={handleSubmit}>
           <input  className="new password" 
        type={"text"}
        placeholder="new bio"
        onChange={(e)=>  setBio(e.target.value) }/>
       

          
 <button>Change</button>
        {error && <div className="error">{error}</div>}
 </form>

  </div>
)
}
export default EditBio











//mesh 3aref asta5dem el id fel patching ****