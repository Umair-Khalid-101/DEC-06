import React from "react";
import Donateform from "./forms/Donateform";
import Navbar from "./Navbar";
import { useParams } from "react-router-dom";

export default function Donate() {
  const { wa } = useParams();
  return (
    <div>
      <Navbar />
      <div class="container">
        <Donateform walletAddress={wa} />
      </div>
    </div>
  );
}
