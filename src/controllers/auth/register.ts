import { Request, Response } from "express";
import bcrypt from "bcrypt";
import userModel from "../../models/userModel.js";

const register = async (req: Request, res: Response): Promise<void> => {
  try {
    const { firstName, lastName, email, password } = req.body;
    const salt = await bcrypt.genSalt(10);
  } catch (err) {
    console.log(err.message);
  }
};

export default register;
