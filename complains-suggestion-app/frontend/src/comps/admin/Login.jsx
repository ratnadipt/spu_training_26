import { useState } from "react";
import "../student/student.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";
function Login() {
  const navigation = useNavigate();
  let [error, setError] = useState(false);
  let [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const login = async () => {
    await axios
      .post("http://localhost:3000/admin/login", formData)
      .then((res) => {
        if (res.data.status) {
          navigation("/admin");
        } else {
          setError(true);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleSave = (e) => {
    e.preventDefault();
    // send
    login();
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="student-login">
      <h1>Admin Login</h1>
      <form onSubmit={handleSave} className="login-form">
        <div className="row">
          <input
            type="email"
            name="email"
            placeholder="Email ID"
            onChange={handleChange}
          />
        </div>
        <div className="row">
          <input
            type="password"
            name="password"
            placeholder="Password"
            onChange={handleChange}
          />
        </div>
        <div className="row btn-group">
          <button type="reset" className="btn btn-secondary">
            Reset
          </button>
          <button type="submit" className="btn btn-primary">
            Admin Login
          </button>
        </div>
        {error && <p className="eror">Invalid User ID or Password!</p>}
      </form>
    </div>
  );
}

export default Login;
