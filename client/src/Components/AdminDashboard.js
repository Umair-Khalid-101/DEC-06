import React, { useContext } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import UserContext from "../context/userContext";
import Avatar from "@mui/material/Avatar";
import Navbar from "./Navbar";

const AdminDashboard = () => {
  const { token, userdata, setToken, setUserData } = useContext(UserContext);
  const navigate = useNavigate();
  const handleLogout = () => {
    setUserData(null);
    setToken(null);
    navigate("/login");
    window.location.reload(true);
  };
  return (
    <>
      <div className="newSideBar">
        <div className="row">
          <div
            className="col-2"
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "#242f9b",
              height: "100vh",
              position: "sticky",
              top: 0,
              borderRadius: "0.5rem 1.5rem 1.5rem 0.5rem",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
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
                    color: "white",
                    textDecoration: "none",
                    cursor: "pointer",
                    marginTop: "8rem",
                  }}
                  onClick={() => navigate("Profile")}
                >
                  <Avatar
                    src={userdata.picture}
                    alt="UserPic"
                    sx={{
                      width: 100,
                      height: 100,
                    }}
                  />
                </div>
              </div>
              <div
                style={{
                  color: "white",
                  textDecoration: "none",
                  cursor: "pointer",
                  marginBottom: "1.5rem",
                  fontSize: "25px",
                  fontWeight: "bold",
                }}
                onClick={() => navigate("Profile")}
              >
                {userdata.name}
              </div>
              <button
                className="btn"
                onClick={() => navigate("AdminAllCampaigns")}
                style={{
                  width: "100%",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  marginBottom: "1rem",
                  borderRadius: "8px",
                  borderColor: "white",
                  color: "white",
                  marginTop: "0.5rem",
                  boxShadow: "1px 3px 1px ",
                }}
              >
                All Campaigns
              </button>
              <button
                className="btn"
                onClick={() => navigate("AdminAllUsers")}
                style={{
                  width: "100%",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  marginBottom: "1rem",
                  borderRadius: "8px",
                  borderColor: "white",
                  color: "white",
                  marginTop: "0.5rem",
                  boxShadow: "1px 3px 1px ",
                }}
              >
                All Users
              </button>
              <button
                className="btn"
                onClick={() => navigate("AdminAcceptCampaigns")}
                style={{
                  width: "100%",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  marginBottom: "1rem",
                  borderRadius: "8px",
                  borderColor: "white",
                  color: "white",
                  marginTop: "0.5rem",
                  boxShadow: "1px 3px 1px ",
                }}
              >
                Accept Campaigns
              </button>
              <button
                className="btn"
                onClick={() => navigate("FeaturedCampaigns")}
                style={{
                  width: "100%",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  marginBottom: "1rem",
                  borderRadius: "8px",
                  borderColor: "white",
                  color: "white",
                  marginTop: "0.5rem",
                  boxShadow: "1px 3px 1px ",
                }}
              >
                Featured Campaigns
              </button>
              <button
                className="btn"
                // onClick={() => navigate("MyTransactions")}
                style={{
                  width: "100%",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  marginBottom: "1rem",
                  borderRadius: "8px",
                  borderColor: "white",
                  color: "white",
                  marginTop: "0.5rem",
                  boxShadow: "1px 3px 1px ",
                }}
              >
                Transaction History
              </button>
              <button
                className="btn"
                onClick={handleLogout}
                style={{
                  width: "100%",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  marginBottom: "8rem",
                  borderRadius: "20px",
                  borderWidth: "2px",
                  borderColor: "white",
                  color: "white",
                  marginTop: "50px",
                }}
              >
                LogOut
              </button>
            </div>
          </div>
          <div className="col-10">
            <Outlet />
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminDashboard;
