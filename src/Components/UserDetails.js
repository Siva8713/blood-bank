import React, { useEffect, useState } from "react";
import { db } from "./firebase"; // Adjust the path according to your structure
import { doc, getDoc } from "firebase/firestore";
import { useParams } from "react-router-dom";

function UserDetails() {
  const { userId } = useParams(); // Get userId from the URL
  const [userDetails, setUserDetails] = useState(null);

  useEffect(() => {
    const fetchUserDetails = async () => {
      const docRef = doc(db, "users", userId);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        setUserDetails(docSnap.data());
      } else {
        console.log("No such document!");
      }
    };

    fetchUserDetails();
  }, [userId]);

  if (!userDetails) {
    return <p>Loading...</p>; // Display loading state
  }

  return (
    <div>
      <h1>User Details</h1>
      <p>
        <strong>Full Name:</strong> {userDetails.firstName}
      </p>
      <p>
        <strong>Email:</strong> {userDetails.email}
      </p>
      <p>
        <strong>Gender:</strong> {userDetails.gender}
      </p>
      <p>
        <strong>Date of Birth:</strong> {userDetails.dateOfBirth}
      </p>
      <p>
        <strong>Blood Group:</strong> {userDetails.bloodGroup}
      </p>
      {/* Add other fields as necessary */}
    </div>
  );
}

export default UserDetails;
