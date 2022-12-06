import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import Grid from "@mui/material/Grid";
import UserContext from "../../context/userContext";
import { CircularProgress } from "@mui/material";
import FavCampaignsCard from "../Cards/FavCampaignsCard";

axios.defaults.withCredentials = true;
const FavCampaigns = () => {
  const { token } = useContext(UserContext);
  const [userfavCampaigns, setUserFavCampaigns] = useState();

  const getUserFavCampaigns = async () => {
    const res = await axios
      .get("http://localhost:3001/funderr/userfavposts", {
        headers: {
          "x-auth-token": token,
        },
      })
      .catch((err) => console.log(err));

    const data = await res.data;
    return data;
  };
  console.log("Currently logged UserFav Posts: ", userfavCampaigns);
  console.log("UserToken: ", token);
  useEffect(() => {
    getUserFavCampaigns().then((posts) =>
      setUserFavCampaigns(posts.userFavPosts)
    );
    // eslint-disable-next-line
  }, []);

  if (!userfavCampaigns) {
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

  if (userfavCampaigns.length === 0) {
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
            You haven't favorited any campaigns!!! Favorite some and come back!!
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
          paddingBottom={2}
          paddingTop={2}
        >
          {userfavCampaigns.map((allposts) => (
            <Grid item xs={6} md={6} lg={4} key={Math.random()}>
              <FavCampaignsCard posts={allposts} />
            </Grid>
          ))}
        </Grid>
      </div>
    </>
  );
};

export default FavCampaigns;
