import { useState,useMemo } from 'react';
import React from 'react';

import Select from 'react-select'
import countryList from 'react-select-country-list'

const SelectCountriesIt =()=> {
  const [country, setCountry] = useState('')
  const [error,setError] = useState(null)
  const [username,setUsername] = useState('')

  const options = useMemo(() => countryList().getData(), [])

  
  const handleSubmit = async (e) => {
    const user = {username,country}
    const response = await fetch('/api/it/updateCountry', {
        method: 'PATCH',
        body: JSON.stringify(user),
        headers: {
            'Content-Type': 'application/json'
        }
})
const json = await response.json()
if(!response.ok){
    setError(json.error)
}
if(response.ok){
  setCountry('');
    setUsername('')
    setError("Added")
    console.log("Added!",json)
    }
}
return(
  <div>
           <form className="create" onSubmit={handleSubmit}>

 <Select options={options}     
onChange={(value) => setCountry(value.label)}
value={country} onSubmit={handleSubmit}/>
<br></br>
<div className="bottom_container">
 <button className='green_btn' >Add</button>
 </div>
 <div className="bottom_container">
        {error && <div className="error_msg2">{error}</div>}
        </div>
 </form>

  </div>
)
}
export default SelectCountriesIt
