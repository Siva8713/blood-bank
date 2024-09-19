import React, { useEffect, useState } from "react";
import { db } from "./firebase"; // Adjust the path according to your structure
import { collection, getDocs } from "firebase/firestore";
import { useNavigate } from "react-router-dom";

function UserList() {
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUsers = async () => {
      const usersCollection = collection(db, "users");
      const usersSnapshot = await getDocs(usersCollection);
      const usersList = usersSnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setUsers(usersList);
    };

    fetchUsers();
  }, []);

  const handleUserClick = (userId) => {
    navigate(`/user/${userId}`); // Navigate to user detail page
  };

  return (
    <div>
      <h1>User List</h1>
      <ul>
        {users.map((user) => (
          <li key={user.id} onClick={() => handleUserClick(user.id)}>
            {user.firstName} ({user.email})
          </li>
        ))}
      </ul>
    </div>
  );
}

export default UserList;
