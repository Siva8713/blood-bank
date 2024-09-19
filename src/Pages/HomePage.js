import React, { useEffect, useState } from "react";
import { auth, db } from "../Components/firebase";
import { doc, getDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import UserList from "../Components/UserList";
import Header from "../Components/Header";

function HomePage() {
  const [userDetails, setUserDetails] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(async (user) => {
      if (user) {
        const docRef = doc(db, "users", user.uid);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          setUserDetails(docSnap.data());
          console.log(docSnap.data());
        } else {
          console.log("No user data found.");
        }
      } else {
        console.log("User Not Logged In");
        setUserDetails(null);
        navigate("/"); // Redirect to login if not authenticated
      }
    });
    // Cleanup subscription on unmount
    return () => unsubscribe();
  }, [navigate]);

  async function handleLogout() {
    try {
      await auth.signOut();
      navigate("/");
    } catch (error) {
      console.log(error.message);
    }
  }
  return (
    <div>
      <Header />
      <p>Welcome to the Blood Bank home page!</p>
      {/* {userDetails ? (
        <>
          <h4>Welcome {userDetails.firstName} </h4>
          <UserList />
        </>
      ) : (
        <p>Loading...</p>
      )} */}
    </div>
  );
}

export default HomePage;
