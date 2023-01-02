
//components 
import Select from "react-dropdown-select";
import countryList from "react-select-country-list";
import SelectCountries from "../components/selectCountries";
import React from 'react';
import NavBar from "../components/Navbar";

const selectCountry = () => {
    return (
        <div className="select">
            <NavBar/>
        <div className="country">
    <SelectCountries/>

        </div>
        </div>
        
    );

}

export default selectCountry;