import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import UserContext from "../context/userContext";
import Avatar from "@mui/material/Avatar";

export default function Navbar() {
  const { token, userdata, setToken, setUserData } = useContext(UserContext);
  const handleLogout = () => {
    setUserData(null);
    setToken(null);
    navigate("/login");
    window.location.reload(true);
  };
  const navigate = useNavigate();
  return (
    <div>
      <div>
        <nav className="navbar navbar-expand-lg sticky-top">
          <div className="container-fluid">
            <div
              className="navbar-brand"
              style={{ color: "white", marginLeft: 100, cursor: "pointer" }}
              onClick={() => navigate("/")}
            >
              Funderrr
            </div>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarText"
              aria-controls="navbarText"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse justify-content-end"
              style={{ marginRight: 50 }}
              id="navbarText"
            >
              <ul className="navbar-nav m-1">
                <li className="nav-item">
                  <div
                    style={{
                      color: "white",
                      textDecoration: "none",
                      paddingRight: 40,
                      cursor: "pointer",
                      marginTop: "0.5rem",
                    }}
                    onClick={() => navigate("/HowitWorks")}
                  >
                    How it works?
                  </div>
                </li>
                <li className="nav-item">
                  <div
                    style={{
                      color: "white",
                      textDecoration: "none",
                      paddingRight: 40,
                      cursor: "pointer",
                      marginTop: "0.5rem",
                    }}
                    onClick={() => navigate("/EmailSupport")}
                  >
                    Contact Us
                  </div>
                </li>
                <li className="nav-item">
                  <div
                    style={{
                      color: "white",
                      textDecoration: "none",
                      paddingRight: 40,
                      cursor: "pointer",
                      marginTop: "0.5rem",
                    }}
                    onClick={() => navigate("/Categories")}
                  >
                    Categories
                  </div>
                </li>
                {!userdata ? (
                  <li className="nav-item">
                    <div
                      style={{
                        color: "white",
                        textDecoration: "none",
                        paddingRight: 40,
                        cursor: "pointer",
                        marginTop: "0.5rem",
                      }}
                      onClick={() => navigate("/login")}
                    >
                      Sign In
                    </div>
                  </li>
                ) : null}
                {!userdata ? (
                  <li className="nav-item">
                    <div
                      style={{
                        color: "white",
                        textDecoration: "none",
                        paddingRight: 100,
                        cursor: "pointer",
                        marginTop: "0.5rem",
                      }}
                      onClick={() => navigate("/SignUp")}
                    >
                      Sign Up
                    </div>
                  </li>
                ) : null}
                {userdata ? (
                  <li className="nav-item">
                    <div
                      style={{
                        color: "white",
                        textDecoration: "none",
                        cursor: "pointer",
                        marginTop: "0.5rem",
                      }}
                      onClick={handleLogout}
                    >
                      LogOut
                    </div>
                  </li>
                ) : null}
                {userdata ? (
                  <li className="nav-item">
                    <div
                      style={{
                        color: "white",
                        textDecoration: "none",
                        cursor: "pointer",
                        marginLeft: "1.5rem",
                      }}
                      onClick={() => {
                        if (userdata.role === "admin") {
                          navigate("/AdminDashboard/AdminAllCampaigns");
                        } else {
                          navigate("/UserDashboard/AllCampaigns");
                        }
                      }}
                    >
                      <Avatar src={userdata.picture} alt="UserPic" />
                    </div>
                  </li>
                ) : null}
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
}
