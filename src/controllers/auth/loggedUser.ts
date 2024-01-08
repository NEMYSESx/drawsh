import { Request, Response } from "express";
import userModel from "../../models/userModel.js";

const loggedUser = async (req: Request, res: Response): Promise<void> => {
  res.send({ user: req.user });
};
