
//components 

import ViewSubjectRatings from "../components/viewSubjectRatings";
import React from 'react';
import NavBar from "../components/Navbar";

const ViewSubjectRating = () => {
    return (
        <div className="view">
             <NavBar />
        <div className="courses">
    <ViewSubjectRatings/>

        </div>
        </div>
        
    );

}

export default ViewSubjectRating;