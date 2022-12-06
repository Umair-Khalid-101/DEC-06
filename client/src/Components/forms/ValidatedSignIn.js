import React, { useEffect, useState, useContext } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { BsFacebook } from "react-icons/bs";
import UserContext from "../../context/userContext";
import axios from "axios";
import LoginIcon from "@mui/icons-material/Login";
import { toast, ToastContainer } from "react-toastify";
let Usertoken;
axios.defaults.withCredentials = true;

export default function ValidatedSignIn() {
  const { token, userdata, setToken, setUserData } = useContext(UserContext);
  const history = useNavigate();
  const [user, setUser] = useState({});

  const success = () => {
    toast.success("Successfully Logged In!", {
      position: toast.POSITION.TOP_LEFT,
    });
  };
  const onSubmit = async (data) => {
    console.log(data);
    await axios
      .post("http://localhost:3001/funderr/auth", data)
      .then((result) => {
        Usertoken = result.data;
        setToken(Usertoken);
      })
      .catch((error) => {
        console.log(error);
        toast.error("Wrong Email or Password", {
          position: toast.POSITION.TOP_LEFT,
        });
      });
    await axios
      .get("http://localhost:3001/funderr/currentuser", {
        headers: {
          "x-auth-token": Usertoken,
        },
      })
      .then((result) => {
        success();
        const newUser = result.data;
        // console.log("Result.Data: ", newUser);
        setUser(newUser);
        setUserData(newUser);
        setTimeout(() => {
          newUser.role === "admin"
            ? history("/AdminDashboard/AdminAllCampaigns", { replace: true })
            : history("/UserDashboard/AllCampaigns", { replace: true });
        }, 3000);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  useEffect(() => {
    // console.log("UseEffect Called");
    // console.log("User: ", user);
    // console.log("Token: ", token);
    // console.log("UserData: ", userdata);
  }, [user, userdata, token]);

  const formSchema = Yup.object().shape({
    password: Yup.string().required("Password is mandatory"),

    email: Yup.string().email().required("Email is mandatory"),
  });
  const formOptions = { resolver: yupResolver(formSchema) };
  const { register, handleSubmit, reset, formState } = useForm(formOptions);
  const { errors } = formState;

  return (
    <div className="container mt-5">
      <form onSubmit={handleSubmit(onSubmit)}>
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
            Sign In
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
          history("/signup");
        }}
      >
        Not a User? Sign Up here
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
        Or Sign In With
      </p>
      <h1 className="text-start">
        <div>
          <FcGoogle />
          <BsFacebook style={{ margin: "1rem", color: "#242F9B" }} />
        </div>
      </h1>
    </div>
  );
}
