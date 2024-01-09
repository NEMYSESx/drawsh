import { Request, Response } from "express";
import recordingModel from "../../models/recordingModel.js";

export const startRecording = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { whiteboardId } = req.params;

    const existingRecording = await recordingModel.findOne({
      whiteboardId,
      actions: [],
    });

    if (existingRecording) {
      res.status(400).json({ error: "Recording already in progress" });
      return;
    }

    const newRecording = new recordingModel({ whiteboardId, actions: [] });
    await newRecording.save();

    res.status(200).json({ message: "Recording started" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export default startRecording;
