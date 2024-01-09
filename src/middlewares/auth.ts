import jwt, { JwtPayload } from "jsonwebtoken";
import { userModel } from "../models/userModel.js";
import { Request, Response, NextFunction } from "express";
interface DecodedToken {
  userId: string;
}
interface CustomRequest extends Request {
  user?: any;
}

const Auth = async (
  req: CustomRequest,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    let token;
    const { authorization } = req.headers;

    if (authorization && authorization.startsWith("Bearer")) {
      token = authorization.split(" ")[1];

      // Specify the expected type for the decoded token
      const decodedToken = jwt.verify(
        token,
        process.env.JWT_SECRET_KEY
      ) as DecodedToken;

      // Now TypeScript knows that userId exists on the decodedToken
      req.user = await userModel
        .findById(decodedToken.userId)
        .select("-password");
      next();
    }
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export default Auth;
