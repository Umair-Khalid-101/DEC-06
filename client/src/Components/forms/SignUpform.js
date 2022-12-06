import React from "react";
import { toast, ToastContainer } from "react-toastify";

import Newform from "./Newform";

export default function SignUpform() {
  return (
    <div>
      <ToastContainer />
      <div className="col" style={{ marginLeft: "10%", marginTop: "4%" }}>
        <Newform />
      </div>
    </div>
  );
}
