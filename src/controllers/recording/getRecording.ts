import { Request, Response } from "express";
import recordingModel from "../../models/recordingModel.js";

export const getRecording = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { whiteboardId } = req.params;

    const recording = await recordingModel
      .findOne({ _id: whiteboardId })
      .sort({ _id: -1 }); //we have sorted the recording in decending order to access the recodings easily

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
