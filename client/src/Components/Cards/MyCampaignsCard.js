import * as React from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import ShareIcon from "@mui/icons-material/Share";
import FavoriteBorder from "@mui/icons-material/FavoriteBorder";
import { Checkbox, Grid } from "@mui/material";
import Favorite from "@mui/icons-material/Favorite";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import { useNavigate } from "react-router-dom";
import VerifiedIcon from "@mui/icons-material/Verified";
import GppBadIcon from "@mui/icons-material/GppBad";

export default function MyCampaignsCard({ posts }) {
  const navigate = useNavigate();
  const handleDelete = async (id) => {
    await axios
      .delete(`http://localhost:3001/funderr/deletepost/${id}`)
      .then((response) => {
        toast.success("Campaign Deleted!", {
          position: toast.POSITION.TOP_LEFT,
        });
        setTimeout(() => {
          navigate("/UserDashboard/AllCampaigns");
        }, 1000);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <ToastContainer />
      <Card sx={{ maxWidth: 340 }}>
        <CardHeader
          avatar={<Avatar src={posts.posterPic} alt={"UserPic"} />}
          title={posts.title}
          subheader={posts.posterName}
        />
        {posts.permission === "accepted" ? (
          <CardContent>
            <VerifiedIcon />
          </CardContent>
        ) : (
          <CardContent>
            <GppBadIcon />
          </CardContent>
        )}
        <CardMedia
          component="img"
          height="194"
          image={posts.picture}
          alt="Paella dish"
        />
        <CardContent>
          <Grid
            container
            rowSpacing={1}
            columnSpacing={{ xs: 1, sm: 2, md: 3 }}
          >
            <Grid item xs={6}>
              <Typography variant="body2" color="text.secondary">
                Target: {posts.campaignGoal}
              </Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography variant="body2" color="text.secondary">
                Raised:
              </Typography>
            </Grid>
          </Grid>
        </CardContent>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-evenly",
          }}
        >
          <button
            style={{
              border: "none",
              padding: "0.3rem",
              marginBottom: "1rem",
              width: "110px",
              borderRadius: "20px",
              color: "white",
              fontSize: "16px",
              backgroundColor: "#242f9b",
            }}
            onClick={() => navigate(`/EditCampaign/${posts._id}`)}
          >
            Edit
          </button>
          <button
            style={{
              border: "none",
              padding: "0.3rem",
              marginBottom: "1rem",
              width: "110px",
              borderRadius: "20px",
              color: "white",
              fontSize: "16px",
              backgroundColor: "#242f9b",
            }}
            onClick={() => handleDelete(posts._id)}
          >
            Delete
          </button>
        </div>
      </Card>
    </>
  );
}
