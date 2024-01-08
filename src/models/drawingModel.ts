import mongoose, { Document, Schema } from "mongoose";

interface DrawingDocument extends Document {
  userId: Schema.Types.ObjectId;
  whiteBoardId: Schema.Types.ObjectId;
  drawingId: string;
  path: string[];
  createdAt: Date;
  updatedAt?: Date; //? means it is optional in typescript
}

const drawingSchema = new Schema<DrawingDocument>(
  {
    userId: { type: Schema.Types.ObjectId, ref: "User", required: true }, //ref: User means its refering to another Schema
    whiteBoardId: {
      type: Schema.Types.ObjectId,
      ref: "WhiteBoard",
      required: true,
    }, // we are putting whiteBoard ID here also couz every drawing is associated with a drawing lets say whiteBoard =123 is associated with drawing =1,2,3 but whiteboard = 456 is associated with drawing =4,5,6
    drawingId: { type: String, required: true, unique: true },
    path: { type: [String], required: true },
  },
  {
    timestamps: true, // Automatically manage createdAt and updatedAt
  }
);

const drawingModel = mongoose.model<DrawingDocument>("Drawing", drawingSchema);

export { drawingModel, DrawingDocument };
