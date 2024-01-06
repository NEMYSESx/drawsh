import { Request, Response } from "express";
import jwt from "jsonwebtoken";
import { userModel } from "../../models/userModel.js";
import transporter from "../../config/emailconfig.js";

const forgetPassword_email = async (req: Request, res: Response) => {
  const { email } = req.body;
  if (email) {
    const user = await userModel.findOne({ email: email });
    if (user) {
      const secret = user._id + process.env.JWT_SECRET_KEY;
      const token = jwt.sign({ userId: user._id }, secret, {
        expiresIn: "15m",
      });
      const link = `http://localhost:3000/api/user/reset/${user._id}/${token}`; //this link will be sent to email and on clicking the link we get forwaded to the page where we can reset our password
      let info = await transporter.sendMail({
        from: process.env.EMAIL_FROM,
        to: user.email,
        subject: "click da link to reset the password",
        html: `<a href=${link}>click da damm link</a>`,
      });
      res.send({
        status: "success",
        message: "password send successfully to your email",
        info: info,
      });
      try {
      } catch (err) {
        res.send({ status: "error", message: "error" });
      }
    } else {
      res.send({ status: "error", message: "email not registered" });
    }
  } else {
    res.send({ status: "error", message: "please enter the email" });
  }
};
