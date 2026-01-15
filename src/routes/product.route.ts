import express from "express";
import {createProductController} from "../controller/product.controller";

const router = express.Router();

router.post("/create", createProductController );

export { router as productRoute };

