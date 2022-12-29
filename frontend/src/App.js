import {BrowserRouter , Routes, Route} from 'react-router-dom';
import {React,Redirect} from 'react';
//pages & components
import { Navigate } from "react-router-dom";
import Home from './pages/Home';
import NavBar from './components/Navbar';
import AddAdmin from './pages/AddAdmin';
import AddInstructor from './pages/addInstructor';
import AddCT from './pages/addCT';
import AddCourse from './pages/AddCourse'
import InstCourses from './pages/InstCourses';
import GuestCourses from './pages/GuestCourses';
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
import ItAnswer from './pages/itAnswer';
import AnswerExam from './pages/answerExam';
import CourseDeets from './pages/courseDeets';
import ChangePasswordIT from './components/changePasswordIT';
import ChangePasswordCT from './components/changePasswordCT';
import ChangePasswordINST from './components/changePasswordInstructor';
import InstCourseDeets from './pages/instCourseDeets';
import InsteditBio from './pages/InstEditBio';
import InsteditEmail from './pages/InstEditEmail';
import SubtitleContent from './pages/subtitleContent';
import ForgotPassword from './components/ForgotPassword';
import PasswordReset from './components/PasswordReset';
import Contract from './components/Contract';
import Signup from './components/Signup';
import Login from './components/Login';
import Main from './components/Main';
import ItSubtitles from './pages/itCourseSubtitles'
import CThome from './pages/CT';
import CourseDeets2 from './pages/courseDeets2';
import GuestSubtitles from './pages/guestSubtitles';
import Cookies from 'js-cookie';
import ViewProblems from './pages/ViewProblems';
import GuestCourses2 from './pages/itregister';
import Itregister from './pages/itregister';
import CtSubtitles from './pages/ctSubtitles'
import AnswerExamCt from './pages/answerExamsCt';
import AdminHome from './pages/AdminHome';
import AdminProblems from './pages/AdminProblems';
import GuestExam from './pages/guestExam';
import Payment from './components/payment';
import Completion from './components/completion';
import ItProfile from './pages/itProfile';
import InstProfile from './pages/instProfile';

