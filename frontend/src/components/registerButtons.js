
const RegisterButtons = ({course,id}) => {
    return (
            <div className="course_container div"
              onClick={() => window.location.href=`/itReg?id=${course._id}&itid=${id}`}>
            <p><strong>Title : </strong>{course.title}</p>
            <p><strong>Total Hours: </strong>{course.totalHours}</p>
            <p><strong>Price: </strong>{course.price}</p>
            <p><strong>Rating: </strong>{course.rating}</p>
             </div>
             
            
       
    );
}


export default RegisterButtons;