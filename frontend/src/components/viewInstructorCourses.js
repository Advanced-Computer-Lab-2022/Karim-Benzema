const ViewInstructorCourses = ({course}) => {
    return (
        <div className="course-details">
            <h4>{course.title}</h4>
            <p><strong>Title : </strong>{course.title}</p>
        </div>
    );
}

export default ViewInstructorCourses;