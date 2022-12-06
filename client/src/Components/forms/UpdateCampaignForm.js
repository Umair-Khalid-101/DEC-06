import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import axios from "axios";

axios.defaults.withCredentials = true;

export default function UpdateCampaignForm({ preloadedValues }) {
  const [picture, setPicture] = useState("");
  const { id } = useParams();
  const history = useNavigate();
  const handleChange = (e) => {
    e.preventDefault();
    setPicture(e.target.files[0]);
  };
  const values = {
    title: preloadedValues.title,
    description: preloadedValues.description,
    enddate: preloadedValues.enddate.split("T")[0],
    campaignGoal: preloadedValues.campaignGoal,
    walletAddress: preloadedValues.walletAddress,
    category: preloadedValues.category,
  };
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    defaultValues: values,
  });
  const onSubmit = async (data) => {
    data.startdate = preloadedValues.startdate.split("T")[0];
    data.postedBy = preloadedValues.postedBy;
    data.posterName = preloadedValues.posterName;
    data.picture = picture;
    data.posterPic = preloadedValues.posterPic;
    data.permission = preloadedValues.permission;
    console.log(data);
    const formData = new FormData();
    formData.append("title", data.title);
    formData.append("description", data.description);
    formData.append("startdate", data.startdate);
    formData.append("enddate", data.enddate);
    formData.append("category", data.category);
    formData.append("postedBy", data.postedBy);
    formData.append("posterName", data.posterName);
    formData.append("picture", data.picture);
    formData.append("posterPic", data.posterPic);
    formData.append("permission", data.permission);
    formData.append("campaignGoal", data.campaignGoal);
    formData.append("walletAddress", data.walletAddress);
    await axios
      .patch(`http://localhost:3001/funderr/editpost/${id}`, formData)
      .then((response) => {
        console.log(response.data);
        toast.success("Campaign Updated!", {
          position: toast.POSITION.TOP_LEFT,
        });
      })
      .then(() => {
        history("/UserDashboard/MyCampaigns");
      });
  };
  return (
    <div>
      <ToastContainer />
      <div
        className="newcampaigninputs col-6 mx-auto"
        style={{ marginLeft: "5%" }}
      >
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-3">
            <label
              className="form-label"
              style={{ color: "#242F9B", fontWeight: "bold" }}
            >
              Title
            </label>
            <input
              type="text"
              className="form-control border-2"
              style={{ borderRadius: "50px" }}
              {...register("title", { required: "true" })}
            />
            <p>
              {errors.title ? (
                <p style={{ color: "red" }}>This field is required</p>
              ) : null}
            </p>
          </div>
          <div className="mb-3">
            <label
              className="form-label"
              style={{ color: "#242F9B", fontWeight: "bold" }}
            >
              End Date
            </label>
            <input
              type="date"
              className="form-control border-2"
              style={{ borderRadius: "50px" }}
              {...register("enddate", { required: "true" })}
            />
            <p>
              {errors.enddate ? (
                <p style={{ color: "red" }}>This field is required</p>
              ) : null}
            </p>
          </div>
          <div className="mb-3">
            <label
              className="form-label"
              style={{ color: "#242F9B", fontWeight: "bold" }}
            >
              Wallet address
            </label>
            <input
              type="text"
              className="form-control border-2"
              style={{ borderRadius: "50px" }}
              {...register("walletAddress", { required: "true" })}
            />
            <p>
              {errors.walletAddress ? (
                <p style={{ color: "red" }}>This field is required</p>
              ) : null}
            </p>
          </div>
          <div className="mb-3">
            <label
              className="form-label"
              style={{ color: "#242F9B", fontWeight: "bold" }}
            >
              Campaign Goal
            </label>
            <input
              type="text"
              className="form-control border-2"
              style={{ borderRadius: "50px" }}
              {...register("campaignGoal", { required: "true", min: 1 })}
            />
            <p>
              {errors.campaignGoal ? (
                <p style={{ color: "red" }}>Invalid Input</p>
              ) : null}
            </p>
          </div>
          <label
            className="form-label"
            style={{ color: "#242F9B", fontWeight: "bold" }}
          >
            Category
          </label>
          <div className="input-group mb-3 ">
            <select
              className="custom-select  border-2 rounded-4"
              id="inputGroupSelect02"
              style={{
                height: 35,
                width: 300,
                color: "#242F9B",
                fontWeight: "bold",
              }}
              {...register("category", { required: "true" })}
            >
              <option></option>
              <option value="Technical" style={{ fontWeight: "bold" }}>
                Technical
              </option>
              <option value="Art" style={{ fontWeight: "bold" }}>
                Art
              </option>
              <option value="Medical" style={{ fontWeight: "bold" }}>
                Medical
              </option>
              <option value="Music" style={{ fontWeight: "bold" }}>
                Music
              </option>
              <option value="Game" style={{ fontWeight: "bold" }}>
                Game
              </option>
            </select>
          </div>
          <div className="mb-3">
            <label
              className="form-label"
              style={{ color: "#242F9B", fontWeight: "bold" }}
            >
              Campaign Picture
            </label>
            <input
              type="file"
              className="form-control border-2"
              style={{ borderRadius: "50px" }}
              onChange={handleChange}
            />
            <p>
              {errors.file ? (
                <p style={{ color: "red" }}>This field is required</p>
              ) : null}
            </p>
          </div>
          <div className="mb-3">
            <label
              className="form-label"
              style={{ color: "#242F9B", fontWeight: "bold" }}
            >
              Description
            </label>
            <textarea
              type="text"
              className="form-control border-2"
              style={{ borderRadius: "30px", height: 300 }}
              {...register("description", { required: "true" })}
            />
          </div>

          <div style={{ display: "flex", justifyContent: "center" }}>
            <button
              type="submit"
              style={{
                backgroundColor: "#FFC107",
                color: "white",
                border: "none",
                borderRadius: "50px",
                padding: "0.3rem",
                width: "150px",
                marginBottom: "1rem",
              }}
            >
              Update Campaign
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
