import AdminLogin from "./comps/admin/AdminLogin";
import Dashboard from "./comps/admin/Dashboard";
import Login from "./comps/student/Login";
import Register from "./comps/student/Register";
import { Routes, Route, Link } from "react-router-dom";
import StudentDashboard from "./comps/student/StudentDashboard";
import Quiz from "./comps/student/Quiz";

function App() {
  return (
    <div className="app">
      <header>
        <h1 className="title">Quiz App</h1>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/register">Register</Link>
            </li>
            <li>
              <Link to="/admin-login">Admin</Link>
            </li>
          </ul>
        </nav>
      </header>

      <Routes>
        <Route path="/" element={<h1>Home Page</h1>} />
        <Route path="/login" element={<Login />} />
        <Route path="/admin-login" element={<AdminLogin />} />
        <Route path="/register" element={<Register />} />
        <Route path="/admin-dashboard" element={<Dashboard />} />
        <Route path="/student/dashboard" element={<StudentDashboard />} />
        <Route path="/student/dashboard" element="" />
        <Route path="/student/quiz" element={<Quiz />} />
        <Route path="/student/score" element="" />
      </Routes>
    </div>
  );
}

export default App;
