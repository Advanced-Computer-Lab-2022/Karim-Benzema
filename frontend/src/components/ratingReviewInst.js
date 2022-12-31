import React from 'react';

const RatingReviewInst = ({instructor}) => {
    return (
        <div className="course_container div">
            {/* <p><strong>Rating: </strong>{instructor.rating}</p> */}
            <p><strong>UserName: </strong>{instructor.username}</p>
            <p><strong>Email: </strong>{instructor.email}</p>
            <p><strong>MiniBio: </strong>{instructor.miniBio}</p>
            <p><strong>Ratings: </strong>{instructor.ratings+' '} </p>
            <p><strong>Reviews: </strong>{instructor.reviews+' '}</p>
        </div>
    );
}

export default RatingReviewInst;