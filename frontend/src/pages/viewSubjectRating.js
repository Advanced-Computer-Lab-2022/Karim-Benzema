
//components 

import ViewSubjectRatings from "../components/viewSubjectRatings";
import React from 'react';
import NavbarInst from "../components/navbarInst";

const ViewSubjectRating = () => {
    return (
        <div className="view">
             <NavbarInst />
        <div className="courses">
    <ViewSubjectRatings/>

        </div>
        </div>
        
    );

}

export default ViewSubjectRating;