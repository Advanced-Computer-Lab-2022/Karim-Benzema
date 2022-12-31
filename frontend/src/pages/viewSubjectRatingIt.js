
//components 

import ViewSubjectRatingsCt from "../components/viewSubjectRatingsCt";
import React from 'react';
import NavbarIt from "../components/navbarIt";

const ViewSubjectRatingIt = () => {
    return (
        <div className="view">
            <NavbarIt/>
        <div className="courses">
    <ViewSubjectRatingsCt/>

        </div>
        </div>
        
    );

}

export default ViewSubjectRatingIt;