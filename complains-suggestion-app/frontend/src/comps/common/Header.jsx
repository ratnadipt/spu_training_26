import { Link } from "react-router-dom";
import "./header.css";
function Header() {
  return (
    <div className="header">
      <h1 className="app-title">Complaints & Suggestion Portal</h1>

      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/register">Register</Link>
          </li>
          <li>
            <Link to="/admin/login">Admin Login</Link>
          </li>
          <li>
            <Link to="/admin/register">Admin Register</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Header;
