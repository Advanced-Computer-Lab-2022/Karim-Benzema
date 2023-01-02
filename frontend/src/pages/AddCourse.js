
//components 
import CreateCourse from '../components/createCourse';
import NavBar from '../components/Navbar';

const AddCourse = () => {
    return (
        <div className="home">
             <NavBar />
             <br></br>
             <br></br>
        <div className="create">
            <CreateCourse /> 
        </div>
        </div>
        
    );

}

export default AddCourse;
