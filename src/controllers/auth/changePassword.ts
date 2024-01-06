import { Request, Response } from "express";
import bcrypt from "bcrypt";
import { userModel } from "../../models/userModel.js";

const changePassword = async (req: Request, res: Response): Promise<void> => {
  try {
    const { newPassword, newConfirmPassword } = req.body;
    if (newPassword && newConfirmPassword) {
      if (newPassword === newConfirmPassword) {
        const salt = await bcrypt.genSalt(10);
        const new_hashPassword = await bcrypt.hash(newPassword, salt);
        const user = (req as any).user;
        if (user) {
          const updatedUser = await userModel.findByIdAndUpdate(user._id, {
            $set: { password: new_hashPassword },
          });
          console.log(updatedUser);
        }
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
