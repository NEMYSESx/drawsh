import { Request, Response } from "express";
import { drawingModel } from "../../models/drawingModel.js";

const delDrawing = async (req: Request, res: Response): Promise<void> => {
  try {
    const { drawingId } = req.params;
    const drawing = await drawingModel.findByIdAndDelete(drawingId);
    if (!drawing) {
      res.status(404).json({ error: "Drawing not found" });
      return;
    }
    res.status(200).json({ message: "Drawing deleted successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export default delDrawing;
