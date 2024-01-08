import mongoose, { Document, Schema } from "mongoose";

interface WhiteBoardDocument extends Document {
  name: string;
  whiteBoardId: Schema.Types.ObjectId;
}

const whiteBoardSchema = new Schema<WhiteBoardDocument>({
  name: { type: String, required: true },
  whiteBoardId: { type: String, requird: true, unique: true },
});

const whiteBoardModel = mongoose.model<WhiteBoardDocument>(
  "WhiteBoard",
  whiteBoardSchema
);

export { WhiteBoardDocument, whiteBoardModel };
