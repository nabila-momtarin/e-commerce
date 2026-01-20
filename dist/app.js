"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.app = void 0;
const express_1 = __importDefault(require("express"));
const health_route_1 = require("./routes/health.route");
const product_route_1 = require("./routes/product.route");
//import cors from "cors";
exports.app = (0, express_1.default)();
// Middleware to parse URL-encoded form data (like form-data in Postman)
//app.use(express.urlencoded({ extended: true }));  // This handles form-data
//app.use(cors());
exports.app.use(express_1.default.json());
//routes
//app.get('/', );
exports.app.use('/health', health_route_1.healthRoute);
exports.app.use('/product', product_route_1.productRoute);
