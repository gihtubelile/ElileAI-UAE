"use server";
import nodemailer from "nodemailer";

const googleScriptURL =
  "https://script.google.com/macros/s/AKfycbw_LkGz253fFjCyKhbvHhUy23L9GenY2m8Ecx5ZGYGXK4-8N8lOdQS97zsBW-w2AtM5/exec";

const addToSheet = async (fields) => {
  const res = await fetch(googleScriptURL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ event: "Form Submission", ...fields }),
  });
  if (!res.ok) {
    throw new Error("Failed to add registration to google spreadsheet");
  }
};

const sendContactEmail = async ({ firstName, lastName, email, phone, message }) => {
  const transporter = nodemailer.createTransport({
    host: "smtp.office365.com",
    port: 587,
    secure: false, // Use TLS
    auth: {
      user: process.env.SMTP_USERNAME,
      pass: process.env.SMTP_PASSWORD,
    },
  });

  await transporter.sendMail({
    from: process.env.SMTP_USERNAME,
    to: process.env.CONTACT_RECEIVER_ADDRESS || process.env.MAIL_RECEIVER_ADDRESS,
    replyTo: email,
    subject: `Contact Form: ${firstName} ${lastName}`,
    text: `
      Name: ${firstName} ${lastName}
      Email: ${email}
      Phone: ${phone}

      Message:
      ${message}
    `,
  });
};

export const addRegistration = async (formData) => {
  const fields = {
    firstName: formData.get("firstName"),
    lastName: formData.get("lastName"),
    email: formData.get("email"),
    phone: formData.get("phone"),
    message: formData.get("message"),
  };

  // Email and sheet run independently so one failing doesn't lose the submission
  const [mail, sheet] = await Promise.allSettled([
    sendContactEmail(fields),
    addToSheet(fields),
  ]);
  if (mail.status === "rejected") console.error("Contact email failed:", mail.reason);
  if (sheet.status === "rejected") console.error("Sheet submission failed:", sheet.reason);

  if (mail.status === "rejected" && sheet.status === "rejected") {
    return {
      errorMessage: "Ooops! There was a problem with your registration!",
    };
  }
  return {
    successMessage:
      "Success! You have been successfully registered for our Form Submission",
  };
};
