import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    const data = await req.json();
    console.log("Received data:", data);
    const transporter = nodemailer.createTransport({
      host: "smtp.office365.com",
      port: 587,
      secure: false, // Use TLS
      auth: {
        user: process.env.SMTP_USERNAME,
        pass: process.env.SMTP_PASSWORD,
      },
    });

    const mailOptions = {
      // from: data.email,
      from: process.env.SMTP_USERNAME,
      to: process.env.MAIL_RECEIVER_ADDRESS,
      subject: `Newsletter`,
      text: `
        Email: ${data.email}
      `,
    };

    await transporter.sendMail(mailOptions);

    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch (error) {
    console.error(error);
    return new Response(JSON.stringify({ success: false }), { status: 500 });
  }
}
