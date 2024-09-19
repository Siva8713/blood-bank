import React, { useState } from "react";
import "./LoginPage.css"; // Import the CSS file
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../Components/firebase";
import { useNavigate } from "react-router-dom";

function LoginPage() {
  // State hooks for form fields
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  // Form submission handler
  const handleSubmit = async (event) => {
    event.preventDefault(); // Prevent default form submission

    try {
      await signInWithEmailAndPassword(auth, email, password);
      console.log("user logged in successfully");
      navigate("/home");
      alert("Logged is successfully!");
    } catch (error) {
      console.log(error.message);
      alert("Logged is not successfully!");
    }
    // For demonstration, log the form data
    console.log("Email:", email);
    console.log("Password:", password);

    // You would typically handle authentication here
  };

  return (
    <main className="container">
      <h1 className="title">Welcome To Blood Bank!</h1>
      <div className="form-container">
        <p>Sign in to continue.</p>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="johndoe@email.com"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="password"
              required
            />
          </div>
          <button type="submit">Log in</button>
        </form>
        <p className="signup-link">
          Don't have an account? <a href="/register">Sign up</a>
        </p>
      </div>
    </main>
  );
}

export default LoginPage;
