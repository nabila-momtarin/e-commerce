import express from "express";
import {createProductController, getAllProductController} from "../controller/product.controller";
import { get } from "node:http";

const router = express.Router();

router.post("/create", createProductController );
router.get("/", getAllProductController);

export { router as productRoute };

