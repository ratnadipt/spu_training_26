import { useState } from "react";
import "../student/student.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
function StudentComplaint() {
  const navigation = useNavigate();
  const [status, setStatus] = useState(false);

  let [formData, setFormData] = useState({
    id: 0,
    complaint: "",
    date: "",
    sid: 0,
    aid: 0,
  });

  const addComplaint = async () => {
    await axios
      .post("http://localhost:3000/student/complaints", formData)
      .then((res) => {
        console.log(res);
        if (res.data.status) {
          setStatus(true);
        }
      })
      .catch((err) => {
        console.log(err);
        setStatus(false);
      });
  };

  const handleSave = (e) => {
    e.preventDefault();
    // send
    addComplaint();
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="student-login">
      <h1>New Complaint</h1>
      {status && <p className="success">Complaint Added Successfully!</p>}
      <form onSubmit={handleSave} className="login-form">
        <div className="row">
          <input
            type="number"
            name="id"
            placeholder="Complaint ID"
            onChange={handleChange}
          />
          <input
            type="number"
            name="sid"
            placeholder="Student ID"
            onChange={handleChange}
          />
          <input
            type="number"
            name="aid"
            placeholder="Admin ID"
            onChange={handleChange}
          />
        </div>
        <div className="row">
          <textarea
            type="text"
            name="complaint"
            rows={5}
            cols={40}
            placeholder="Write your complaint here..."
            onChange={handleChange}
          ></textarea>
        </div>
        <div className="row">
          <input type="date" name="date" onChange={handleChange} />
        </div>
        <div className="row btn-group">
          <button type="reset" className="btn btn-secondary">
            Reset
          </button>
          <button type="submit" className="btn btn-primary">
            Complaint
          </button>
        </div>
      </form>
    </div>
  );
}

export default StudentComplaint;
