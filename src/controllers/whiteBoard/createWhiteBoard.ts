import { Request, Response } from "express";
import {
  whiteBoardModel,
  WhiteBoardDocument,
} from "../../models/whiteBoardModel.js";

const createWhiteBoard = async (req: Request, res: Response): Promise<void> => {
  try {
    const { name } = req.body;
    const whiteBoard = new whiteBoardModel({
      name: name,
    } as WhiteBoardDocument);

    await whiteBoard.save();
    res.status(201).json({ message: "Whiteboard created successfully" });
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ error: "Failed to create whiteboard" });
  }
};

export default createWhiteBoard;
