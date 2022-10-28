import {BrowserRouter , Routes, Route} from 'react-router-dom';
//pages & components
import Home from './pages/Home';
import NavBar from './components/Navbar';
import AddAdmin from './pages/AddAdmin';
<<<<<<< HEAD
import AddInstructor from './pages/AddInstructor';
import AddCT from './pages/AddCT';
=======
import Home1 from './pages/CourseHome';

>>>>>>> d058f4d51b7f27c85bbd2c3be94635b97bb2a76c




function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <NavBar />
      <div className= "pages">
        <Routes>
          <Route 
          path="/"
          element={<Home />}
          />
          <Route
          path="/Courses1"
          element={<Home1/>}
          />
          <Route 
          path="/AddAdmin"
          element={<AddAdmin />}
          />
          <Route 
          path="/AddInstructor"
          element={<AddInstructor />}
          />
          <Route 
          path="/AddCT"
          element={<AddCT />}
          />
        </Routes> 
      </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
