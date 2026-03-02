import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./student.css";
function StudentRegistration() {
  const navigation = useNavigate();
  let [formData, setFormData] = useState({
    id: 0,
    sname: "",
    city: "",
    mobile: "",
    department: "",
    email: "",
    password: "",
  });

  const register = async () => {
    await axios
      .post("http://localhost:3000/student/register", formData)
      .then((res) => {
        console.log(res);
        if (res.data.status) {
          navigation("/login");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleSave = (e) => {
    e.preventDefault();
    // send
    register();
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="student-login">
      <h1>Student Registration</h1>
      <form onSubmit={handleSave} className="login-form">
        <div className="row">
          <input
            type="number"
            name="id"
            placeholder="Student ID"
            onChange={handleChange}
          />
        </div>
        <div className="row">
          <input
            type="text"
            name="sname"
            placeholder="Student Full Name"
            onChange={handleChange}
          />
        </div>
        <div className="row">
          <input
            type="text"
            name="city"
            placeholder="City"
            onChange={handleChange}
          />
        </div>
        <div className="row">
          <input
            type="text"
            name="mobile"
            placeholder="Mobile Number"
            onChange={handleChange}
          />
        </div>
        <div className="row">
          <input
            type="text"
            name="department"
            placeholder="Department Name"
            onChange={handleChange}
          />
        </div>
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
            Clear
          </button>
          <button type="submit" className="btn btn-primary">
            Create Account
          </button>
        </div>
      </form>
    </div>
  );
}

export default StudentRegistration;
