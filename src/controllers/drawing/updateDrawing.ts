import { Request, Response } from "express";
import { drawingModel } from "../../models/drawingModel.js";

const updateDrawing = async (req: Request, res: Response): Promise<void> => {
  try {
    const { whiteBoardId, drawingId } = req.params;
    const { path } = req.body;

    const updatedDrawing = await drawingModel.findByIdAndUpdate(
      { drawingId },
      {
        $set: {
          path: path,
        },
      }
    );
    if (!updatedDrawing) {
      res.status(404).json({ error: "Drawing not found" });
      return;
    }
    res.status(200).json({
      message: "Drawing updated successfully",
      drawing: updatedDrawing,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export default updateDrawing;
