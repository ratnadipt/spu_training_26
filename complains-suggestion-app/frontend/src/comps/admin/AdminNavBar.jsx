import { Link } from "react-router-dom";

function AdminNavBar() {
  return (
    <div className="container">
      <h1>Complaints & Suggestion Portal</h1>
      <div className="navbar">
        <h1>DASHBOARD</h1>
        <nav>
          <ul>
            <li>
              <Link to="/admin">Dashboard</Link>
            </li>
            <li>
              <Link to="/admin/view-complaints">Complaints</Link>
            </li>
            <li>
              <Link to="/admin/view-suggestions">Suggestions</Link>
            </li>
            <li>
              <Link to="/admin/view-students">Students</Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default AdminNavBar;
