import React from "react";
import Navbar from "./Navbar";
import donated from "../images/donated.png";
export default function DonatedSuccessfully() {
  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div class="donatedimage">
        <img
          src={donated}
          class="image rounded img-fluid"
          alt="..."
          style={{ marginTop: 50 }}
        />
      </div>

      <div class="goodluck">
        <p
          style={{
            color: "#242F9B",
            fontWeight: "bold",
            fontSize: 20,
          }}
        >
          Thank You For Your Donation
        </p>
      </div>
      <div class="homepagebutton">
        <div
          class="text-center buttonhome"
          style={{
            width: "40%",

            backgroundColor: "#242F9B",
            borderRadius: "50px",
            marginTop: 10,
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
