import React, { useContext } from "react";
import UserContext from "../context/userContext";
import { Avatar, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
export default function Profile() {
  const { userdata } = useContext(UserContext);
  const navigate = useNavigate();
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div
          style={{
            width: "400px",
            height: "400px",
          }}
        >
          {" "}
          {/* <Avatar
            src={userdata.picture}
            alt="UserPic"
            sx={{
              width: 100,
              height: 100,
            }}
          /> */}
          <img
            src={userdata.picture}
            alt={"..."}
            style={{
              width: "400px",
              height: "400px",
              borderRadius: "50%",
            }}
          />
        </div>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <p style={{ color: "#242F9B", fontSize: 20, fontWeight: "bold" }}>
          Name
        </p>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <p>{userdata.name}</p>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <p style={{ color: "#242F9B", fontSize: 20, fontWeight: "bold" }}>
          Email
        </p>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <p>{userdata.email}</p>
      </div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Button
          variant="contained"
          sx={{
            "&.MuiButton-contained": {
              backgroundColor: "#E9DB62",
              color: "black",
            },
            borderRadius: "50px",
            marginBottom: "2rem",
          }}
          onClick={() => navigate("/EditProfile")}
        >
          Edit Profile
        </Button>
      </div>
    </div>
  );
}
