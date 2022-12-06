import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import Navbar from "../Navbar";
import AdminDetails from "./AdminDetails";

const AdminCampaigns = () => {
  const { id } = useParams();
  const [campaignDetails, setCampaignDetails] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setCampaignDetails(
        await axios.get(`http://localhost:3001/funderr/post/${id}`)
      );
    };
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  console.log("Response:", campaignDetails);
  return (
    <>
      <Navbar />
      {campaignDetails ? (
        <AdminDetails details={campaignDetails.data.newpost} />
      ) : (
        <div>LOADING......</div>
      )}
    </>
  );
};

export default AdminCampaigns;
