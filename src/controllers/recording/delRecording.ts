import { Request, Response } from "express";
import recordingModel from "../../models/recordingModel.js";

const delRecording = async (req: Request, res: Response): Promise<void> => {
  try {
    const { whiteBoardId, recordingId } = req.params;
    const recording = await recordingModel.findByIdAndDelete({
      _id: recordingId,
      whiteBoardId,
    });
  } catch (err) {
    console.log(err.message);
    res.status(500).json({ error: "internal server error" });
  }
};
export default delRecording;
