import { useState } from "react";
import axios from "axios";

function AdminLogin() {
  let [formData, setFormData] = useState({
    adminId: "",
    adminPass: "",
  });

  const login = async () => {
    await axios
      .post("http://localhost:3000/admin/login", formData)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleSave = (e) => {
    e.preventDefault();
    //LOGIC
    login();
  };

  const handleChange = (e) => {
    setFormData((cur) => {
      return { ...cur, [e.target.name]: e.target.value };
    });
  };

  return (
    <div>
      <h1>Admin Login</h1>
      <form onSubmit={handleSave}>
        <div>
          <label htmlFor="adminId">Admin ID : </label>
          <input type="text" name="adminId" onChange={handleChange} />
        </div>
        <div>
          <label htmlFor="adminPass">Password : </label>
          <input type="password" name="adminPass" onChange={handleChange} />
        </div>
        <div>
          <button type="reset">CLEAR</button>
          <button type="submit">LOGIN</button>
        </div>
      </form>
    </div>
  );
}

export default AdminLogin;
