import React from 'react';

const RatingReviewInst = ({instructor}) => {
    return (
        <div className="inst-details">
            <p><strong>Rating: </strong>{instructor.rating}</p>
            <p><strong>Ratings: </strong>{instructor.ratings+' '} </p>
            <p><strong>Reviews: </strong>{instructor.reviews+' '}</p>
        </div>
    );
}

export default RatingReviewInst;