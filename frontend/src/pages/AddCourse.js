
//components 
import CreateCourse from '../components/createCourse';
import NavbarInst from '../components/navbarInst';

const AddCourse = () => {
    return (
        <div className="home">
             <NavbarInst />
             <br></br>
             <br></br>
        <div className="create">
            <CreateCourse /> 
        </div>
        </div>
        
    );

}

export default AddCourse;
