const CourseD = ({course}) => {
    return (
        <div className="course-details">
            <h4>{course.title}</h4>
            <p><strong>Title : </strong>{course.title}</p>
            <p><strong>Total Hours: </strong>{course.totalHours}</p>
            <p><strong>Rating: </strong>{course.rating}</p>
        </div>
    );
}

export default CourseD;