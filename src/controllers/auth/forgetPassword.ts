import { Request, Response } from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { userModel } from "../../models/userModel.js";

const forgetPassword = async (req: Request, res: Response) => {
  const { newPassword, newConfirmPassword } = req.body;
  const { id, token } = req.params; //params(data) that comes through link
  const user = await userModel.findOne({ _id: id });
  const newSecret = user._id + process.env.JWT_SECRET_KEY;
  try {
    jwt.verify(token, newSecret);
    if (newPassword && newConfirmPassword) {
      if (newPassword !== newConfirmPassword) {
        res.send({ status: "error", message: "password donot match" });
      } else {
        const salt = await bcrypt.genSalt(10);
        const newHash_password = await bcrypt.hash(newPassword, salt);
        await userModel.findByIdAndUpdate(user._id, {
          $set: {
            password: newHash_password,
          },
        });
        res.send({
          status: "success",
          message: "password reset successfully",
        });
      }
    }
  } catch (err) {
    res.send({ status: "error", message: "token invalid" });
  }
};

export default forgetPassword;
