
//components 

import ViewSubjectRatingsCt from "../components/viewSubjectRatingsCt";
import React from 'react';
import NavBar from "../components/Navbar";

const ViewSubjectRatingCt = () => {
    return (
        <div className="view">
            <NavBar/>
        <div className="courses">
    <ViewSubjectRatingsCt/>

        </div>
        </div>
        
    );

}

export default ViewSubjectRatingCt;