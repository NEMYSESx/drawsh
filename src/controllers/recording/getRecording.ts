import { Request, Response } from "express";
import recordingModel from "../../models/recordingModel.js";

export const getRecording = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    // Validate whiteboardId and other parameters
    const { whiteboardId } = req.params;

    // Find the latest recording for the whiteboard
    const recording = await recordingModel
      .findOne({ whiteboardId })
      .sort({ _id: -1 });

    if (!recording) {
      res.status(404).json({ error: "No recording found" });
      return;
    }

    res.status(200).json(recording);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
