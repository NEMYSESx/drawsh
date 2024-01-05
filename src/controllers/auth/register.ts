import { Request, Response } from "express";
import bcrypt from "bcrypt";
import { userModel, UserDocument } from "../../models/userModel.js";

const Register = async (req: Request, res: Response): Promise<void> => {
  try {
    const { name, email, password, confirmPassword, tc } = req.body;
    const user: UserDocument | null = await userModel.findOne({ email: email });
    if (user) {
      res.status(402).json({ error: "email already exist" });
    } else {
      if (name && email && password && confirmPassword && tc) {
        if (password === confirmPassword) {
          let doc: UserDocument;
          const salt = await bcrypt.genSalt(10);
          const hashPassword = await bcrypt.hash(password, salt);
          doc = new userModel({
            name: name,
            email: email,
            password: hashPassword,
            tc: tc,
          });
          await doc.save();
          res.status(200).json({ message: "registration successfull" });
        } else {
          res
            .status(402)
            .json({ error: "password and confirm Password donot match" });
        }
      } else {
        res.status(201).json({ error: "All fields required" });
      }
    }
  } catch (err) {
    console.log(err.message);
  }
};

export default Register;
