import { Request, Response } from "express";
import recordingModel from "../../models/recordingModel.js";

export const stopRecording = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { whiteboardId } = req.params;

    const recording = await recordingModel.findOne({
      whiteboardId,
      actions: [],
    });

    if (!recording) {
      res.status(404).json({ error: "No recording in progress" });
      return;
    }

    res.status(200).json({ message: "Recording stopped" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export default stopRecording;
