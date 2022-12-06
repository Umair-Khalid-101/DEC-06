import React, { useState, useEffect, useContext } from "react";
import UserContext from "../../context/userContext";
import axios from "axios";
import AllCampaignsCard from "../Cards/AllCampaignsCard";
import Grid from "@mui/material/Grid";
import { CircularProgress } from "@mui/material";

const AllCampaigns = () => {
  const [campaigns, setCampaigns] = useState(null);
  const [loading, setLoading] = useState(true);
  const { currentUserCampaigns } = useContext(UserContext);

  console.log("13-CurrentUserCampaigns: ", currentUserCampaigns);

  useEffect(() => {
    axios.get("http://localhost:3001/funderr/verifiedposts").then((result) => {
      setCampaigns(result.data);
      setLoading(false);
    });
  }, []);

  console.log("Campaigns: ", campaigns);

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
          {campaigns.verified.map((allposts) => (
            <Grid item xs={6} md={6} lg={4} key={Math.random()}>
              <AllCampaignsCard posts={allposts} />
            </Grid>
          ))}
        </Grid>
      </div>
    </>
  );
};

export default AllCampaigns;
