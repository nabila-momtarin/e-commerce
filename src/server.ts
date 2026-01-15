// import express from "express";
import { MONGO_URL, PORT } from "./config/env";
import { connectDB } from "./config/db";
import { app } from "./app";
//const PORT = process.env.PORT || 3001;

const startServer = async () => {
  try {
    console.log("Starting DB connection...");
    await connectDB();
    console.log("Connected to db!");

    app.listen(PORT, () => {
      console.log(`Server is listening on port ${PORT}`);
      console.log(`MONGO URL: ${MONGO_URL}\n`);
    });
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
};

startServer();
