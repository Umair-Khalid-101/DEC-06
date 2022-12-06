import React, { useContext, useState } from "react";
import IconButton from "@mui/material/IconButton";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import { toast, ToastContainer } from "react-toastify";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AddFeatured = ({ post }) => {
  const navigate = useNavigate();
  const addToFeatured = () => {
    console.log("Post: ", post);
    axios
      .post("http://localhost:3001/funderr/addfeatured", post)
      .then((res) => {
        toast.success("Added To Featured!", {
          position: toast.POSITION.TOP_LEFT,
        });
      })
      .then(() => {
        setTimeout(() => {
          navigate("/AdminDashboard/AdminAllCampaigns");
        }, 2000);
      });
  };

  return (
    <>
      <>
        <ToastContainer />
        <IconButton aria-label="add to featured" onClick={addToFeatured}>
          <BookmarkIcon />
        </IconButton>
      </>
    </>
  );
};

export default AddFeatured;
