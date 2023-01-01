import React from 'react';

const ProfileIt = ({it}) => {
    return (
        <div className="course_container div">
            <p><strong>UserName: </strong>{it.username}</p>
            <p><strong>Email: </strong>{it.email}</p>
            <p><strong>Wallet: </strong>{it.wallet}</p>
        </div>
    );
}

export default ProfileIt;