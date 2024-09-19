// src/Donors.js
import React, { useEffect, useState } from "react";
import { db } from "./firebase"; // Adjust the path according to your structure
import { collection, getDocs } from "firebase/firestore";
import Header from "./Header";

function Donors() {
  const [donors, setDonors] = useState([]);

  const fetchDonors = async () => {
    const donorsCollection = collection(db, "donors");
    const donorsSnapshot = await getDocs(donorsCollection);
    const donorsList = donorsSnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    setDonors(donorsList);
  };

  useEffect(() => {
    fetchDonors();
  }, []);

  return (
    <>
      <Header />
      <div>
        <h2>Available Donors</h2>
        <ul>
          {donors.map((donor) => (
            <li key={donor.id}>
              {donor.name} - {donor.bloodGroup} - {donor.phoneNumber}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default Donors;
