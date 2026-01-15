import { Router } from "express";
import { timeStamp } from "node:console";

const router = Router();

router.get('/', (req, res) => {
  console.log(`in /health`);
  res.json({
    status: "ok",
    message: "healthy",
    environment: process.env.NODE_ENV,
    timeStamp: new Date(),
  });
});

export { router as healthRoute };
