import { useState,useMemo } from 'react';
import React from 'react';

import Select from 'react-select'
import countryList from 'react-select-country-list'

const SelectCountriesIt =()=> {
  const params = new URLSearchParams(window.location.search);
  const id = params.get('id');
  console.log(id)
  const [country, setCountry] = useState('')
  const [error,setError] = useState(null)

  const options = useMemo(() => countryList().getData(), [])

  
  const handleSubmit = async (e) => {
    const user = {country}
    const response = await fetch('/api/it/updateCountry/'+id, {
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
    setError(null)
    console.log("Added!",json)
    }
}
return(
  <div>
           <form className="kd" onSubmit={handleSubmit}>
 <Select options={options}     
onChange={(value) => setCountry(value.label)}
value={country}
 onSubmit={handleSubmit}/>
  &nbsp; &nbsp; &nbsp;
  <div className="bottom_container" >
  <button  className="green_btn" >Add</button>
        {error && <div className="error">{error}</div>}
  </div>
 </form>
  </div>
)
}

export default SelectCountriesIt
