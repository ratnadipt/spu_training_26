import { Link } from "react-router-dom";

function StudentDashboard() {
  return (
    <div className="dashboard">
      <h1>Student Dashboard</h1>

      <div className="student-container">
        <div className="col1">
          <Link to="/student/dashboard">Dashboard</Link>
          <Link to="/student/quiz">Start Quiz</Link>
          <Link to="/student/score">View Score</Link>
          <Link to="/student/logout">LogOut</Link>
        </div>
        <div className="col2"></div>
      </div>
    </div>
  );
}

export default StudentDashboard;
