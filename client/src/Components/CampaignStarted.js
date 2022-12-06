import React from "react";
import Navbar from "./Navbar";
import campaignstarted from "../images/campaignstarted.png";
export default function CampaignStarted() {
  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div class="campaignstarted">
        <img
          src={campaignstarted}
          class="image rounded img-fluid"
          alt="..."
          style={{ margin: 50 }}
        />
      </div>
      <div class="goodluck">
        <text
          style={{
            color: "#242F9B",
            fontWeight: "bold",
            fontSize: 40,
          }}
        >
          GOOD LUCK!
        </text>
      </div>
      <div class="goodluck">
        <text
          style={{
            color: "#242F9B",
            fontWeight: "bold",
            fontSize: 20,
          }}
        >
          Your Campaign has been sent for verification
        </text>
      </div>
      <div class="homepagebutton">
        <div
          class="text-center buttonhome"
          style={{
            width: "50%",
            height: "10%",
            backgroundColor: "#242F9B",
            borderRadius: "50px",
            marginTop: 20,
          }}
        >
          <button
            type="submit"
            class="btn btn-lg btn-block "
            style={{
              backgroundColor: "#242F9B",
              color: "white",
              fontWeight: "bold",
            }}
          >
            Home Page
          </button>
        </div>
      </div>
    </div>
  );
}
