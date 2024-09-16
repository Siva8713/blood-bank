import React, { useState } from 'react';
import './RegistrationPage.css'; // Import the CSS file

function RegistrationPage() {
  // State hooks for form fields
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  // Form submission handler
  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent form submission

    // Basic validation
    if (password !== confirmPassword) {
      alert('Passwords do not match!');
      return;
    }

    // For demonstration, log the form data
    console.log('Full Name:', fullName);
    console.log('Email:', email);
    console.log('Password:', password);

    // Redirect or show a success message
    alert('Registration successful!');
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
          <button type="submit">Register</button>
        </form>
        <p className="login-link">
          Already have an account? <a href="/login">Log in</a>
        </p>
      </div>
    </main>
  );
}

export default RegistrationPage;
