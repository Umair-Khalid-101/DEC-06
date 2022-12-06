import React from "react";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";

const UnFavButton = ({ post }) => {
  const deleteFromFav = async (id) => {
    console.log("Delete Post");
    await axios
      .delete(`http://localhost:3001/funderr/deletefromfav/${id}`)
      .then((res) => {
        toast.success(`${res.data.message}`, {
          position: "top-left",
        });
      });
  };
  return (
    <>
      <ToastContainer />
      <button
        style={{
          border: "none",
          backgroundColor: "#242f9b",
          color: "white",
          borderRadius: "50px",
          padding: "0.3rem",
          marginBottom: "1rem",
          width: "200px",
        }}
        onClick={() => deleteFromFav(post.favoritedBy)}
      >
        Remove from Favorites
      </button>
    </>
  );
};

export default UnFavButton;
