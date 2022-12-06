import React, { useState, useContext } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import parse from "date-fns/parse";
import { toast, ToastContainer } from "react-toastify";
import UserContext from "../../context/userContext";
import axios from "axios";
import { ethers } from "ethers";

axios.defaults.withCredentials = true;

export default function CampaignFormNew() {
  let startdate = new Date().toISOString().slice(0, 10);
  const { userdata } = useContext(UserContext);

  const [picture, setPicture] = useState("");
  const history = useNavigate();
  const handleChange = (e) => {
    e.preventDefault();
    setPicture(e.target.files[0]);
  };

  const formSchema = Yup.object().shape({
    title: Yup.string()
      .required("Title is mandatory")
      .min(5, "Title must be at 5 characters long"),
    walletAddress: Yup.string().required("Wallet Address is mandatory"),

    campaignGoal: Yup.number()
      .min(1)
      .typeError("Campaign Goal is mandatory. It must be a number")
      .required("Campaign Goal is mandatory"),

    description: Yup.string().required("Description is mandatory"),
    category: Yup.string().required("Category is mandatory"),
    enddate: Yup.date()
      .transform(function (value, originalValue) {
        if (this.isType(value)) {
          return value;
        }
        const result = parse(originalValue, "dd.MM.yyyy", new Date());
        return result;
      })
      .typeError("End date is mandatory. Please enter a valid date.")
      .min(startdate, "Date is invalid"),
  });
  const formOptions = { resolver: yupResolver(formSchema) };
  const { register, handleSubmit, reset, formState } = useForm(formOptions);
  const { errors } = formState;

  const onSubmit = async (data) => {
    data.picture = picture;
    data.permission = "pending";
    data.postedBy = userdata._id;
    data.posterName = userdata.name;
    data.startdate = startdate;
    data.posterPic = userdata.picture;
    console.log(data);
    const formData = new FormData();
    formData.append("title", data.title);
    formData.append("description", data.description);
    formData.append("enddate", data.enddate);
    formData.append("startdate", data.startdate);
    formData.append("campaignGoal", data.campaignGoal);
    formData.append("postedBy", data.postedBy);
    formData.append("posterName", data.posterName);
    formData.append("walletAddress", data.walletAddress);
    formData.append("permission", data.permission);
    formData.append("category", data.category);
    formData.append("picture", data.picture);
    formData.append("posterPic", data.posterPic);
    // console.log(formData.get("title"));
    // console.log(formData.get("description"));
    // console.log(formData.get("enddate"));
    // console.log(formData.get("startdate"));
    // console.log(formData.get("campaignGoal"));
    // console.log(formData.get("postedBy"));
    // console.log(formData.get("posterName"));
    // console.log(formData.get("walletAddress"));
    // console.log(formData.get("permission"));
    // console.log(formData.get("category"));
    // console.log(formData.get("picture"));
    // console.log(formData.get("posterPic"));

    if (picture) {
      const sendNotification = async () => {
        let message = `${userdata.name} created a new campaign: ${data.title}`;
        let status = "unread";
        let user = userdata._id;
        const notification = {
          message: message,
          status: status,
          user: user,
        };
        console.log("Notification: ", notification);
        await axios
          .post("http://localhost:3001/funderr/pushNotification", notification)
          .then((response) => {
            console.log(response);
          });
      };

      if (ethers.utils.isAddress(data.walletAddress)) {
        axios
          .post("http://localhost:3001/funderr/newpost", formData)
          .then((response) => {
            console.log(response);
          })
          .then(
            toast.info("Creating New Campaign!", {
              position: toast.POSITION.TOP_LEFT,
            })
          )
          .then(() => {
            sendNotification();
          })
          .then(() => {
            toast.success("New Campaign Created!", {
              position: toast.POSITION.TOP_LEFT,
            });
            setTimeout(() => {
              history("/UserDashboard/AllCampaigns");
            }, 1000);
          })
          .catch((error) => {
            console.log(error);
            toast.error("Something went wrong!", {
              position: toast.POSITION.TOP_LEFT,
            });
          });
      } else {
        toast.error("Invalid WalletAddress", {
          position: "top-left",
        });
      }
    } else {
      toast.error("Please Select a Campaign Picture", {
        position: "top-left",
      });
    }
  };
  return (
    <>
      <ToastContainer />
      <div className="container mt-5">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="form-group">
            <label
              style={{
                color: "#242F9B",
                fontWeight: "bold",
                marginTop: "10px",
              }}
            >
              Title
            </label>
            <input
              style={{ borderRadius: "50px", marginTop: "10px" }}
              {...register("title")}
              className={`form-control ${errors.title ? "is-invalid" : ""}`}
            />
            <div className="invalid-feedback">{errors.title?.message}</div>
          </div>
          <div className="form-group">
            <label
              style={{
                color: "#242F9B",
                fontWeight: "bold",
                marginTop: "10px",
              }}
            >
              End Date
            </label>
            <input
              name="enddate"
              type="date"
              style={{ borderRadius: "50px", marginTop: "10px" }}
              {...register("enddate")}
              className={`form-control ${errors.enddate ? "is-invalid" : ""}`}
            />
            <div className="invalid-feedback">{errors.enddate?.message}</div>
          </div>
          <div className="form-group">
            <label
              style={{
                color: "#242F9B",
                fontWeight: "bold",
                marginTop: "10px",
              }}
            >
              Wallet Address
            </label>
            <input
              type="text"
              style={{ borderRadius: "50px", marginTop: "10px" }}
              {...register("walletAddress")}
              className={`form-control ${
                errors.walletAddress ? "is-invalid" : ""
              }`}
            />
            <div className="invalid-feedback">
              {errors.walletAddress?.message}
            </div>
          </div>
          <div className="form-group">
            <label
              style={{
                color: "#242F9B",
                fontWeight: "bold",
                marginTop: "10px",
              }}
            >
              Campaign Goal
            </label>
            <input
              type="number"
              style={{ borderRadius: "50px", marginTop: "10px" }}
              {...register("campaignGoal")}
              className={`form-control ${
                errors.campaignGoal ? "is-invalid" : ""
              }`}
            />
            <div className="invalid-feedback">
              {errors.campaignGoal?.message}
            </div>
          </div>
          <div className="form-group">
            <label
              style={{
                color: "#242F9B",
                fontWeight: "bold",
                marginTop: "10px",
              }}
            >
              Category
            </label>
            <select
              style={{
                height: 35,
                width: 300,
                color: "#242F9B",
                fontWeight: "bold",
              }}
              {...register("category")}
              className={`form-control ${errors.category ? "is-invalid" : ""}`}
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
              <option value="Illustration" style={{ fontWeight: "bold" }}>
                Illustration
              </option>
              <option value="Social" style={{ fontWeight: "bold" }}>
                Social
              </option>
            </select>
            <div className="invalid-feedback">{errors.category?.message}</div>
          </div>
          <div className="form-group">
            <label
              style={{
                color: "#242F9B",
                fontWeight: "bold",
                marginTop: "10px",
              }}
            >
              Picture
            </label>
            <input
              name="picture"
              type="file"
              className={`form-control ${
                errors.confirmPwd ? "is-invalid" : ""
              }`}
              onChange={handleChange}
              style={{ borderRadius: "50px", marginTop: "10px" }}
            />
          </div>
          <div className="form-group">
            <label
              style={{
                color: "#242F9B",
                fontWeight: "bold",
                marginTop: "10px",
              }}
            >
              Description
            </label>
            <textarea
              style={{ borderRadius: "30px", marginTop: "10px", height: 300 }}
              {...register("description")}
              className={`form-control ${
                errors.description ? "is-invalid" : ""
              }`}
            />
            <div className="invalid-feedback">
              {errors.description?.message}
            </div>
          </div>

          <div
            className="text-center"
            style={{
              width: "100%",
              height: "10%",
              backgroundColor: "#242F9B",
              borderRadius: "50px",
              marginBottom: 20,
              marginTop: 20,
            }}
          >
            <button
              type="submit"
              className="btn btn-lg btn-block "
              style={{
                backgroundColor: "#242F9B",
                color: "white",
              }}
            >
              Start Campaign
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
