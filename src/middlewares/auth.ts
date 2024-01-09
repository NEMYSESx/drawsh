import jwt from "jsonwebtoken";
import { userModel } from "../models/userModel.js";
import { Request, Response, NextFunction } from "express";

const Auth = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    let token;
    const { authorization } = req.headers;
    if (authorization && authorization.startsWith("Bearer")) {
      token = authorization.split(" ")[1];
      const { userId } = jwt.verify(token, process.env.JWT_SECRET_KEY);
      req.user = await userModel.findById(userId).select("-password");
      next();
    }
  } catch (err) {
    console.log(err.message);
    res.status(500).json({ error: "internal server error" });
  }
};

export default Auth;
