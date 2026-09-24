"use client";

import { useForm } from "react-hook-form";

export default function NewsLetter() {
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
    <form onSubmit={handleSubmit(onSubmit)} className="newsletter-form">
      <input
        type="email"
        placeholder="Your Email"
        className="form-control"
        name="email"
        {...register("email")}
      />
      <button type="submit">
        <i className="fa fa-paper-plane text-light"></i>
      </button>
    </form>
  );
}
