import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import '../App.css';

function LoginPage({ setIsLoggedIn }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  // List of allowed admins/employees
  const users = [
    { email: "admin1@gmail.com", password: "admin123" },
    { email: "admin2@example.com", password: "pass456" },
    { email: "admin3@example.com", password: "mypassword" }
  ];

  const handleLogin = (e) => {
    e.preventDefault();

    // Check if entered email/password exists in users array
    const user = users.find(
      (u) => u.email === email && u.password === password
    );

    if (user) {
      alert("Login Successful!");
      setEmail("");
      setPassword("");
      setIsLoggedIn(true);
      navigate("/ProductPage"); // redirect to Dashboard
    } else {
      alert("Invalid credentials!");
    }
  };

  return (
    <div className="auth-form">
      <h2>Admin Login</h2>
      <form onSubmit={handleLogin}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default LoginPage;
