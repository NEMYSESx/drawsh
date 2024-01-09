import { Request, Response } from "express";
import { drawingModel } from "../../models/drawingModel.js";
import { whiteBoardModel } from "../../models/whiteBoardModel.js";

const delWhiteBoard = async (req: Request, res: Response): Promise<void> => {
  try {
    const { whiteBoardId } = req.params;
    await drawingModel.deleteMany({
      _id: whiteBoardId, //DELETE ALL THE DOCUMENT FROM DRAWING DATABASE WITH THIS ID I.E BASICALLY REMOVING ALL THE DRAWING
    });

    const board = await whiteBoardModel.findByIdAndDelete({
      _id: whiteBoardId,
    }); //deleteing the whiteboard

    if (!board) {
      res.status(404).json({ error: "board not found" });
    } else {
      res.status(200).json({ message: "Whiteboard deleted successfully" });
    }
  } catch (err) {
    console.log(err.message);
    res.status(500).json({ error: "failed to delete whiteboard" });
  }
};

export default delWhiteBoard;
