const CourseDetailsCt = ({course}) => {
    return (
        <div className="course_container div"
              onClick={() => window.location.href=`/GuestCourse?id=${course._id}`}>
            <p><strong>Title : </strong>{course.title}</p>
            <p><strong>Total Hours: </strong>{course.totalHours}</p>
            <p><strong>Rating: </strong>{course.rating}</p>
        </div>
    );
}

export default CourseDetailsCt;