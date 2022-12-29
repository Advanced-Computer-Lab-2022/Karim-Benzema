const GetInstructors = ({instructor}) => {
    return (
        <div className="instructor-details">
            <p><strong>Username :</strong>{instructor.username}</p>
            <p><strong>Password: </strong>{instructor.password}</p>
            <p><strong>Country: </strong>{instructor.country}</p>
        </div>
    );
}

export default GetInstructors;