import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import UpdateCampaignForm from "./forms/UpdateCampaignForm";
import Navbar from "./Navbar";
import axios from "axios";

axios.defaults.withCredentials = true;

const EditCampaign = () => {
  const [post, setPost] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      setPost(await axios.get(`http://localhost:3001/funderr/post/${id}`));
    };
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <>
      <Navbar />
      <div
        style={{
          marginTop: "4rem",
        }}
      >
        {post ? (
          <UpdateCampaignForm preloadedValues={post.data.newpost} />
        ) : (
          <div>LOADINGG....</div>
        )}
      </div>
    </>
  );
};

export default EditCampaign;
