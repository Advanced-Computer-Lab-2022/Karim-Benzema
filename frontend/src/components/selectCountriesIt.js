import { useState,useMemo } from 'react';
import React from 'react';

import Select from 'react-select'
import countryList from 'react-select-country-list'
import NavbarIt from './navbarIt';

const SelectCountriesIt =()=> {
  const params = new URLSearchParams(window.location.search);
  const itid = params.get('id');
  console.log(itid)
  const [country, setCountry] = useState('')
  const [error,setError] = useState(null)
  const [error2,setError2] = useState(null)

  const options = useMemo(() => countryList().getData(), [])

  
  const handleSubmit = async (e) => {
    const user = {country}
    if(country!==''){
    const response = await fetch('/api/it/updateCountry/'+itid, {
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
    setError('Added')
    console.log("Added!",json)
    }
}
else{
  setError2('Required Field')
}}
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
  &nbsp; &nbsp;  &nbsp;
  {error && <div className="error_msg2">{error}</div>}
  {error2 && <div className="error_msg">{error2}</div>}
  </div>
 </form>
  </div>
)
}

export default SelectCountriesIt
