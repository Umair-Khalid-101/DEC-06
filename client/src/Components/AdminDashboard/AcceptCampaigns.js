import React, { useState, useEffect } from "react";
import axios from "axios";
import { CircularProgress, Grid } from "@mui/material";
import PendingCampaignsCard from "../AdminCards/PendingCampaignsCard";

const AcceptCampaigns = () => {
  const [pendingCampaigns, setPendingCampaigns] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get("http://localhost:3001/funderr/pendingposts").then((result) => {
      setPendingCampaigns(result.data);
      setLoading(false);
    });
  }, []);

  console.log("Pending Campaigns: ", pendingCampaigns);

  if (loading) {
    return (
      <>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh",
          }}
        >
          <CircularProgress />
        </div>
      </>
    );
  }

  if (pendingCampaigns.pending.length === 0) {
    return (
      <>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh",
          }}
        >
          <div
            style={{
              color: "#242f9b",
              fontSize: "20px",
              fontWeight: "bold",
            }}
          >
            There are no campaigns waiting for approval!
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <div>
        <Grid
          container
          spacing={2}
          paddingLeft={2}
          paddingBottom={4}
          paddingTop={2}
        >
          {pendingCampaigns.pending.map((allposts) => (
            <Grid item xs={6} md={6} lg={4} key={Math.random()}>
              <PendingCampaignsCard posts={allposts} />
            </Grid>
          ))}
        </Grid>
      </div>
    </>
  );
};

export default AcceptCampaigns;
