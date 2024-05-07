import { Resend } from "resend";

// import nodemailer from "nodemailer";
// const resend = new Resend(process.env.RESEND_API_KEY);

// const transporter = nodemailer.createTransport({
//   host: "smtp.gmail.com",
//   port: 587,
//   secure: false,
//   auth: {
//     user: "",
//     pass: process.env.EMAIL_PASSWORD,
//   },
// });

export async function POST(request: Request) {
  try {
    const data = await request.json();
    // const response = await resend.emails.send({
    //   from: data.email,
    //   to: "info@newventurecp.com",
    //   subject: "New Venture Capitalists Contact Form",
    //   html: `
    //         <h1>New Venture Capitalists Contact Form</h1>
    //         <p>Name: ${data.name}</p>
    //         <p>Email: ${data.email}</p>
    //         <p>Message: ${data.message}</p>
    //       `,
    // });
    // use nodemailer to send email

    // const response = await transporter.sendMail({
    //   from: data.name,
    //   to: "ismailajizou1@gmail.com",
    //   subject: "New Venture Capitalists Contact Form",
    //   html: `
    //         <h1>New Venture Capitalists Contact Form</h1>
    //         <p>Name: ${data.name}</p>
    //         <p>Email: ${data.email}</p>
    //         <p>Message: ${data.message}</p>
    //       `,
    // });

    // return new Response(JSON.stringify(response), {
    //   headers: { "Content-Type": "application/json" },
    // });
    return new Response(
      JSON.stringify({
        message: "Message sent successfully",
        type: "success",
      }),
      {
        headers: { "Content-Type": "application/json" },
      }
    );
  } catch (err) {
    return new Response(
      JSON.stringify({ error: err, message: "An error occured" }),
      {
        headers: { "Content-Type": "application/json" },
        status: 500,
      }
    );
  }
}
