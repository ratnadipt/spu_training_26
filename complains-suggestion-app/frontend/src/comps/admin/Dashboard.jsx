import { Outlet } from "react-router-dom";
import AdminNavBar from "./AdminNavBar";

function Dashboard() {
  return (
    <div className="dashboard">
      <AdminNavBar />
      <h1>Admin Dashboard</h1>
      <section>
        <Outlet />
      </section>
    </div>
  );
}

export default Dashboard;
