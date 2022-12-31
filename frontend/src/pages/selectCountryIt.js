
//components 

import SelectCountriesIt from "../components/selectCountriesIt";
import React from 'react';
import NavbarIt from "../components/navbarIt";

const selectCountryIt = () => {
    return (
        <div className="select">
            <NavbarIt/>
        <div className="country">
    <SelectCountriesIt/>

        </div>
        </div>
        
    );

}

export default selectCountryIt;