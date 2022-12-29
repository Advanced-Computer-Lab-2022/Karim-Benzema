const GetAdmins = ({admin}) => {
    return (
        <div className="admin-details">
            <p><strong>Username :</strong>{admin.username}</p>
            <p><strong>Password: </strong>{admin.password}</p>
        </div>
    );
}

export default GetAdmins;