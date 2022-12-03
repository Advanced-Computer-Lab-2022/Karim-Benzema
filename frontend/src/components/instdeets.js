import React from 'react';

const Instdeets = ({instructor}) => {
    return (
        <div className="inst-details">
            <h4>{instructor.title}</h4>
            <p><strong>Name : </strong>{instructor.name}</p>
            <p><strong>Rating: </strong>{instructor.rating}</p>
            <p><strong>Ratings: </strong>{instructor.ratings}</p>
        </div>
    );
}

export default Instdeets;