import { Link } from "react-router-dom";
import "./register.scss";
import { useState } from "react";

const Register = () => {
  const [password,setPassword]=useState("")
  return (
    <div className="register">
      <div className="card">
        <div className="left">
          <h1>Social Media App. </h1>
          <p>
            This is Our social media app. Here you can share your thoughts and
            connect with other people.
          </p>
          <span>Do you have an account ?</span>
          <Link to="/" style={{ textDecoration: "none" }}>
            <button>Login</button>
          </Link>
        </div>
        <div className="right">
          <h1>Register</h1>
          <span>Login to your account</span>
          <form>
            <input type="email" placeholder="Email" />
            <input
              type="password"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />
            <input type="text " placeholder="Name" />
            <button type="submit">Register</button>
          </form>
        </div>
      </div>
    </div>
  );
};
export default Register;
