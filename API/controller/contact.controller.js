import { transporter } from "../config/mailer.js";

export const sendContactMail = async (req, res) => {
  try {
    const { name, email, message } = req.body;

    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER,
      subject: "New Contact Message",
      text: `
        Name: ${name}
        Email: ${email}
        Message: ${message}
      `,
    });

    res.status(200).json({
      success: true,
      message: "Mail Sent ✅",
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "Error ❌",
    });
  }
};