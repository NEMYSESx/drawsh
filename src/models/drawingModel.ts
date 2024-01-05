import mongoose, { Document, Schema } from "mongoose";

interface DrawingDocument extends Document {
  userId: Schema.Types.ObjectId;
  path: string[];
  createdAt: Date;
}

const drawingSchema = new Schema<DrawingDocument>({
  userId: { type: Schema.Types.ObjectId, ref: "User", required: true }, //ref: User means its refering to another Schema
  path: { type: [String], required: true },
  createdAt: { type: Date, default: Date.now },
});

const drawingModel = mongoose.model<DrawingDocument>("Drawing", drawingSchema);

export { drawingModel, DrawingDocument };
