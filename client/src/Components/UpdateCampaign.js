import React from "react";
import Navbar from "./Navbar";
import newcampaign from "../images/newcampaign.png";
import { useForm } from "react-hook-form";
import UpdateCampaignForm from "./forms/UpdateCampaignForm";
export default function UpdateCampaign() {
  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div class=" newcampaignimage container">
        <img src={newcampaign} class="image rounded img-fluid" alt="..." />
      </div>
      <div>
        <UpdateCampaignForm />
      </div>
    </div>
  );
}
