import {BrowserRouter , Routes, Route} from 'react-router-dom';
//pages & components
import Home from './pages/Home';
import NavBar from './components/Navbar';
import AddAdmin from './pages/AddAdmin';




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
        </Routes> 
      </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
