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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductService = void 0;
const product_model_1 = __importDefault(require("../model/product.model"));
class ProductService {
    constructor() { }
    createProduct(data) {
        return __awaiter(this, void 0, void 0, function* () {
            const product = yield product_model_1.default.create(data);
            return product;
        });
    }
}
exports.ProductService = ProductService;
//roductModel: Model<IProduct>: যখন আপনি ডাটাবেস লাইব্রেরির 
// (যেমন Mongoose) Model টাইপ ব্যবহার করেন, 
// তখন টাইপস্ক্রিপ্ট বুঝতে পারে যে এই অবজেক্টটির ভেতরে 
// .create(), .find(), .delete() মেথডগুলো আছে।
