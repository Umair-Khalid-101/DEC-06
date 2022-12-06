import React, { useCallback, useContext, useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import UserContext from "../../context/userContext";
import * as Yup from "yup";
import { toast, ToastContainer } from "react-toastify";
import Navbar from "../Navbar";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const useYupValidationResolver = (formSchema) =>
  useCallback(
    async (data) => {
      try {
        const values = await formSchema.validate(data, {
          abortEarly: false,
        });

        return {
          values,
          errors: {},
        };
      } catch (errors) {
        return {
          values: {},
          errors: errors.inner.reduce(
            (allErrors, currentError) => ({
              ...allErrors,
              [currentError.path]: {
                type: currentError.type ?? "validation",
                message: currentError.message,
              },
            }),
            {}
          ),
        };
      }
    },
    [formSchema]
  );

const formSchema = Yup.object().shape({
  name: Yup.string()
    .required("Name is mandatory")
    .min(3, "Name must be 3 characters long."),
  email: Yup.string().email().required("Email is mendatory"),
});

const EditProfileForm = () => {
  const [uploadPicture, setUploadPicture] = useState("");
  const [picture, setPicture] = useState("");
  const history = useNavigate();
  const handleChange = (e) => {
    e.preventDefault();
    setUploadPicture(e.target.files[0]);
  };
  const { userdata, setUserData } = useContext(UserContext);
  const values = {
    name: userdata.name,
    email: userdata.email,
  };

  const resolver = useYupValidationResolver(formSchema);
  // const formOptions = { resolver: yupResolver(formSchema) };
  const { register, handleSubmit, formState } = useForm({
    resolver,
    defaultValues: values,
  });
  const { errors } = formState;

  useEffect(() => {
    // console.log("Re-render");
  }, [picture]);

  const onSubmit = async (data) => {
    if (uploadPicture) {
      const uploadedpicture = await handleUpload(uploadPicture);
      console.log("Picture: ", uploadedpicture);
      data.picture = uploadedpicture;
      axios
        .patch(
          `http://localhost:3001/funderr//updateprofile/${userdata._id}`,
          data
        )
        .then((res) => {
          setUserData(res.data);
        })
        .then(() => {
          toast.success("Profile Updated", {
            position: "top-left",
          });
          setTimeout(() => {
            history("/UserDashboard/Profile");
          }, 1000);
        });
    }
  };

  const handleUpload = async (image) => {
    const data = new FormData();
    data.append("file", image);
    data.append("upload_preset", "funderrWebApp");
    data.append("cloud_name", "dfmhxmauj");
    let uploadedImage;

    await fetch("https://api.cloudinary.com/v1_1/dfmhxmauj/image/upload", {
      method: "POST",
      body: data,
    })
      .then((res) => res.json())
      .then((data) => {
        uploadedImage = data.url;
        console.log("Picture: ", data.url);
        setPicture(data.url);
      })
      .catch((err) => console.log(err));

    return uploadedImage;
  };

  return (
    <>
      <Navbar />
      <ToastContainer />
      <div className="container mt-5 col-6">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="form-group">
            <label
              style={{
                color: "#242F9B",
                fontWeight: "bold",
                marginTop: "10px",
              }}
            >
              Name
            </label>
            <input
              name="name"
              type="name"
              style={{ borderRadius: "50px", marginTop: "10px" }}
              {...register("name")}
              className={`form-control ${errors.name ? "is-invalid" : ""}`}
            />
            <div className="invalid-feedback">{errors.name?.message}</div>
          </div>
          <div className="form-group">
            <label
              style={{
                color: "#242F9B",
                fontWeight: "bold",
                marginTop: "10px",
              }}
            >
              Email
            </label>
            <input
              name="email"
              type="email"
              style={{ borderRadius: "50px", marginTop: "10px" }}
              {...register("email")}
              className={`form-control ${errors.email ? "is-invalid" : ""}`}
            />
            <div className="invalid-feedback">{errors.email?.message}</div>
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
          <div
            style={{
              width: "100%",
              height: "10%",
              backgroundColor: "#242F9B",
              borderRadius: "50px",
              marginTop: "30px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <button
              type="submit"
              className="btn btn-lg btn-block"
              style={{
                backgroundColor: "#242F9B",
                color: "white",
              }}
            >
              Update
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default EditProfileForm;
