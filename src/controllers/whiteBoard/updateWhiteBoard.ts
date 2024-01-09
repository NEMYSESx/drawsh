import { Request, Response } from "express";
import { whiteBoardModel } from "../../models/whiteBoardModel.js";
const updateWhiteBoard = async (req: Request, res: Response): Promise<void> => {
  try {
    const { whiteboardId } = req.params;
    const { name } = req.body;
    const updatedWhiteboard = await whiteBoardModel.findByIdAndUpdate(
      whiteboardId,
      {
        $set: {
          name: name,
        },
      }
    );

    if (!updatedWhiteboard) {
      res.status(404).json({ error: "Whiteboard not found" });
      return;
    }

    res.status(200).json({
      message: "Whiteboard updated successfully",
      whiteboard: updatedWhiteboard,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export default updateWhiteBoard;
