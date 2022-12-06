import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { BsFacebook } from "react-icons/bs";
import axios from "axios";
import FacebookLogin from "react-facebook-login/dist/facebook-login-render-props";
import { toast } from "react-toastify";
import { useGoogleLogin } from "@react-oauth/google";

export default function Newform() {
  const [uploadPicture, setUploadPicture] = useState("");
  const [picture, setPicture] = useState("");
  const history = useNavigate();
  const handleChange = (e) => {
    e.preventDefault();
    setPicture(e.target.files[0]);
  };
  const formSchema = Yup.object().shape({
    password: Yup.string()
      .required("Password is mandatory")
      .min(3, "Password must be at 3 char long"),
    confirmPwd: Yup.string()
      .required("Password is mandatory")
      .oneOf([Yup.ref("password")], "Passwords does not match"),
    name: Yup.string()
      .required("Name is mandatory")
      .min(3, "Name must be 3 characters long."),
    email: Yup.string().email().required("Email is mendatory"),
  });
  const formOptions = { resolver: yupResolver(formSchema) };
  const { register, handleSubmit, reset, formState } = useForm(formOptions);
  const { errors } = formState;

  const onSubmit = async (data) => {
    // console.log(data);
    if (!picture) {
      data.role = "user";
      data.picture =
        "http://res.cloudinary.com/dfmhxmauj/image/upload/v1670337910/axqfk5lkxf09qsbhpspr.jpg";
      const formData = new FormData();
      formData.append("name", data.name);
      formData.append("email", data.email);
      formData.append("password", data.password);
      formData.append("role", data.role);
      formData.append("picture", data.picture);
      console.log(formData.get("name"));
      console.log(formData.get("email"));
      console.log(formData.get("password"));
      console.log(formData.get("role"));
      console.log(formData.get("picture"));
      await axios
        .post("http://localhost:3001/funderr/register", formData)
        .then((response) => console.log(response.data))
        .then(
          toast.info("Signing Up!", {
            position: toast.POSITION.TOP_LEFT,
          })
        )
        .then(() => {
          toast.success("Signed Up Succesfully!", {
            position: toast.POSITION.TOP_LEFT,
          });
          setTimeout(() => {
            history("/login");
          }, 1000);
        })
        .catch((error) => {
          toast.error(`${error}`, {
            position: "top-left",
          });
        });
    } else if (picture) {
      const uploadedpicture = await handleUpload(picture);
      data.role = "user";
      console.log("74-UploadedPic: ", uploadedpicture);
      const formData = new FormData();
      formData.append("name", data.name);
      formData.append("email", data.email);
      formData.append("password", data.password);
      formData.append("role", data.role);
      formData.append("picture", uploadedpicture);
      console.log(formData.get("name"));
      console.log(formData.get("email"));
      console.log(formData.get("password"));
      console.log(formData.get("role"));
      console.log(formData.get("picture"));
      await axios
        .post("http://localhost:3001/funderr/register", formData)
        .then((response) => console.log(response.data))
        .then(
          toast.info("Signing Up!", {
            position: toast.POSITION.TOP_LEFT,
          })
        )
        .then(() => {
          toast.success("Signed Up Succesfully!", {
            position: toast.POSITION.TOP_LEFT,
          });
          setTimeout(() => {
            history("/login");
          }, 1000);
        })
        .catch((error) => {
          toast.error(`${error}`, {
            position: "top-left",
          });
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
      })
      .catch((err) => console.log(err));

    return uploadedImage;
  };

  //  const googleAuth = useGoogleLogin({
  //       flow: "auth-code",
  //       onSuccess: async ({ code }) => {
  //         // console.log(code);
  //         // const credentials = Realm.Credentials.google(code);
  //         // realmApp
  //         //   .logIn(credentials)
  //         //   .then((user) => alert(`Logged in with id: ${user.id}`));

  //         try {
  //           const response = await axios.post(
  //             "http://localhost:3003/api/auth/google/signup",
  //             {
  //               // http://localhost:3001/auth/google backend that will exchange the code
  //               code,
  //             }
  //           );
  //           const { email, password, ...rest } = response.data;
  //   //         handleSignup(email, password, rest);
  //         } catch (error) {
  //         }
  //       },
  //       redirect_uri: "http://localhost:3000/home",
  //     });

  const responseFacebook = async (res) => {
    // console.log(res);
    const { accessToken, id } = res;
    try {
      const response = await axios.post(
        "http://localhost:3001/funderr/facebook/signup",
        {
          id,
          accessToken,
        }
      );
      console.log("Response From facebook", response);
      const { email, password, rest } = response.data;
    } catch (error) {}
  };

  return (
    <div className="container mt-5">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-group">
          <label
            style={{ color: "#242F9B", fontWeight: "bold", marginTop: "10px" }}
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
            style={{ color: "#242F9B", fontWeight: "bold", marginTop: "10px" }}
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
            style={{ color: "#242F9B", fontWeight: "bold", marginTop: "10px" }}
          >
            Password
          </label>
          <input
            name="password"
            type="password"
            style={{ borderRadius: "50px", marginTop: "10px" }}
            {...register("password")}
            className={`form-control ${errors.password ? "is-invalid" : ""}`}
          />
          <div className="invalid-feedback">{errors.password?.message}</div>
        </div>
        <div className="form-group">
          <label
            style={{ color: "#242F9B", fontWeight: "bold", marginTop: "10px" }}
          >
            Confirm Password
          </label>
          <input
            name="confirmPwd"
            type="password"
            style={{ borderRadius: "50px", marginTop: "10px" }}
            {...register("confirmPwd")}
            className={`form-control ${errors.confirmPwd ? "is-invalid" : ""}`}
          />
          <div className="invalid-feedback">{errors.confirmPwd?.message}</div>
        </div>
        <div className="form-group">
          <label
            style={{ color: "#242F9B", fontWeight: "bold", marginTop: "10px" }}
          >
            Picture
          </label>
          <input
            name="picture"
            type="file"
            className={`form-control ${errors.confirmPwd ? "is-invalid" : ""}`}
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
            Sign Up
          </button>
        </div>
      </form>
      <div
        style={{
          fontWeight: "bold",
          color: "#242f9b",
          fontSize: "15px",
          marginTop: "1rem",
          cursor: "pointer",
        }}
        onClick={() => {
          history("/login");
        }}
      >
        Already a User? Sign In here
      </div>

      <p
        className="text-start"
        style={{
          fontWeight: "bold",
          marginTop: "1rem",
          color: "#242F9B",
          fontSize: 20,
        }}
      >
        Or Sign Up With
      </p>
      <h1 className="text-start">
        <div>
          {/* <FcGoogle onClick={async () => { 
                   googleAuth(); 
                   // await axios.post("http://localhost:3003/api/auth/google") 
                 }}  /> */}
              
          <FacebookLogin
            appId="409342568078504"
            autoLoad={false}
            fields="name,email,picture"
            callback={responseFacebook}
            render={(renderProps) => (
              <BsFacebook
                onClick={renderProps.onClick}
                style={{ margin: "1rem", color: "#242F9B" }}
              />
            )}
          />
        </div>
      </h1>
    </div>
  );
}
