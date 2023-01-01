
//components 
import Select from "react-dropdown-select";
import countryList from "react-select-country-list";
import SelectCountries from "../components/selectCountries";
import React from 'react';

const selectCountry = () => {
    return (
        <div className="select">
        <div className="country">
    <SelectCountries/>

        </div>
        </div>
        
    );

}

export default selectCountry;