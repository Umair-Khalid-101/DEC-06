import React, { useState, useContext } from "react";
import CampaignFormNew from "./CampaignFormNew";

export default function CampaignForm() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div className="col-8">
        <CampaignFormNew />
      </div>
    </div>
  );
}
