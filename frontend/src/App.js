
import {BrowserRouter , Routes, Route} from 'react-router-dom';
//pages & components
import Home from './pages/Home';
import NavBar from './components/Navbar';
import AddAdmin from './pages/AddAdmin';
import AddInstructor from './pages/addInstructor';
import AddCT from './pages/addCT';
import AddCourse from './pages/AddCourse'
import ItCourses from './pages/ItCourses';
import InstCourses from './pages/InstCourses';
import GuestCourses from './pages/GuestCourses';
import CtCourses from './pages/CtCourses';
import GuestPrices from './pages/CoursePriceGuest';
import InstPrices from './pages/CoursePriceinst';
import ItPrices from './pages/CoursePriceIt';
import CTs from './pages/CT';
import InstructorCourses from './pages/InstructorCourses';
import AllAdmins from './pages/AllAdmins';
import AllInstructors from './pages/AllInstructors';
import SelectCountry from './pages/selectCountry';

import ViewSubjectRating from './pages/viewSubjectRating';
import SelectCountryInst from './pages/selectCountryInst';
import SelectCountryIt from './pages/selectCountryIt';

import ViewSubjectRatingCt from './pages/viewSubjectRatingCt';
import ViewSubjectRatingIt from './pages/viewSubjectRatingIt';
import ViewSubjectRatingGuest from './pages/viewSubjectRatingGuest';
import InstHome from './pages/InstHome';
import ItHome from './pages/ItHome';
import FilterInstCourses from './pages/FilterInstCourses';
import InstExam from './pages/instExam';
import InstQuestion from './pages/instQuestion';
import CourseDeets from './pages/courseDeets';
import ChangePassword from './components/changePassword';
import ChangePasswordCT from './components/changePasswordCT';
import ChangePasswordINST from './components/changePasswordInstructor';
import InstCourseDeets from './pages/instCourseDeets';
import InsteditBio from './pages/InstEditBio';
import InsteditEmail from './pages/InstEditEmail';
import SubtitleContent from './pages/subtitleContent';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <NavBar />
      <div className= "pages">
        <Routes>
          <Route 
          path="/"
          element={<Home/>}
          />
            <Route 
          path="/getCTs"
          element={<CTs />}
          />
           <Route 
          path="/ItCourses"
          element={<ItCourses />}
          />
           <Route 
          path="/InstCourses"
          element={<InstCourses />}
          />
           <Route 
          path="/GuestCourses"
          element={<GuestCourses />}
          />
           <Route 
          path="/CtCourses"
          element={<CtCourses />}
          />
           <Route 
          path="/GuestPrice"
          element={<GuestPrices />}
          />
           <Route 
          path="/InstPrice"
          element={<InstPrices />}
          />
           <Route 
          path="/ItPrice"
          element={<ItPrices />}
          />
          <Route 
          path="/AddAdmin"
          element={<AddAdmin />}
          />
          <Route 
          path="/AllAdmins"
          element={<AllAdmins />}
          />
          <Route 
          path="/AllInstructors"
          element={<AllInstructors />}
          />
          <Route 
          path="/AddInstructor"
          element={<AddInstructor />}
          />
          <Route 
          path="/InstructorCourses"
          element={<InstructorCourses />}
          />
          <Route 
          path="/AddCT"
          element={<AddCT />}
          />
          <Route 
          path="/AddCourse"
          element={<AddCourse />}
          />
          <Route 
          path="/AllAdmins"
          element={<AllAdmins />}
          />
          <Route 
          path="/AllInstructors"
          element={<AllInstructors />}
          />
          <Route 
          path="/InstructorCourses"
          element={<InstructorCourses />}
         />
          <Route 
          path="/selectCountry"
          element={<SelectCountry />}
          />
          
          <Route 
          path="/selectCountryInst"
          element={<SelectCountryInst />}
          />
            <Route 
          path="/selectCountryIt"
          element={<SelectCountryIt />}
          />
            <Route 
          path="/viewSubjectRating"
          element={<ViewSubjectRating />}
          />
            <Route 
          path="/viewSubjectRatingCt"
          element={<ViewSubjectRatingCt />}
          
          />
          <Route 
          path="/viewSubjectRatingIt"
          element={<ViewSubjectRatingIt />}
          
          />
          
          <Route 
          path="/viewSubjectRatingGuest"
          element={<ViewSubjectRatingGuest />}
          />
          <Route
          path="/instructorhome"
          element={<InstHome/>}
          />
          <Route 
          path="/ithome"
          element={<ItHome/>}
          />
           <Route 
          path="/filterinstructorcourses"
          element={<FilterInstCourses/>}
          />
       
          <Route 
          path="/instExam"
          element={<InstExam/>}
          />
           <Route 
          path="/insthome"
          element={<InstHome/>}
          />
         <Route 
          path="/instQuestion"
          element={<InstQuestion/>}
          />
          <Route 
          path="/Course"
          element={<CourseDeets/>}
          />
          <Route 
          path="/InstCourse"
          element={<InstCourseDeets/>}
          />
           <Route 
          path="/changePasswordIt"
          element={<ChangePassword/>}
          />
           <Route 
          path="/changePasswordCt"
          element={<ChangePasswordCT/>}
          />
           <Route 
          path="/changePasswordInst"
          element={<ChangePasswordINST/>}
          />
           <Route 
          path="/insteditbio"
          element={<InsteditBio/>}
          />
          <Route 
          path="/insteditemail"
          element={<InsteditEmail/>}
          />
          <Route 
          path="/subtitlecontent"
          element={<SubtitleContent/>}
          />
       
       </Routes> 
       
      </div>

      </BrowserRouter>
    </div>
  );
}

export default App;
