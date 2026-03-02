import { Routes, Route } from "react-router-dom";
import Home from "./comps/common/Home";
import Contact from "./comps/common/Contact";
import About from "./comps/common/About";
import StudentLogin from "./comps/student/StudentLogin";
import StudentRegistration from "./comps/student/StudentRegistration";
import StudentDashboard from "./comps/student/StudentDashboard";
import StudentComplaints from "./comps/student/StudentComplaints";
import StudentSuggestions from "./comps/student/StudentSuggestions";
import StudentComplaint from "./comps/student/StudentComplaint";
import StudentSuggestion from "./comps/student/StudentSuggestion";

import Login from "./comps/admin/Login";
import Register from "./comps/admin/Register";
import Dashboard from "./comps/admin/Dashboard";
import ViewComplaints from "./comps/admin/ViewComplaints";
import ViewStudents from "./comps/admin/ViewStudents";
import ViewSuggestions from "./comps/admin/ViewSuggestions";
import Header from "./comps/common/Header";

import "./App.css";

function App() {
  return (
    <div className="app">
      <Header />

      <Routes>
        <Route path="/" element=<Home /> />
        <Route path="/about" element=<About /> />
        <Route path="/contact" element=<Contact /> />
        <Route path="/login" element=<StudentLogin /> />
        <Route path="/register" element=<StudentRegistration /> />
        <Route path="/student" element=<StudentDashboard />>
          <Route path="view-complaints" element=<StudentComplaints /> />
          <Route path="add-complaints" element=<StudentComplaint /> />
          <Route path="view-suggestions" element=<StudentSuggestions /> />
          <Route path="add-suggestions" element=<StudentSuggestion /> />
        </Route>
        <Route path="/admin/login" element=<Login /> />
        <Route path="/admin/register" element=<Register /> />
        <Route path="/admin" element=<Dashboard />>
          <Route path="view-students" element=<ViewStudents /> />
          <Route path="view-complaints" element=<ViewComplaints /> />
          <Route path="view-suggestions" element=<ViewSuggestions /> />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
