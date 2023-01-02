
//components 

import SelectCountriesIt from "../components/selectCountriesIt";
import React from 'react';
import NavBar from "../components/Navbar";

const selectCountryIt = () => {
    return (
        <div className="select">
            <NavBar/>
        <div className="country">
    <SelectCountriesIt/>

        </div>
        </div>
        
    );

}

export default selectCountryIt;