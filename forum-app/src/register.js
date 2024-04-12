import { useState } from "react";
import supabase from "./supabaseClient";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link,
  useNavigate,
} from "react-router-dom";

function Register() {
  let navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  function handleOnChange(e) {
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [e.target.name]: e.target.value,
      };
    });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      const { data, error } = await supabase.auth.signUp({
        email: formData.email,
        password: formData.password,
      });
      if (error) throw error;
      alert("Check you email for verification link");
      navigate("/");
    } catch (error) {
      alert(error);
      console.log(error);
    }
  }
  //   console.log(formData);
  return (
    <div className="registerContainer">
      <form onSubmit={handleSubmit}>
        <input
          placeholder="email"
          name="email"
          onChange={handleOnChange}
        ></input>
        <input
          placeholder="password"
          name="password"
          type="password"
          onChange={handleOnChange}
        ></input>
        <button type="submit">Register</button>
      </form>
      Already have an account? <Link to="/login">Login</Link>
    </div>
  );
}

export default Register;
