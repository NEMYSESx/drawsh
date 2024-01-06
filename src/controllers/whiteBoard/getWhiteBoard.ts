import { Request, Response } from "express";
import { drawingModel } from "../../models/drawingModel.js";

const getWhiteBoard = async (req: Request, res: Response): Promise<void> => {
  try {
    const board = await drawingModel.findOne({
      _id: req.params.whiteBoard,
    });
    if (!board) {
      res.status(404).json({ error: "board not found" });
    }
    res.status(200).json({ message: "Whiteboard came successfully" });
  } catch (err) {
    console.log(err.message);
    res.send(500).json({ error: "failed to get whiteBoard" });
  }
};

export default getWhiteBoard;
