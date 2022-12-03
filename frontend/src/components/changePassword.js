import { useState,useMemo } from 'react';
import React from 'react';

//import Select from 'react-select'
//import countryList from 'react-select-country-list'

const ChangePassword =()=> {
  const [password, setPassword] = useState('')
  const [error,setError] = useState(null)
 // const [username,setUsername] = useState('')

  //const options = useMemo(() => countryList().getData(), [])
  
 
  
  const handleSubmit = async (e) => {
    const user = {password}
   // const x ={password}
    const response = await fetch('/api/it/changePassword', {
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
    setPassword('');
    //setUsername('')
    setError(null)
    console.log("Changed!",json)
    }
}
return(
  <div>
           <form className="create" onSubmit={handleSubmit}>
         <input
        type={"text"}
        placeholder="enter new password"
        onChange={(e)=>  setPassword(e.target.value) }/>

          
 <button>Change</button>
        {error && <div className="error">{error}</div>}
 </form>

  </div>
)
}
export default ChangePassword











//mesh 3aref asta5dem el id fel patching ****