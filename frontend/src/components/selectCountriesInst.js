import { useState,useMemo } from 'react';
import React from 'react';

import Select from 'react-select'
import countryList from 'react-select-country-list'

const SelectCountriesInst =()=> {
  const params = new URLSearchParams(window.location.search);
  const id = params.get('id');
  console.log(id)
  const [country, setCountry] = useState('')
  const [error,setError] = useState(null)
  const [username,setUsername] = useState('')

  const options = useMemo(() => countryList().getData(), [])

  
  const handleSubmit = async (e) => {
    const user = {username,country}
    const response = await fetch('/api/instructor/updateCountry/'+id, {
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
          <br></br>
          <br></br>
      <form className="form_container" onSubmit={handleSubmit}>         
        <Select options={options}     
        onChange={(value) => setCountry(value.label)}
        value={country}
        onSubmit={handleSubmit}/>
          &nbsp; &nbsp; &nbsp;
          <div className="bottom_container" >
          <button  className="green_btn" >Add</button>
          </div>
          <form className='bottom_container'>
                {error && <div className="error_msg2">{error}</div>}
                </form>
        </form>
          </div>
)
}
export default SelectCountriesInst
