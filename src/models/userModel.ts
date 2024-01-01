import mongoose, { Document, Schema } from "mongoose";

interface UserDocument extends Document {
  name: string;
  email: string;
  password: string;
  tc: boolean;
}

const userSchema = new Schema<UserDocument>({
  //we used <UserDocumnet> instead of <T> because here <UserDocumnet> not helping us to define any predefined data type like string , number instead here its checking for interface data type the userSchema must be <UserDocumnet> type.
  name: { type: String, required: true, trim: true },
  email: { type: String, required: true, trim: true },
  password: { type: String, required: true, trim: true },
  tc: { type: Boolean, required: true },
});

const userModel = mongoose.model<UserDocument>("User", userSchema);

export default userModel;
