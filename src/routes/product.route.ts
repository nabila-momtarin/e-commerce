import express from "express";
import {createProductController, getAllProductController} from "../controller/product.controller";


const router = express.Router();

router.post("/create", createProductController );
router.get("/", getAllProductController);

export { router as productRoute };

