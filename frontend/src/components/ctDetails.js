const CtDetails = ({ct}) => {
    return (
        <div className="ct-details">
            <p><strong>name : </strong>{ct.name}</p>
            <p><strong>usernsme: </strong>{ct.username}</p>
            <p><strong>password: </strong>{ct.password}</p>
            <p><strong>country: </strong>{ct.country}</p>
        </div>
    );
}

export default CtDetails;