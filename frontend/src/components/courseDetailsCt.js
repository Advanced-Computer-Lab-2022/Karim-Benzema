const CourseDetailsCt = ({course,ctid}) => {
    return (
        <div className="course_container div"
              onClick={() => window.location.href=`/ctrequest?id=${course._id}&ctid=${ctid}`}>
            <p><strong>Title : </strong>{course.title}</p>
            <p><strong>Total Hours: </strong>{course.totalHours}</p>
            <p><strong>Rating: </strong>{course.rating}</p>
        </div>
    );
}

export default CourseDetailsCt;