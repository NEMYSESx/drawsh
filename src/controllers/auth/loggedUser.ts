import { Request, Response } from "express";
import { userModel } from "../../models/userModel.js";

const loggedUser = async (req: Request, res: Response): Promise<void> => {
  const user = (req as any).user;
  res.send({ user });
};

export default loggedUser;
