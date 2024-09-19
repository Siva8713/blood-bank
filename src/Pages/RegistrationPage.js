import React, { useState } from "react";
import "./RegistrationPage.css"; // Import the CSS file
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "../Components/firebase";
import { setDoc, doc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";

function RegistrationPage() {
  // State hooks for form fields
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [gender, setGender] = useState("");
  const [dob, setDob] = useState("");
  const [bloodGroup, setBloodGroup] = useState("");

  const navigate = useNavigate();
  // Form submission handler
  const handleSubmit = async (event) => {
    event.preventDefault(); // Prevent form submission
    // Basic validation
    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;
      if (user) {
        await setDoc(doc(db, "users", user.uid), {
          email: user.email,
          firstName: fullName,
          gender: gender,
          dateOfBirth: dob,
          bloodGroup: bloodGroup,
        });
      }
      console.log("User Registered Successfully", user);
      alert("Registration successful!");
      navigate("/home");
    } catch (error) {
      console.log(error.message);
    }

    // For demonstration, log the form data
    console.log("Full Name:", fullName);
    console.log("Email:", email);
    console.log("Gender:", gender);
    console.log("Date of Birth:", dob);
    console.log("Blood Group:", bloodGroup);
  };

  return (
    <main className="container">
      <h1 className="title">Welcome to Blood Bank!</h1>
      <div className="form-container">
        <h2>Create an Account</h2>
        <p>Fill in the details to register.</p>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="fullName">Full Name</label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              placeholder="John Doe"
              required
            />
          </div>
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
              placeholder="Password"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="confirmPassword">Confirm Password</label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              placeholder="Confirm Password"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="gender">Gender</label>
            <select
              id="gender"
              name="gender"
              value={gender}
              onChange={(e) => setGender(e.target.value)}
              required
            >
              <option value="">Select Gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="dob">Date of Birth</label>
            <input
              type="date"
              id="dob"
              name="dob"
              value={dob}
              onChange={(e) => setDob(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="bloodGroup">Blood Group</label>
            <select
              id="bloodGroup"
              name="bloodGroup"
              value={bloodGroup}
              onChange={(e) => setBloodGroup(e.target.value)}
              required
            >
              <option value="">Select Blood Group</option>
              <option value="A+">A+</option>
              <option value="A-">A-</option>
              <option value="B+">B+</option>
              <option value="B-">B-</option>
              <option value="AB+">AB+</option>
              <option value="AB-">AB-</option>
              <option value="O+">O+</option>
              <option value="O-">O-</option>
            </select>
          </div>
          <button type="submit">Register</button>
        </form>
        <p className="login-link">
          Already have an account? <a href="/">Log in</a>
        </p>
      </div>
    </main>
  );
}

export default RegistrationPage;
