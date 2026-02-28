import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigation = useNavigate();
  let [formData, setFormData] = useState({
    userName: "",
    uPassword: "",
  });

  const login = async () => {
    await axios
      .post("http://localhost:3000/student/login", formData)
      .then((res) => {
        console.log(res);
        navigation("/student/dashboard");
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
      <h1>Student Login</h1>
      <form onSubmit={handleSave}>
        <div>
          <label htmlFor="userName">User Name : </label>
          <input type="text" name="userName" onChange={handleChange} />
        </div>
        <div>
          <label htmlFor="uPassword">Password : </label>
          <input type="password" name="uPassword" onChange={handleChange} />
        </div>
        <div>
          <button type="reset">CLEAR</button>
          <button type="submit">LOGIN</button>
        </div>
      </form>
    </div>
  );
}

export default Login;
