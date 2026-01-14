import mongoose from "mongoose";
import { MONGO_URL } from "./env";

export const connectDB = async () => {
  try {
    // mongoose.connect(process.env.MONGO_URL)
    await mongoose.connect(MONGO_URL);
    console.log("MongoDB connected");
    console.log("Connected to db...");
  } catch (err) {
    console.error("MongoDB connection failed", err);
    process.exit(1);
  }
};
