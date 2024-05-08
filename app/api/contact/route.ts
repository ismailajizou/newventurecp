import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  host: "smtp.hostinger.com",
  port: 465,
  secure: true,
  auth: {
    user: process.env.SENDER_EMAIL,
    pass: process.env.SENDER_EMAIL_PASSWORD,
  },
});

export async function POST(request: Request) {
  try {
    const data = await request.json();

    const response = await transporter.sendMail({
      from: process.env.SENDER_EMAIL,
      to: process.env.RECEIVER_EMAIL,
      subject: "New Venture Capitalists Contact Form",
      html: `
            <h1>New Venture Capitalists Contact Form</h1>
            <p>Name: ${data.name}</p>
            <p>Email: ${data.email}</p>
            <p>Message: ${data.message}</p>
          `,
    });

    return new Response(JSON.stringify(response), {
      headers: { "Content-Type": "application/json" },
    });
  } catch (err) {
    console.log(err);
    return new Response(
      JSON.stringify({ error: err, message: "An error occured" }),
      {
        headers: { "Content-Type": "application/json" },
        status: 500,
      }
    );
  }
}
