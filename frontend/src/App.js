import {BrowserRouter , Routes, Route} from 'react-router-dom';
//pages & components
import Home from './pages/Home';
import NavBar from './components/Navbar';
import AddAdmin from './pages/AddAdmin';
import AddInstructor from './pages/AddInstructor';
import AddCT from './pages/AddCT';




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
