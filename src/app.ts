
import express from "express";
import { healthRoute } from "./routes/health.route";
//import cors from "cors";

export const app = express();


//app.use(cors());
app.use(express.json());


//routes
//app.get('/', );
app.use('/health', healthRoute)
