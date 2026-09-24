"use client";

import { useForm } from "react-hook-form";

export default function ContactForm() {
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = async (data) => {
    const response = await fetch("/api/sendMail", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    const result = await response.json();
    if (result.success) {
      document.getElementById("toastMessage").innerText =
        "Email sent successfully!";
      const toastEl = new bootstrap.Toast(document.getElementById("liveToast"));
      document.getElementById("liveToast").classList.remove("text-bg-danger");
      document.getElementById("liveToast").classList.add("text-bg-success");
      toastEl.show();
      reset();
    } else {
      document.getElementById("toastMessage").innerText =
        "Failed to send email.";
      const toastEl = new bootstrap.Toast(document.getElementById("liveToast"));
      document.getElementById("liveToast").classList.remove("text-bg-success");
      document.getElementById("liveToast").classList.add("text-bg-danger");
      toastEl.show();
    }
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="row">
        <div className="col-xl-6 col-lg-12 col-md-6">
          <div className="contact-form-item mb-4">
            <input
              type="text"
              name="firstName"
              placeholder="First Name"
              required
              {...register("firstName")}
            />
            <i className="fa-regular fa-user"></i>
          </div>
        </div>
        <div className="col-xl-6 col-lg-12 col-md-6">
          <div className="contact-form-item mb-4">
            <input
              type="text"
              name="lastName"
              placeholder="Last Name"
              required
              {...register("lastName")}
            />
            <i className="fa-regular fa-user"></i>
          </div>
        </div>
        <div className="col-12">
          <div className="contact-form-item mb-4">
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
              {...register("email")}
            />
            <i className="fa-regular fa-envelope"></i>
          </div>
        </div>
        <div className="col-12">
          <div className="contact-form-item mb-4">
            <input
              type="text"
              name="phone"
              placeholder="Phone Number"
              required
              {...register("phone")}
            />
            <i className="fa-solid fa-phone"></i>
          </div>
        </div>
        <div className="col-12">
          <div className="contact-form-item mb-4">
            <textarea
              name="message"
              placeholder="Type your message"
              required
              {...register("message")}
            ></textarea>
          </div>
        </div>
        <div className="col-12">
          <div className="contact-form-item pt-10">
            <button type="submit">Submit the details</button>
          </div>
        </div>
      </div>
    </form>
  );
}
