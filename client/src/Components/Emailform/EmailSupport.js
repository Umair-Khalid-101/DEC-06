import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import Navbar from "../Navbar";
import { toast, ToastContainer } from "react-toastify";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
export default function EmailSupport() {
  const formSchema = Yup.object().shape({
    name: Yup.string().required("Name is mandatory"),

    email: Yup.string().email().required("Email is mendatory"),
    message: Yup.string().required("Message is mendatory"),
  });
  const formOptions = { resolver: yupResolver(formSchema) };
  const { register, handleSubmit, reset, formState } = useForm(formOptions);
  const { errors } = formState;
  const form = useRef();
  const sendEmail = (data, e) => {
    emailjs
      .send("service_7hicvoo", "template_cbtq937", data, "4ZSVabSjzF4ZI9vfG")
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    toast.success("Email sent successfully", {
      position: toast.POSITION.TOP_LEFT,
    });
  };
  const onSubmit = (data) => {
    sendEmail(data);
    reset();
  };

  return (
    <div>
      <ToastContainer />
      <Navbar />
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: "100vw",
          height: "50vh",
        }}
      >
        <div className="container col-6">
          <form ref={form} onSubmit={handleSubmit(onSubmit)}>
            <div className="form-group">
              <label
                style={{
                  color: "#242F9B",
                  fontWeight: "bold",
                  marginTop: "40vh",
                }}
              >
                Name
              </label>
              <input
                type="text"
                name="name"
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
                  marginTop: "30px",
                }}
              >
                Email
              </label>

              <input
                type="email"
                name="email"
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
                  marginTop: "30px",
                }}
              >
                Message
              </label>
              <textarea
                {...register("message")}
                className={`form-control ${errors.message ? "is-invalid" : ""}`}
                name="message"
                style={{ height: "40vh" }}
              />
              <div className="invalid-feedback">{errors.message?.message}</div>
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <div
                style={{
                  width: "50%",
                  height: "10%",
                  backgroundColor: "#242F9B",
                  borderRadius: "50px",
                  marginTop: "30px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
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
                  Send Email
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
