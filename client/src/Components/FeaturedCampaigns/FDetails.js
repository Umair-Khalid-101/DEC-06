import React, { useState } from "react";
import ShareIcon from "@mui/icons-material/Share";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { useNavigate } from "react-router-dom";
import FavButton from "../Buttons/FavButton";
import IconButton from "@mui/material/IconButton";
import { toast, ToastContainer } from "react-toastify";
const Details = ({ details }) => {
  const navigate = useNavigate();
  const [copied, setCopied] = useState(false);
  function copy() {
    const el = document.createElement("input");
    el.value = window.location.href;
    document.body.appendChild(el);
    el.select();
    document.execCommand("copy");
    document.body.removeChild(el);
    setCopied(true);
    toast.success("URL Copied to clipboard", {
      position: toast.POSITION.TOP_LEFT,
    });
  }
  return (
    <>
      <ToastContainer />
      <div>
        <div className="container">
          <div>
            <div
              className="row"
              style={{
                display: "flex",
                justifyContent: "center",
                alignContent: "center",
              }}
            >
              <img src={details.picture} style={{ width: "50%" }} />
            </div>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <div>
                <p style={{ color: "#242f9b", fontWeight: "bold" }}>
                  Campaign Owner:
                </p>
                <p>{details.posterName}</p>
              </div>
              <div>
                {" "}
                <IconButton aria-label="share" style={{ color: "#242f9b" }}>
                  <ShareIcon onClick={copy} style={{ fontSize: 30 }} />
                </IconButton>
              </div>
            </div>
            <div>
              <p style={{ color: "#242f9b", fontWeight: "bold" }}>Title:</p>
              <p>{details.title}</p>
            </div>
            <div>
              <p style={{ color: "#242f9b", fontWeight: "bold" }}>Category:</p>
              <p>{details.category}</p>
            </div>
            <div>
              <p style={{ color: "#242f9b", fontWeight: "bold" }}>
                Total Amount:
              </p>
              <p>{details.campaignGoal} ETH</p>
            </div>
            <div>
              <p style={{ color: "#242f9b", fontWeight: "bold" }}>
                Raised Amount:
              </p>
              <p>2 ETH</p>
            </div>
            <div>
              <p style={{ color: "#242f9b", fontWeight: "bold" }}>End Date:</p>
              <p>{details.enddate.split("T")[0]}</p>
            </div>
            <div>
              <p style={{ color: "#242f9b", fontWeight: "bold" }}>
                Wallet Address:
              </p>
              <p>{details.walletAddress}</p>
            </div>
            <div>
              <p style={{ color: "#242f9b", fontWeight: "bold" }}>
                Description:
              </p>
              <p>{details.description}</p>
            </div>

            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <div
                style={{
                  width: "50%",
                  height: "10%",
                  backgroundColor: "#242F9B",
                  borderRadius: "50px",
                  color: "white",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  marginBottom: "1rem",
                }}
              >
                <button
                  type="submit"
                  className="btn btn-lg btn-block"
                  style={{
                    backgroundColor: "#242F9B",
                    color: "white",
                  }}
                  onClick={() => navigate(`/Donate/${details.walletAddress}`)}
                >
                  Donate
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Details;
