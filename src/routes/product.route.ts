import express from "express";
// import { ProductController, ProductController} from "../controller/product.controller";
import { ProductController } from "../controller/product.controller";


const router = express.Router();

const productController=new ProductController();

router.post("/create", productController.createProduct.bind(productController) );
// router.get("/", productController.getAllProducts.bind(productController));

export { router as productRoute };

