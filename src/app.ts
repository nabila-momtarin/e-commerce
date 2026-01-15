
import express from "express";
import { healthRoute } from "./routes/health.route";
import { productRoute } from "./routes/product.route";
//import cors from "cors";

export const app = express();

// Middleware to parse URL-encoded form data (like form-data in Postman)
app.use(express.urlencoded({ extended: true }));  // This handles form-data

//app.use(cors());
app.use(express.json());


//routes
//app.get('/', );
app.use('/health', healthRoute)
app.use('/product', productRoute)
