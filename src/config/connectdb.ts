import mongoose from "mongoose";

const connectdb = async (DATABASE_URI: string) => {
  try {
    const DB_OPTIONS = {
      dbName: "maindb",
    };

    await mongoose.connect(DATABASE_URI, DB_OPTIONS);
  } catch (err) {
    console.log(err.message);
  }
};

export default connectdb;
