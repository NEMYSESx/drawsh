import { Request, Response } from "express";
import { drawingModel, DrawingDocument } from "../models/drawingModel.js";

class Whiteboard {
  userId: string;
  path: string;
  createdAt: Date;

  constructor(props: { userId: string; path: string; createdAt: Date }) {
    this.userId = props.userId;
    this.path = props.path;
    this.createdAt = props.createdAt;
  }

  static async createWhiteBoard(req: Request, res: Response): Promise<void> {
    try {
      const body = req.body;
      const whiteBoard = new drawingModel({
        userId: body.userId,
        path: body.path,
        createdAt: new Date(),
      } as DrawingDocument);

      await whiteBoard.save();
      res.status(201).json({ message: "Whiteboard created successfully" });
    } catch (err) {
      console.error(err.message);
      res.status(500).json({ error: "Failed to create whiteboard" });
    }
  }

  static async getWhiteBoard(req: Request, res: Response): Promise<void> {
    try {
      const board = await drawingModel.findOne({
        req: Request.params.whiteBoard,
      });
      if (!board) {
        res.status(404).json({ error: "board not found" });
      }
      res.status(200).json({ message: "Whiteboard came successfully" });
    } catch (err) {
      console.log(err.message);
      res.send(500).json({ error: "failed to get whiteBoard" });
    }
  }

  static async delWhiteBoard(req: Request, res: Response): Promise<void> {
    try {
      const board = await drawingModel.findOneAndDelete({
        req: Request.params.whiteBoard,
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
  }
}

export default Whiteboard;
