import React from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import { Grid } from "@mui/material";
import UnFavButton from "../Buttons/UnFavButton";

export default function FavCampaignsCard({ posts }) {
  return (
    <Card sx={{ maxWidth: 340 }}>
      <CardHeader
        avatar={<Avatar src={posts.posterPic} />}
        title={posts.title}
        subheader={posts.posterName}
      />
      <CardMedia
        component="img"
        height="194"
        image={posts.picture}
        alt="Paella dish"
      />
      <CardContent>
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
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
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <UnFavButton post={posts} />
      </div>
    </Card>
  );
}
