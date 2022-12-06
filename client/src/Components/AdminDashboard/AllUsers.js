import React, { useState, useEffect } from "react";
import axios from "axios";
import UserTable from "../Table/UserTable";

const AllUsers = () => {
  const [allUsers, setAllUsers] = useState(null);

  useEffect(() => {
    axios.get("http://localhost:3001/funderr/allusers").then((result) => {
      setAllUsers(result.data);
    });
  }, []);

  // console.log("ALLUSERS: ", allUsers);
  return (
    <>
      <div style={{ marginTop: "2rem" }}>
        {allUsers ? <UserTable Users={allUsers} /> : <div>LOADINGGG.....</div>}
      </div>
    </>
  );
};

export default AllUsers;
