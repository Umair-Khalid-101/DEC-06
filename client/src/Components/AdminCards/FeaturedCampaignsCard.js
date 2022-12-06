import React, { useEffect } from "react";
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
import { Button, Checkbox, Grid } from "@mui/material";
import Favorite from "@mui/icons-material/Favorite";
import FavButton from "../Buttons/FavButton";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import VerifiedIcon from "@mui/icons-material/Verified";
import GppBadIcon from "@mui/icons-material/GppBad";
import AddFeatured from "../Buttons/AddFeatured";

export default function FeaturedCampaignsCard({ posts }) {
  const handleDelete = async (id) => {
    alert(id);
    // await axios
    //   .delete(`http://localhost:3001/funderr/deleteCampaign/${id}`)
    //   .then((response) => {
    //     toast.success("Campaign Deleted!", {
    //       position: toast.POSITION.TOP_LEFT,
    //     });
    //     setTimeout(() => {
    //       navigate("/AdminDashboard");
    //     }, 1000);
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });
  };

  useEffect(() => {}, [posts]);

  const navigate = useNavigate();
  return (
    <>
      <ToastContainer />
      <Card sx={{ maxWidth: 340 }}>
        <CardHeader
          avatar={<Avatar src={posts.posterPic} />}
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
        <CardActions disableSpacing>
          <div className="row">
            <div className="col-6">
              {/* <FavButton post={posts} /> */}
              {/* <AddFeatured post={posts} /> */}
              {/* <IconButton aria-label="share">
                <ShareIcon />
              </IconButton> */}
            </div>
            <div className="col-6 mt-2">
              <Button
                variant="contained"
                sx={{
                  marginLeft: "5rem",
                  marginBottom: "1rem",
                  "&.MuiButton-contained": {
                    backgroundColor: "#242F9B",
                  },
                  borderRadius: "50px",
                  width: "110%",
                }}
                onClick={() => handleDelete(posts._id)}
              >
                Delete
              </Button>
            </div>
          </div>
        </CardActions>
      </Card>
    </>
  );
}
