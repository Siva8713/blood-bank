// src/RequestBlood.js
import React, { useState } from "react";
import { db } from "./firebase"; // Adjust the path according to your structure
import { setDoc, doc } from "firebase/firestore";
import Header from "./Header";

function RequestBlood() {
  const [patientName, setPatientName] = useState("");
  const [age, setAge] = useState("");
  const [bloodGroup, setBloodGroup] = useState("");
  const [number, setNumber] = useState("");
  const [hospitalAddress, setHospitalAddress] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await setDoc(doc(db, "requests", patientName), {
        // Using patientName as a unique identifier
        patientName,
        age,
        bloodGroup,
        number,
        hospitalAddress,
      });
      alert("Blood request submitted successfully!");
    } catch (error) {
      console.error("Error adding document: ", error);
    }
  };

  return (
    <>
      <Header />
      <form onSubmit={handleSubmit}>
        <h2>Request Blood</h2>
        <input
          type="text"
          placeholder="Patient Name"
          value={patientName}
          onChange={(e) => setPatientName(e.target.value)}
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
        <input
          type="text"
          placeholder="Contact Number"
          value={number}
          onChange={(e) => setNumber(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Hospital Address"
          value={hospitalAddress}
          onChange={(e) => setHospitalAddress(e.target.value)}
          required
        />
        <button type="submit" className="submit_button">
          Request Blood
        </button>
      </form>
    </>
  );
}

export default RequestBlood;
