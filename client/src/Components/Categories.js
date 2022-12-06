import React from "react";
import Navbar from "./Navbar";
import medical from "../images/medical.jpg";
import { useNavigate } from "react-router-dom";

export default function Categories() {
  const navigate = useNavigate();
  return (
    <div>
      <Navbar />
      <div>
        {" "}
        <div className="container">
          <div className="row mt-5">
            <div className="col">
              <div
                className="card"
                style={{
                  width: "80%",
                  borderRadius: "50px",
                  cursor: "pointer",
                }}
                onClick={() => navigate("/Campaigns/Medical")}
              >
                <img
                  src={medical}
                  className="card-img-top"
                  alt="..."
                  style={{ borderRadius: "50px" }}
                />
                <div
                  className="card-body "
                  style={{
                    backgroundColor: "#242F9B",
                    color: "white",

                    borderBottomLeftRadius: "50px",
                    borderBottomRightRadius: "50px",
                  }}
                >
                  <p className="card-text text-center">Medical</p>
                </div>
              </div>
            </div>
            <div className="col">
              <div
                className="card"
                style={{
                  width: "80%",
                  borderRadius: "50px",
                  cursor: "pointer",
                }}
                onClick={() => navigate("/Campaigns/Art")}
              >
                <img
                  src={medical}
                  className="card-img-top"
                  alt="..."
                  style={{ borderRadius: "50px" }}
                />
                <div
                  className="card-body "
                  style={{
                    backgroundColor: "#242F9B",
                    color: "white",

                    borderBottomLeftRadius: "50px",
                    borderBottomRightRadius: "50px",
                  }}
                >
                  <p className="card-text text-center">Art</p>
                </div>
              </div>
            </div>
            <div className="col">
              <div
                className="card"
                style={{
                  width: "80%",
                  borderRadius: "50px",
                  cursor: "pointer",
                }}
                onClick={() => navigate("/Campaigns/Technical")}
              >
                <img
                  src={medical}
                  className="card-img-top"
                  alt="..."
                  style={{ borderRadius: "50px" }}
                />
                <div
                  className="card-body "
                  style={{
                    backgroundColor: "#242F9B",
                    color: "white",

                    borderBottomLeftRadius: "50px",
                    borderBottomRightRadius: "50px",
                  }}
                >
                  <p className="card-text text-center">Technical</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container mt-5">
          <div className="row">
            <div className="col">
              <div
                className="card"
                style={{
                  width: "80%",
                  borderRadius: "50px",
                  cursor: "pointer",
                }}
                onClick={() => navigate("/Campaigns/Illustration")}
              >
                <img
                  src={medical}
                  className="card-img-top"
                  alt="..."
                  style={{ borderRadius: "50px" }}
                />
                <div
                  className="card-body "
                  style={{
                    backgroundColor: "#242F9B",
                    color: "white",

                    borderBottomLeftRadius: "50px",
                    borderBottomRightRadius: "50px",
                  }}
                >
                  <p className="card-text text-center">Illustration</p>
                </div>
              </div>
            </div>
            <div className="col">
              <div
                className="card"
                style={{
                  width: "80%",
                  borderRadius: "50px",
                  cursor: "pointer",
                }}
                onClick={() => navigate("/Campaigns/Social")}
              >
                <img
                  src={medical}
                  className="card-img-top"
                  alt="..."
                  style={{ borderRadius: "50px" }}
                />
                <div
                  className="card-body "
                  style={{
                    backgroundColor: "#242F9B",
                    color: "white",

                    borderBottomLeftRadius: "50px",
                    borderBottomRightRadius: "50px",
                  }}
                >
                  <p className="card-text text-center">Social</p>
                </div>
              </div>
            </div>
            <div className="col">
              <div
                className="card"
                style={{
                  width: "80%",
                  borderRadius: "50px",
                  cursor: "pointer",
                }}
                onClick={() => navigate("/Campaigns/Music")}
              >
                <img
                  src={medical}
                  className="card-img-top"
                  alt="..."
                  style={{ borderRadius: "50px" }}
                />
                <div
                  className="card-body "
                  style={{
                    backgroundColor: "#242F9B",
                    color: "white",

                    borderBottomLeftRadius: "50px",
                    borderBottomRightRadius: "50px",
                  }}
                >
                  <p className="card-text text-center">Music</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
