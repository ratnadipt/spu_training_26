import Dashboard from "./comps/admin/Dashboard";
import Login from "./comps/student/Login";
import Register from "./comps/student/Register";

function App() {
  return (
    <div>
      <Login />
      <hr />
      <Register />

      <hr />
      <Dashboard />
    </div>
  );
}

export default App;
