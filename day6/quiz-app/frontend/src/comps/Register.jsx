import { useState } from "react";
import axios from "axios";

function Register() {
  let [formData, setFormData] = useState({
    id: 0,
    sName: "",
    userName: "",
    sEmail: "",
    sPassword: "",
  });

  const register = async () => {
    await axios
      .post("http://localhost:3000/register", formData)
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
    register();
  };

  const handleChange = (e) => {
    setFormData((cur) => {
      return { ...cur, [e.target.name]: e.target.value };
    });
  };

  return (
    <div>
      <h1>Student Registration</h1>
      <form onSubmit={handleSave}>
        <div>
          <label htmlFor="id">Enter ID : </label>
          <input type="text" name="id" onChange={handleChange} />
        </div>
        <div>
          <label htmlFor="sName">Enter Student Name : </label>
          <input type="text" name="sName" onChange={handleChange} />
        </div>
        <div>
          <label htmlFor="sEmail">Enter Email ID : </label>
          <input type="text" name="sEmail" onChange={handleChange} />
        </div>
        <div>
          <label htmlFor="userName">User Name : </label>
          <input type="text" name="userName" onChange={handleChange} />
        </div>
        <div>
          <label htmlFor="sPassword">Password : </label>
          <input type="password" name="sPassword" onChange={handleChange} />
        </div>
        <div>
          <button type="reset">CLEAR</button>
          <button type="submit">REGISTER</button>
        </div>
      </form>
    </div>
  );
}

export default Register;
