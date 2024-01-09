import { Request, Response } from "express";
import { drawingModel } from "../../models/drawingModel.js";

const getDrawings = async (req: Request, res: Response): Promise<void> => {
  try {
    const { whiteboardId } = req.params;
    const drawings = await drawingModel.find({
      whiteboardId: whiteboardId,
    });
    res.status(201).json(drawings);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export default getDrawings;
