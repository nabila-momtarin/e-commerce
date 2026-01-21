"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.productRoute = void 0;
const express_1 = __importDefault(require("express"));
// import { ProductController, ProductController} from "../controller/product.controller";
const product_controller_1 = require("../controller/product.controller");
const tsyringe_1 = require("tsyringe");
const router = express_1.default.Router();
exports.productRoute = router;
// const productController=new ProductController();
const productController = tsyringe_1.container.resolve(product_controller_1.ProductController);
router.post("/create", productController.createProduct.bind(productController));
