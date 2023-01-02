import React from 'react';

const ProfileCt = ({ct}) => {
    return (
        <div className="course_container div">
            <p><strong>UserName: </strong>{ct.username}</p>
            <p><strong>Email: </strong>{ct.email}</p>
        </div>
    );
}

export default ProfileCt;