import mongoose, { Document, Schema } from "mongoose";

interface Action {
  type: "draw" | "erase";
  x: number;
  y: number;
}

interface RecordingDocument extends Document {
  userId: Schema.Types.ObjectId;
  whiteBoardId: String;
  createdAt: Date;
  actions: Action[];
}

const recordingSchema = new Schema<RecordingDocument>({
  userId: { type: Schema.Types.ObjectId, ref: "User", required: true },
  whiteBoardId: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
  actions: { type: [{ type: Schema.Types.Mixed }], required: true },
});

const recordingModel = mongoose.model<RecordingDocument>(
  "Recording",
  recordingSchema
);

export default recordingModel;
