import * as React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import FavoriteBorder from "@mui/icons-material/FavoriteBorder";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { Alert } from "bootstrap";
import { Button, Checkbox, Grid } from "@mui/material";
import Favorite from "@mui/icons-material/Favorite";

export default function CampaignCard() {
  const successAlert = () => {
    console.log("Added to Favourites");
  };

  return (
    <Card sx={{ maxWidth: 340 }}>
      <CardHeader
        avatar={
          // <Avatar sx={{ bgcolor: "#242F9B" }} aria-label="recipe">
          //   R
          // </Avatar>
          <Avatar src={require("../images/donated.png")} />
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title="Shrimp and Chorizo Paella"
        subheader="September 14, 2016"
      />
      <CardMedia
        component="img"
        height="194"
        image={require("../images/donated.png")}
        alt="Paella dish"
      />
      <CardContent>
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          <Grid item xs={6}>
            <Typography variant="body2" color="text.secondary">
              Target:
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
            <IconButton aria-label="add to favorites">
              <Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite />} />
            </IconButton>
            <IconButton aria-label="share">
              <ShareIcon />
            </IconButton>
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
            >
              Read More
            </Button>
          </div>
        </div>
      </CardActions>
    </Card>
  );
}
