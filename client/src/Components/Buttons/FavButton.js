import React, { useContext, useState } from "react";
import IconButton from "@mui/material/IconButton";
import FavoriteBorder from "@mui/icons-material/FavoriteBorder";
import UserContext from "../../context/userContext";
import { toast, ToastContainer } from "react-toastify";
import axios from "axios";

const FavButton = ({ post }) => {
  const { userdata } = useContext(UserContext);

  const addToFav = async () => {
    if (userdata) {
      post.favoritedBy = userdata._id;
      console.log("FavPost: ", post);
      await axios
        .post("http://localhost:3001/funderr/addfavorite", post)
        .then((res) => {
          toast.success(`${res.data.message}`, {
            position: "top-left",
          });
        });
    } else {
      toast.error("Please Login to Add Campaign to Favorites", {
        position: toast.POSITION.TOP_LEFT,
      });
    }
  };
  return (
    <>
      <ToastContainer />
      <IconButton aria-label="add to favorites" onClick={addToFav}>
        <FavoriteBorder />
      </IconButton>
    </>
  );
};

export default FavButton;
