import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import Grid from "@mui/material/Grid";
import UserContext from "../../context/userContext";
import { CircularProgress } from "@mui/material";
import MyCampaignsCard from "../Cards/MyCampaignsCard";

axios.defaults.withCredentials = true;

const MyCampaigns = () => {
  const { token, setcurrentUserCampaigns } = useContext(UserContext);
  const [userCampaigns, setUserCampaigns] = useState();

  const getUserCampaigns = async () => {
    const res = await axios
      .get("http://localhost:3001/funderr/userposts", {
        headers: {
          "x-auth-token": token,
        },
      })
      .catch((err) => console.log(err));

    const data = await res.data;
    return data;
  };
  console.log("Currently logged Users Posts: ", userCampaigns);
  console.log("UserToken: ", token);
  useEffect(() => {
    getUserCampaigns().then((posts) => {
      setUserCampaigns(posts.userposts);
      setcurrentUserCampaigns(posts.userposts);
    });
    // eslint-disable-next-line
  }, []);

  if (!userCampaigns) {
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

  if (userCampaigns.length === 0) {
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
            You haven't created any campaigns!!! Create some and come back!!
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
          {userCampaigns.map((allposts) => (
            <Grid item xs={6} md={6} lg={4} key={Math.random()}>
              <MyCampaignsCard posts={allposts} />
            </Grid>
          ))}
        </Grid>
      </div>
    </>
  );
};

export default MyCampaigns;
