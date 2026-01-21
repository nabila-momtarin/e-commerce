import express from "express";
// import { ProductController, ProductController} from "../controller/product.controller";
import { ProductController } from "../controller/product.controller";
import { container } from "tsyringe";

const router = express.Router();

// const productController=new ProductController();
const productController = container.resolve(ProductController);

router.post("/create", productController.createProduct.bind(productController) );
// router.get("/", productController.getAllProducts.bind(productController));

export { router as productRoute };

