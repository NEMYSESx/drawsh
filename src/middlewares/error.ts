import { Request, Response, NextFunction } from "express";

export const errorHandler = (
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  console.error(err.stack);

  // Respond with a 500 Internal Server Error status
  res.status(500).json({ error: "Internal Server Error" });
};
