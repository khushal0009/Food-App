import React, { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import './login.css';
function Login() {
  const history = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function submit(e) {
    e.preventDefault();

    try {
      const response = await axios.post("http://127.0.0.1:5000/", {
        email,
        password,
      });

      if (response.data === "exists") {
        history("/home", { state: { id: email } });
      } else if (response.data === "Notexist") {
        alert("User Not SignedUp");
      }
    } catch (e) {
      alert("Wrong details");
      console.log(e);
    }
  }

  return (
    <div className="container-grey">
        <div className="form-container">
            <div className="h1Box">
                <h1>Login</h1>
                <div className="line"></div>
            </div>
      <form>
        <div className="loginBox">
            <div className="entryBox">
        <input
          className="email input"
          type="email"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          placeholder="Email"
        />
        </div>
        <div className="entryBox">
        <input
          className="password input"
          type="password"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          placeholder="Password"
        />
        </div>
        <button className="loginBtn  form-button" type="submit" onClick={submit}>
                        Login
                    </button>
        <Link to="/signup" className="otherbtns">Sign Up</Link>
      </div>
      </form>
      </div>
    </div>
  );
}

export default Login;
