import React, { useEffect, useState } from "react";
import { db } from "./firebase"; // Adjust the path according to your structure
import { collection, getDocs } from "firebase/firestore";
import Header from "./Header";
import "./EmergencyNeed.css";
function EmergencyNeed() {
  const [requests, setRequests] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchRequests = async () => {
      try {
        const requestsCollection = collection(db, "requests");
        const requestSnapshot = await getDocs(requestsCollection);
        const requestList = requestSnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setRequests(requestList);
      } catch (error) {
        console.error("Error fetching requests: ", error);
        setError("Failed to load requests.");
      } finally {
        setLoading(false);
      }
    };

    fetchRequests();
  }, []);

  if (loading) return <p>Loading requests...</p>;
  if (error) return <p>{error}</p>;

  return (
    <>
      <Header />
      <h2>Blood Requests</h2>
      <table>
        <thead>
          <tr>
            <th>Patient Name</th>
            <th>Age</th>
            <th>Blood Group</th>
            <th>Contact Number</th>
            <th>Hospital Address</th>
          </tr>
        </thead>
        <tbody>
          {requests.map((request) => (
            <tr key={request.id}>
              <td>{request.patientName}</td>
              <td>{request.age}</td>
              <td>{request.bloodGroup}</td>
              <td>{request.number}</td>
              <td>{request.hospitalAddress}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default EmergencyNeed;