function App() {
  let role = Cookies.get('role')
  console.log(role) 
  return (
    <div className="App">
      <BrowserRouter>
      <NavBar />
      <div className= "pages">
        <Routes>

          {/* dont need authentication */}
          <Route path="/completion" element={<Completion/>}/>
          <Route path="/"element={<Home/>}/>
          <Route path="/forgotpassword" element={<ForgotPassword/>}/>
          <Route path="/passwordReset/:id/:token"element={<PasswordReset/>}/>
          <Route path="/SignUp"element={<Signup/>}/>
          <Route path="/Login"element={<Login/>}/>
          <Route path="/Main"element={<Main/>}/>
          <Route path="/viewExamGuest"element={<GuestExam/>}/>
          
          {/* if not logged in */}
          {role === undefined ? 
          (
            <Route>
            <Route path='/Login' element={<Login/>}/> 
            <Route path="/GuestCourses"element={<GuestCourses />}/>
            <Route path="/GuestPrice"element={<GuestPrices/>}/>
            <Route path="/viewSubjectRatingGuest"element={<ViewSubjectRatingGuest />}/>
            <Route path="/GuestCourse"element={<GuestCourses/>}/>
            <Route path="/guestSubtitles"element={<GuestSubtitles/>}/>
            <Route path="/viewExamGuest"element={<GuestExam/>}/>

            </Route>
          )
          :( 
          <Route path='/Login' element={<Login/>}/> 
          )}
          {/* needs authentication */}
          {/* instructor routes */}
          {role === 'instructor' ? 
          (
            
            <Route>
          <Route path="/InstCourses" element={<InstCourses />} />
          <Route path="/InstructorCourses" element={<InstructorCourses />}/>
          <Route path="/InstructorCourses" element={<InstructorCourses />}/>
          <Route path="/selectCountryInst" element={<SelectCountryInst />}/>
          <Route path="/insthome" element={<InstHome/>}/>
          <Route path="/instQuestion" element={<InstQuestion/>}/>
          <Route path="/InstCourse" element={<InstCourseDeets/>}/>
          <Route path="/changePasswordInst" element={<ChangePasswordINST/>}/>
          <Route path="/contract" element={<Contract/>}/>
          <Route path="/AddCourse" element={<AddCourse />}/>
          <Route path="/viewSubjectRating"element={<ViewSubjectRating />}/>
          <Route path="/subtitlecontent"element={<SubtitleContent/>}/>
          <Route path="/Subtitle"element={<SubtitleContent/>}/>
          <Route path="/GuestCourse"element={<GuestCourses/>}/>
          <Route path="/guestSubtitles"element={<GuestSubtitles/>}/>
          <Route path="/profileinst"element={<InstProfile/>}/>
          </Route>
           
          )
          :( 
          <Route  element={<Navigate to="/login" />}/> 
          )}
          {/* IT routes */}
          {role === 'it' ? 
          (
          <Route>
          <Route path="/payment" element={<Payment/>}/>
          <Route path="/ithome"element={<ItHome/>}/>     
          <Route path="/ItPrice" element={<ItPrices />}/>
          <Route path="/selectCountryIt" element={<SelectCountryIt />}/>
          <Route path="/viewSubjectRatingIt"element={<ViewSubjectRatingIt />}/>
          <Route path="/changePasswordIt" element={<ChangePasswordIT/>}/>
          <Route path="/answerExam" element={<AnswerExam/>}/>
          <Route path="/Course"element={<CourseDeets/>}/>
          <Route path="/itSubtitles"element={<ItSubtitles/>}/>
          <Route path="/itReg"element={<Itregister/>}/>
          <Route path="/guestSubtitles"element={<GuestSubtitles/>}/>
          <Route path="/viewExam"element={<AnswerExam/>}/>
          <Route path="/viewproblems"element={<ViewProblems/>}/>
          <Route path="/GuestCourse"element={<GuestCourses/>}/>
          <Route path="/guestSubtitles"element={<GuestSubtitles/>}/>
          <Route path="/profileit"element={<ItProfile/>}/>
          </Route>
           
          )
          :( 
          <Route path='/Login' element={<Login/>}/> 
          )}
          {/* CT routes */}
          {role === 'ct' ? 
          (
            
          <Route>
          <Route path="/selectCountry" element={<SelectCountry />}/>
          <Route path="/cthome" element={<CThome/>}/>
          <Route path="/changePasswordCt" element={<ChangePasswordCT/>}/>
          <Route path="/viewSubjectRatingCt"element={<ViewSubjectRatingCt />}/>
          <Route path="/Subtitle"element={<SubtitleContent/>}/>
          <Route path="/Coursesct"element={<CourseDeets2/>}/>
          <Route path="/itSubtitles"element={<ItSubtitles/>}/>
          <Route path="/GuestCourse"element={<GuestCourses/>}/>
          <Route path="/guestSubtitles"element={<GuestSubtitles/>}/>
          <Route path="/ctSubtitles"element={<CtSubtitles/>}/>
          <Route path="/viewExamCt"element={<AnswerExamCt/>}/>

         
          </Route>
          
          )
          :( 
          <Route path='/Login' element={<Login/>}/> 
          )}
          {/* admin routes */}
          {role === 'admin' ? 
          (
            
          <Route>
          <Route path="/adminhome"element={<AdminHome />}/> 
          <Route path="/AddAdmin"element={<AddAdmin />}/>
          <Route path="/AddInstructor"element={<AddInstructor />}/>
          <Route path="/AddCT"element={<AddCT />}/>
          <Route path="/ReportedProblems"element={<AdminProblems />}/>
          </Route>
           
          )
          :( 
          <Route path='/Login' element={<Login/>}/> 
          )}
          <Route path="*" element={<h1>Access Denied</h1>}/>

       </Routes> 
       
      </div>

      </BrowserRouter>
    </div>
  );
  // <Route path="/viewExam"element={<AnswerExamCt/>}/>
}

export default App;
