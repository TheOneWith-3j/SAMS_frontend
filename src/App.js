import React from "react";
import OutstandingInstitution from "./container/Pages/Forms/OutstandingInstitution";
import SportsStar from './container/Pages/Forms/SportsStar'
import Teaching from './container/Pages/Forms/Teaching'
import Research from './container/Pages/Forms/Research'
import NonTeaching from './container/Pages/Forms/NonTeaching'
import FeedbackTeachingST from './container/Pages/Forms/FeedbackTeachingST'
import FeedbackTeachingPR from './container/Pages/Forms/FeedbackTeachingPR'
import FeedbackNonTeachingST from './container/Pages/Forms/FeedbackNonTeachingST'
import FeedbackNonTeachingPR from './container/Pages/Forms/FeedbackNonTeachingPR'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./container/Pages/Login";
import ForgotPassword from "./container/Pages/ForgotPassword";
import ResetPassword from "./container/Pages/ResetPassword";
import Card from "./container/Pages/Utility/Card";
import Admin from "./container/views/admin/Admin";
import Responses from "./container/Pages/View Pages/Responses";
import Home from "./container/Pages/Home";
import Hoi from "./container/views/hoi/Hoi";
import PageNotFound from "./container/Pages/Utility/PageNotFound";
import Ieac from "./container/views/ieac/Ieac";
import ManageUsers from "./container/Pages/View Pages/ManageUsers";
import Analysis from "./container/Pages/View Pages/Analysis";
import Review from "./container/views/ieac/ieacPages/Review";
import ScoreCard from "./container/views/admin/components/ScoreCard";
import Students from "./container/Pages/Forms/Students";
import StudentsAdmin from "./container/views/studentsAdmin/StudentsAdmin";
import SportsAdmin from "./container/views/sportsAdmin/SportsAdmin";
import Results from "./container/Pages/Results";
import Groups from "./container/Pages/Groups";
import Guidelines from "./container/Pages/Guidelines";
import About from "./container/Pages/About";
import Student from "./container/views/students/Student";
import Peers from "./container/views/peers/Peers";
import StudentResponses from "./container/views/studentsAdmin/components/StudentResponses";
import SportsResponses from "./container/views/sportsAdmin/pages/SportsResponses";
import Announce from "./container/views/admin/pages/Announce";
import ResearchAdmin from "./container/views/researchAdmin/ResearchAdmin";
import ResearchResponses from "./container/views/researchAdmin/pages/ResearchResponses";
import Users from "./container/views/admin/pages/Users";
import Dev from "./container/Pages/Utility/Dev";
 
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index  element={<Home />}  />
        <Route path="/results" element={<Results />} />
        <Route path="/org-dev" element={<Dev />} />
        <Route path="/groups" element={<Groups />} />
        <Route path="/guidelines" element={<Guidelines />} />
        <Route path="/about" element={<About />} />
        <Route path="/students" element={<Student />} />
        <Route path="/peers" element={<Peers />} />
        <Route path="/auth/login" element={<Login />} />
        <Route path="/auth/forgot-password" element={<ForgotPassword />} />
        <Route path="/auth/:id/:token" element={<ResetPassword />} />
        <Route path="/forms/cards" element={<Card />} />
        <Route path='/hoi' element={<Hoi />} />
        <Route path='/hoi/analysis/:form' element={<Analysis />} />
        <Route path="/ieac" element={<Ieac />} />
        <Route path="/ieac/review/:form" element={<Review />} />
        <Route path='/admin/dashboard' element={<Admin />} />
        <Route path="/admin/responses/:formType" element={<Responses />} />
        <Route path="/admin/:formType/scorecard/:id" element={<ScoreCard />} />
        <Route path="/admin/manage-users" element={<ManageUsers />} />
        
        <Route path="/admin/users" element={<Users />} />
        <Route path="/admin/announce-result" element={<Announce />} />
        <Route path="/students-admin" element={<StudentsAdmin />} />
        <Route path="/students-admin/responses/:formType" element={<StudentResponses />} />
        <Route path="/sports-admin" element={<SportsAdmin />} />
        <Route path="/sports-admin/responses/:formType" element={<SportsResponses />} />
        <Route path="/research-admin" element={<ResearchAdmin />} />
        <Route path="/research-admin/responses/research" element={<ResearchResponses />} />
        <Route path="/forms/outstanding-institution" element={<OutstandingInstitution />}  />
        <Route path="/forms/sports" element={<SportsStar />}  />
        <Route path="/forms/research" element={<Research />}  />
        <Route path="/forms/teaching" element={<Teaching />}  />
        <Route path="/forms/non-teaching" element={<NonTeaching />}  />
        <Route path="/forms/students" element={<Students />}  />
        <Route path="/forms/feedback-01" element={<FeedbackTeachingST />}  />
        <Route path="/forms/feedback-02" element={<FeedbackTeachingPR />}  />
        <Route path="/forms/feedback-03" element={<FeedbackNonTeachingST />}  />
        <Route path="/forms/feedback-04" element={<FeedbackNonTeachingPR />}  />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
