import { Request, Response } from "express";
import { drawingModel } from "../../models/drawingModel.js";

const getDrawings = async (req: Request, res: Response): Promise<void> => {
  try {
    const drawings = await drawingModel.find({
      whiteboardId: req.params.whiteboardId,
    });

    res.status(200).json(drawings);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export default getDrawings;
