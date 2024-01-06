import { Request, Response } from "express";
import bcrypt from "bcrypt";
import { userModel } from "../../models/userModel.js";

const changePassword = async (req: Request, res: Response): Promise<void> => {
  try {
    const { newPassword, newConfirmPassword } = req.body;
    if (newPassword && newConfirmPassword) {
      if (newPassword === newConfirmPassword) {
      } else {
        res
          .status(404)
          .json({ message: "password and confirm password donot match" });
      }
    } else {
      res.status(404).json({ message: "both fiels are required" });
    }
  } catch (err) {
    res.status(500).json({ error: "internal server error" });
  }
};
export default changePassword;
