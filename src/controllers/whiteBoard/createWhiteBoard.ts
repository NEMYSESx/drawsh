import { Request, Response } from "express";
import { drawingModel, DrawingDocument } from "../../models/drawingModel.js";

const createWhiteBoard = async (req: Request, res: Response): Promise<void> => {
  try {
    const { userId, path } = req.body;
    const whiteBoard = new drawingModel({
      userId: userId,
      path: path,
      createdAt: new Date(),
    } as DrawingDocument);

    await whiteBoard.save();
    res.status(201).json({ message: "Whiteboard created successfully" });
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ error: "Failed to create whiteboard" });
  }
};

export default createWhiteBoard;
