import { Outlet } from "react-router-dom";
import StudentNavBar from "./StudentNavBar";

function StudentDashboard() {
  return (
    <div className="dashboard">
      <StudentNavBar />
      <h1>Student Dashboard</h1>
      <section>
        <Outlet />
      </section>
    </div>
  );
}

export default StudentDashboard;
