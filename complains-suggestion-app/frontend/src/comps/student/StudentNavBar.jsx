import { Link } from "react-router-dom";
function StudentNavBar() {
  return (
    <div className="container">
      <h1>Complaints & Suggestion Portal</h1>
      <div className="navbar">
        <h1>DASHBOARD</h1>
        <nav>
          <ul>
            <li>
              <Link to="/student">Dashboard</Link>
            </li>
            <li>
              <Link to="/student/add-complaints">New Complaint</Link>
            </li>
            <li>
              <Link to="/student/add-suggestions">New Suggestion</Link>
            </li>
            <li>
              <Link to="/student/view-complaints">View Complaints</Link>
            </li>
            <li>
              <Link to="/student/view-suggestions">View Suggestions</Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default StudentNavBar;
