import React from "react";
import login from "../images/login.png";
import SignInform from "./forms/SignInform";

import Navbar from "./Navbar";

export default function SignIn() {
  return (
    <div>
      <Navbar />
      <div className="container text-center">
        <div className="row">
          <div className="col">
            <img src={login} className="rounded img-fluid m-5" alt="..." />
          </div>
          <div className="col mt-5">
            <SignInform />
          </div>
        </div>
      </div>
    </div>
  );
}
