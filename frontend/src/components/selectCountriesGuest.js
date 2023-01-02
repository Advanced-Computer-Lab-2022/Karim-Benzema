import { useState,useMemo } from 'react';
import React from 'react';

import Select from 'react-select'
import countryList from 'react-select-country-list'
import NavbarGuest from './navbarGuest';
;

const SelectCountriesGuest =()=> {
  const [country, setCountry] = useState('')
  const [error,setError] = useState(null)
  const [error2,setError2] = useState(null)

  const options = useMemo(() => countryList().getData(), [])

  
  const handleSubmit = async (e) => {
    e.preventDefault()
    // console.log(country)
    if(country){
    setCountry(country)
    localStorage.setItem('country',country)
    setError('Added')
}
else{
  setError2('Required Field')
}
}
return(
  <div>
    <NavbarGuest/>
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

export default SelectCountriesGuest
