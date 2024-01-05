import { userModel, UserDocument } from "../../models/userModel.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import { Request, Response } from "express";
dotenv.config();

const Login = async (req: Request, res: Response): Promise<void> => {
  try {
    const { email, password } = req.body;
    if (email && password) {
      const user: UserDocument | null = await userModel.findOne({
        email: email,
      });
      if (user) {
        const isMatch: boolean = await bcrypt.compare(password, user.password);
        if (isMatch) {
          const token: string = jwt.sign(
            { userId: user._id },
            process.env.JWT_SECRET_KEY || "",
            { expiresIn: "10d" }
          );
          res.status(201).json({ message: "login success" });
          console.log(token);
        } else {
          res.status(404).json({ error: "credentials dont match" });
        }
      } else {
        res.status(404).json({ error: "credentials dont match" });
      }
    } else {
      res.status(400).json({ error: "credentials dont match" });
    }
  } catch (err) {
    console.log(err.message);
    res.send(500).json({ error: "failed to login" });
  }
};

export default Login;
