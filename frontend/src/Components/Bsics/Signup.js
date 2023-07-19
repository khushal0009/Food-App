import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

function Signup() {
  const history=useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function submit(e) {
    e.preventDefault();

    try {
      await axios.post("http://127.0.0.1:5000/signup", {
        email,
        password,
      })
      .then(res=>{
        if(res.data==="exists")
        {
            alert("User already exists")
        }
        else if(res.data==="Notexist")
        {
            history("/",{state:{id:email}})
        }
    })
    .catch(e=>{
        alert("wrong details");
        console.log(e);
    })
    } catch (e) {
      console.log(e);
    }
  }

  return (
    <div className="container-grey">
      <div className="form-container">
        <div className="h1Box">
      <h1>Signup</h1>
      <div className="line"></div>
      </div>
      <form action="POST">
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
                        Sign Up
                    </button>
        </div>
      </form>
      <Link to="/" className="Sign-btn">Already a Member</Link>
    </div>
    </div>
  );
}

export default Signup;
