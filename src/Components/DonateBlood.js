// src/DonateBlood.js
import React, { useState } from "react";
import { db } from "./firebase"; // Adjust the path according to your structure
import { setDoc, doc } from "firebase/firestore";
import Header from "./Header";

function DonateBlood() {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [bloodGroup, setBloodGroup] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await setDoc(doc(db, "donors", email), {
        // Using email as a unique identifier
        name,
        age,
        gender,
        email,
        phoneNumber,
        bloodGroup,
      });
      alert("Donor registered successfully!");
    } catch (error) {
      console.error("Error adding document: ", error);
    }
  };

  return (
    <>
      <Header />
      <form onSubmit={handleSubmit}>
        <h2>Donate Blood</h2>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          type="number"
          placeholder="Age"
          value={age}
          onChange={(e) => setAge(e.target.value)}
          required
        />
        <select
          value={gender}
          onChange={(e) => setGender(e.target.value)}
          required
        >
          <option value="">Select Gender</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Other">Other</option>
        </select>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Phone Number"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
          required
        />
        <select
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
        <button type="submit">Register as Donor</button>
      </form>
    </>
  );
}

export default DonateBlood;
