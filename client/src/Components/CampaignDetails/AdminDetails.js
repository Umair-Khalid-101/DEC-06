import React from "react";
import ShareIcon from "@mui/icons-material/Share";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";

const AdminDetails = ({ details }) => {
  const acceptCampaign = async (id) => {
    // alert(id);
    await axios
      .get(`http://localhost:3001/funderr/acceptcampaign/${id}`)
      .then((res) => {
        toast.success("Campaign Accepted", {
          position: toast.POSITION.TOP_LEFT,
        });
      })
      .then(() => {
        setTimeout(() => {
          navigate("/AdminDashboard/AdminAllCampaigns");
        }, 2000);
      });
  };
  const navigate = useNavigate();
  return (
    <>
      <ToastContainer />
      <div>
        <div className="container">
          <div>
            <div
              className="row"
              style={{
                display: "flex",
                justifyContent: "center",
                alignContent: "center",
              }}
            >
              <img src={details.picture} style={{ width: "50%" }} />
            </div>
            <div>
              <p style={{ color: "#242f9b", fontWeight: "bold" }}>
                Campaign Owner:
              </p>
              <p>{details.posterName}</p>
            </div>
            <div>
              <p style={{ color: "#242f9b", fontWeight: "bold" }}>Title:</p>
              <p>{details.title}</p>
            </div>
            <div>
              <p style={{ color: "#242f9b", fontWeight: "bold" }}>Category:</p>
              <p>{details.category}</p>
            </div>
            <div>
              <p style={{ color: "#242f9b", fontWeight: "bold" }}>
                Total Amount:
              </p>
              <p>{details.campaignGoal}</p>
            </div>
            <div>
              <p style={{ color: "#242f9b", fontWeight: "bold" }}>
                Raised Amount:
              </p>
              <p>2 ETH</p>
            </div>
            <div>
              <p style={{ color: "#242f9b", fontWeight: "bold" }}>End Date:</p>
              <p>{details.enddate}</p>
            </div>
            <div>
              <p style={{ color: "#242f9b", fontWeight: "bold" }}>
                Description:
              </p>
              <p>{details.description}</p>
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <div
                style={{
                  width: "50%",
                  height: "10%",
                  backgroundColor: "#242F9B",
                  borderRadius: "50px",
                  color: "white",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  marginBottom: "1rem",
                }}
              >
                <button
                  type="submit"
                  className="btn btn-lg btn-block"
                  style={{
                    backgroundColor: "#242F9B",
                    color: "white",
                  }}
                  onClick={() => acceptCampaign(details._id)}
                >
                  Accept
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminDetails;
