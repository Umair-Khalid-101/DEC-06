import React, { useEffect, useState } from "react";
import axios from "axios";
import FeaturedCard from "./FeaturedCard";
import Grid from "@mui/material/Grid";
import { CircularProgress } from "@mui/material";

const LandingFeaturedCampaigns = () => {
  const [featured, setFeatured] = useState(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    axios.get("http://localhost:3001/funderr/featuredposts").then((res) => {
      setFeatured(res.data);
      setLoading(false);
    });
  }, []);

  console.log("FEATURED: ", featured);

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
          {featured.map((allposts) => (
            <Grid item xs={6} md={6} lg={4} key={Math.random()}>
              <FeaturedCard posts={allposts} />
            </Grid>
          ))}
        </Grid>
      </div>
    </>
  );
};

export default LandingFeaturedCampaigns;
