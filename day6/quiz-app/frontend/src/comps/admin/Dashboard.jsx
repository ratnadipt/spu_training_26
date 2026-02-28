import AdminNavBar from "./AdminNavBar";
import { Link } from "react-router-dom";
import ManageQuestions from "./ManageQuestions";
function Dashboard() {
  return (
    <div className="dashboard">
      <AdminNavBar />

      <div className="admin-container">
        <div className="col1">
          <Link to="/admin/dashboard">Dashboard</Link>
          <Link to="/admin/manage-student">Manage Student</Link>
          <Link to="/admin/manage-question">Manage Question</Link>
          <Link to="/admin/scores">Scores</Link>
          <Link to="/admin/logout">LogOut</Link>
        </div>
        <div className="col2">
          <ManageQuestions />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
