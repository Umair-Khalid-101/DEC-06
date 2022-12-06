import React from "react";
import Navbar from "./Navbar";
import signup from "../images/signup.png";
import SignUpform from "./forms/SignUpform";
import { useGoogleLogin } from "@react-oauth/google"; 
 import FacebookLogin from "react-facebook-login/dist/facebook-login-render-props"; 
export default function SignUp() {
  
  return (
    <div>
      <Navbar />
      <div className="container text-center">
        <div className="row">
          <div className="col">
            <img src={signup} className="rounded img-fluid m-5" alt="..." />
          </div>
          <div className="col mt-5">
            <SignUpform />
          </div>
        </div>
      </div>
    </div>
  );
}
