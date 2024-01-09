import { Request, Response } from "express";
import { drawingModel, DrawingDocument } from "../../models/drawingModel.js";

export const addDrawing = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { path } = req.body;
    const newDrawing = new drawingModel({
      path: path,
    } as DrawingDocument);
    await newDrawing.save();
    res.status(201).json({ message: "Drawing added successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
