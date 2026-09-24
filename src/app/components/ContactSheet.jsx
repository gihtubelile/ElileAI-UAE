"use client";

import { useState } from "react";
import { addRegistration } from "../action";

export default function ContactForm() {
  const [isPending, setIsPending] = useState(false);

  const handleRegister = async (e) => {
    e.preventDefault();
    setIsPending(true);
    const formData = new FormData(e.target);
    const res = await addRegistration(formData);
    const toastEl = document.getElementById("liveToast");
    const toastMsg = document.getElementById("toastMessage");
    if (res.successMessage) {
      toastEl.classList.remove("text-bg-danger");
      toastEl.classList.add("text-bg-success");
      toastMsg.textContent = res.successMessage;
    } else {
      toastEl.classList.remove("text-bg-success");
      toastEl.classList.add("text-bg-danger");
      toastMsg.textContent = res.errorMessage || "Something went wrong!";
    }
    // Show Bootstrap toast
    const toast = new bootstrap.Toast(toastEl);
    toast.show();

    setIsPending(false);
  };

  return (
    <form onSubmit={(e) => handleRegister(e)}>
      <div className="row">
        <div className="col-xl-6 col-lg-12 col-md-6">
          <div className="contact-form-item mb-4">
            <input
              type="text"
              id="firstName"
              name="firstName"
              placeholder="First Name"
              required
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
              id="lastName"
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
              id="email"
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
              id="phone"
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
              id="message"
            ></textarea>
          </div>
        </div>
        <div className="col-12">
          <div className="contact-form-item pt-10">
            <button type="submit" disabled={isPending}>
              {isPending ? "Sending..." : "Submit"}
            </button>
          </div>
        </div>
      </div>
    </form>
  );
}
