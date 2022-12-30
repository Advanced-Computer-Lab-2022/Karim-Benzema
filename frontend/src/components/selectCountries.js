import { useState,useMemo } from 'react';
import React from 'react';

import Select from 'react-select'
import countryList from 'react-select-country-list'

const SelectCountries =()=> {
  const [country, setCountry] = useState('')
  const [error,setError] = useState(null)
  const [username,setUsername] = useState('')

  const options = useMemo(() => countryList().getData(), [])

  
  const handleSubmit = async (e) => {
    const user = {username,country}
    const response = await fetch('/api/ct/updateCountry', {
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
    setError('Added')
    console.log("Added!",json)
    }
}
return(
  <div>
           <form className="create" onSubmit={handleSubmit}>
           <Select options={options}     
            onChange={(value) => setCountry(value.label)}
            value={country}
            onSubmit={handleSubmit}/>
          <br></br>
          <form className="bottom_container" onSubmit={handleSubmit} >
          <button className="green_btn">Add</button>
          </form>
          {error && <div className="error_msg2">{error}</div>}
  </form>
  </div>
)
}
export default SelectCountries
