import { Request, Response, NextFunction } from "express";

export const corsHandler = (
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  // Enable CORS for all routes or specify allowed origins
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
  res.header("Access-Control-Allow-Headers", "Content-Type, Authorization");

  next();
};
