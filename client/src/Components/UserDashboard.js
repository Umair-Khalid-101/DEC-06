import React, { useContext } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import UserContext from "../context/userContext";
import Avatar from "@mui/material/Avatar";
import Navbar from "./Navbar";
import CampaignIcon from "@mui/icons-material/Campaign";
import FavoriteIcon from "@mui/icons-material/Favorite";
import CreateIcon from "@mui/icons-material/Create";
import ReceiptLongIcon from "@mui/icons-material/ReceiptLong";
import LogoutIcon from "@mui/icons-material/Logout";

const UserDashboard = () => {
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
      <Navbar />
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
                    marginBottom: "0.5rem",
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
                  fontSize: "18px",
                  fontWeight: "bold",
                }}
                onClick={() => navigate("Profile")}
              >
                {userdata.name}
              </div>
              <button
                className="btn"
                onClick={() => navigate("AllCampaigns")}
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
                <div
                  style={{
                    marginLeft: "0.5rem",
                  }}
                >
                  <CampaignIcon />
                </div>
              </button>
              <button
                className="btn"
                onClick={() => navigate("MyCampaigns")}
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
                My Campaigns
                <div
                  style={{
                    marginLeft: "0.5rem",
                  }}
                >
                  <CampaignIcon />
                </div>
              </button>
              <button
                className="btn"
                onClick={() => navigate("FavCampaigns")}
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
                Fav Campaigns
                <div
                  style={{
                    marginLeft: "0.5rem",
                  }}
                >
                  <FavoriteIcon />
                </div>
              </button>
              <button
                className="btn"
                onClick={() => navigate("Notifications")}
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
                Notifications
                <div
                  style={{
                    marginLeft: "0.5rem",
                  }}
                >
                  <CreateIcon />
                </div>
              </button>
              <button
                className="btn"
                onClick={() => navigate("NewCampaign")}
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
                Create Campaign
                <div
                  style={{
                    marginLeft: "0.5rem",
                  }}
                >
                  <CreateIcon />
                </div>
              </button>
              <button
                className="btn"
                onClick={() => navigate("MyTransactions")}
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
                My Transactions
                <div
                  style={{
                    marginLeft: "0.5rem",
                  }}
                >
                  <ReceiptLongIcon />
                </div>
              </button>
              <button
                className="btn"
                onClick={handleLogout}
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
                LogOut
                <div
                  style={{
                    marginLeft: "0.5rem",
                  }}
                >
                  <LogoutIcon />
                </div>
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

export default UserDashboard;
