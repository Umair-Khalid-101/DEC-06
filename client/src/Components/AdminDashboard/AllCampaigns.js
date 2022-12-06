import React, { useState, useEffect } from "react";
import axios from "axios";
import Grid from "@mui/material/Grid";
import { CircularProgress } from "@mui/material";
import AllCampaignsCard from "../AdminCards/AllCampaignsCard";

const AllCampaigns = () => {
    const [campaigns, setCampaigns] = useState(null);
    const [loading, setLoading] = useState(true);
  
    useEffect(() => {
      axios.get("http://localhost:3001/funderr/allposts").then((result) => {
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
            {campaigns.allposts.map((allposts) => (
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
  