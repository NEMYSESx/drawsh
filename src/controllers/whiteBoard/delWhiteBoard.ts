import { Request, Response } from "express";
import { drawingModel } from "../../models/drawingModel.js";

const delWhiteBoard = async (req: Request, res: Response): Promise<void> => {
  try {
    const board = await drawingModel.findOneAndDelete({
      _id: req.params.whiteBoard,
    });
    if (!board) {
      res.status(404).json({ error: "board not found" });
    } else {
      res.status(200).json({ message: "Whiteboard deleted successfully" });
    }
  } catch (err) {
    console.log(err.message);
    res.status(500).json({ err: "failed to delete whiteboard" });
  }
};

export default delWhiteBoard;
