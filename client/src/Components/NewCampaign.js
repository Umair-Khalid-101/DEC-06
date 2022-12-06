import React from "react";
import Navbar from "./Navbar";
import newcampaign from "../images/newcampaign.png";

import CampaignForm from "./forms/CampaignForm";
export default function NewCampaign() {
  return (
    <div>
      <div className=" newcampaignimage container">
        <img src={newcampaign} className="image rounded img-fluid" alt="..." />
      </div>
      <CampaignForm />
    </div>
  );
}
