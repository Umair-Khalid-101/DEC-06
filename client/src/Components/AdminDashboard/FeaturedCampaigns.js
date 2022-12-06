import React, { useEffect, useState } from "react";
import axios from "axios";
import FeaturedCampaignsCard from "../AdminCards/FeaturedCampaignsCard";
import { CircularProgress, Grid } from "@mui/material";

const FeaturedCampaigns = () => {
  const [featuredCampaigns, setFeaturedCampaigns] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get("http://localhost:3001/funderr/featured").then((result) => {
      setFeaturedCampaigns(result.data);
      setLoading(false);
    });
  }, []);

  console.log("Featured: ", featuredCampaigns);

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
          {featuredCampaigns.map((allposts) => (
            <Grid item xs={6} md={6} lg={4} key={Math.random()}>
              <FeaturedCampaignsCard posts={allposts} />
            </Grid>
          ))}
        </Grid>
      </div>
    </>
  );
};

export default FeaturedCampaigns;
