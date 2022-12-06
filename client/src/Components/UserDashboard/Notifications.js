import React, { useContext, useState, useEffect } from "react";
import axios from "axios";
import UserContext from "../../context/userContext";
import NotificationsTable from "../Table/NotificationsTable";

const Notifications = () => {
  const { token } = useContext(UserContext);
  const [notifications, setNotifications] = useState(null);

  useEffect(() => {
    axios
      .get("http://localhost:3001/funderr/usernotifications", {
        headers: {
          "x-auth-token": token,
        },
      })
      .then((res) => {
        setNotifications(res.data);
      });
  }, []);

  console.log("Notifications: ", notifications);

  return (
    <>
      <div style={{ marginTop: "1rem" }}>
        {notifications ? (
          <NotificationsTable Users={notifications} />
        ) : (
          <div>LOADINGGG.....</div>
        )}
      </div>
    </>
  );
};

export default Notifications;
