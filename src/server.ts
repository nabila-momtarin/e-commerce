// import express from "express";
import { PORT } from "./config/env";
import { connectDB } from "./config/db";
import { app } from "./app";
//const PORT = process.env.PORT || 3001;

const startServer = async () => {
  try {
    await connectDB();
    console.log("Connected to db!");

    app.listen(PORT, () => {
      console.log(`Server is listening on port ${PORT}`);
    });
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
};


startServer();