import React, { useContext } from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import { Button, Grid } from "@mui/material";
import FavButton from "../Buttons/FavButton";
import { useNavigate } from "react-router-dom";
import VerifiedIcon from "@mui/icons-material/Verified";
import GppBadIcon from "@mui/icons-material/GppBad";
import UserContext from "../../context/userContext";
import { toast, ToastContainer } from "react-toastify";

export default function CategoryCard({ posts }) {
  const navigate = useNavigate();
  const { userdata } = useContext(UserContext);

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
              <FavButton post={posts} />
            </div>
            <div className="col-6 mt-2">
              <Button
                variant="contained"
                sx={{
                  marginLeft: "2rem",
                  "&.MuiButton-contained": {
                    backgroundColor: "#242F9B",
                  },
                  borderRadius: "50px",
                  width: "110%",
                }}
                onClick={() => {
                  if (userdata) {
                    navigate(`/CampaignDetails/${posts._id}`);
                  } else {
                    toast.error("Please Login to see details", {
                      position: toast.POSITION.TOP_LEFT,
                    });
                  }
                }}
              >
                Read More
              </Button>
            </div>
          </div>
        </CardActions>
      </Card>
    </>
  );
}
