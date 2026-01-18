"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAllProductController = exports.createProductController = void 0;
//import Product from "../model/product.model";
const product_service_1 = require("../service/product.service");
const createProductController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        console.log("Entered in PRODUCT CONTROLLER");
        //  console.log("\n\n\n\n\n");
        console.log(req.body);
        // console.log("\n\n\n\n\n");
        const newProductC = yield (0, product_service_1.addProduct)(req.body);
        return res.json({
            status: 200,
            message: "Product created successfully",
            data: newProductC,
        });
    }
    catch (err) {
        console.log("Error in PRODUCT CONTROLLER: ", err);
        return res.status(500).json({
            status: 500,
            message: "Error creating product",
            error: err.message,
        });
    }
});
exports.createProductController = createProductController;
const getAllProductController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        console.log("Entered in PRODUCT CONTROLLER");
        console.log("\n\n\n\n\n");
        console.log(req.body);
        console.log("\n\n\n\n\n");
        const allProductC = yield (0, product_service_1.getAllProduct)();
        console.log("allProductC : CONTROLLER: ", allProductC);
        return res.json({
            status: 200,
            message: "Product fetched successfully",
            data: allProductC,
        });
    }
    catch (err) {
        console.log("Error in PRODUCT CONTROLLER: ", err);
        return res.status(500).json({
            status: 500,
            message: "Error getting all product",
            error: err.message,
        });
    }
});
exports.getAllProductController = getAllProductController;
