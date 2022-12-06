import React from "react";

import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import ValidatedSignIn from "./ValidatedSignIn";

let Usertoken;
axios.defaults.withCredentials = true;

export default function SignInform() {
  return (
    <div>
      <ToastContainer />
      <div className="col" style={{ marginLeft: "10%", marginTop: "10%" }}>
        <ValidatedSignIn />
      </div>
    </div>
  );
}
