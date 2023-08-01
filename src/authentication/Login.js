import React, { useState } from "react";
import "./Login.css";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

 
  return (
    <div className="login">
      <img
        src="https://marcas-logos.net/wp-content/uploads/2020/01/Instagram-Logo-2015-2016.png"
        alt=""
      />
      <input
        onChange={(e) => setEmail(e.target.value)}
        type="email"
        placeholder="Phone number, username, ou email"
        value={email}
      />
      <input
        onChange={(e) => setPassword(e.target.value)}
        type="password"
        placeholder="Password"
        value={password}
      />
      <button>Log in</button>
    </div>
  );
}

export default Login;
