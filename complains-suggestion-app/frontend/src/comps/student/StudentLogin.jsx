import { useState } from "react";
import "./student.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function StudentLogin() {
  const navigation = useNavigate();
  let [error, setError] = useState(false);

  let [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const login = async () => {
    await axios
      .post("http://localhost:3000/student/login", formData)
      .then((res) => {
        if (res.data.status) {
          navigation("/student");
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
      <h1>Student Login</h1>
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
            Login
          </button>
        </div>
      </form>
      {error && <p className="error">Invalid User ID or Password!</p>}
    </div>
  );
}

export default StudentLogin;
