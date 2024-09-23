import React, { useEffect, useState } from "react";
import { db } from "./firebase"; // Adjust the path according to your structure
import { collection, getDocs } from "firebase/firestore";
import Header from "./Header";
import "./Donors.css"; // Optional: Import a CSS file for styling

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
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Blood Group</th>
              <th>Phone Number</th>
            </tr>
          </thead>
          <tbody>
            {donors.map((donor) => (
              <tr key={donor.id}>
                <td>{donor.name}</td>
                <td>{donor.bloodGroup}</td>
                <td>{donor.phoneNumber}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Donors;
