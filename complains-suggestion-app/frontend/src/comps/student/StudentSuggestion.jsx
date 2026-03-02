import { useState } from "react";
import "../student/student.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";
function StudentSuggestion() {
  const navigation = useNavigate();
  let [status, setStatus] = useState(false);

  let [formData, setFormData] = useState({
    id: 0,
    suggestion: "",
    date: "",
    sid: 0,
    aid: 0,
  });

  const addComplaint = async () => {
    await axios
      .post("http://localhost:3000/student/suggestions", formData)
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
      <h1>New Suggestions</h1>
      {status && <p className="success">Suggestion added Successfully!</p>}
      <form onSubmit={handleSave} className="login-form">
        <div className="row">
          <input
            type="number"
            name="id"
            placeholder="Suggestion ID"
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
            name="suggestion"
            rows={5}
            cols={40}
            placeholder="Write your suggestion here..."
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
            Suggest
          </button>
        </div>
      </form>
    </div>
  );
}

export default StudentSuggestion;
