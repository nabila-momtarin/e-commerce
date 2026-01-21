"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
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
exports.ProductService = void 0;
const product_repository_1 = require("../repository/product.repository");
const tsyringe_1 = require("tsyringe");
let ProductService = class ProductService {
    //   private productRepository: ProductRepository;
    constructor(productRepository) {
        this.productRepository = productRepository;
        // this.productRepository = new ProductRepository();
    }
    createProduct(data) {
        return __awaiter(this, void 0, void 0, function* () {
            const product = yield this.productRepository.createProduct(data);
            return product;
        });
    }
};
exports.ProductService = ProductService;
exports.ProductService = ProductService = __decorate([
    (0, tsyringe_1.injectable)(),
    __metadata("design:paramtypes", [product_repository_1.ProductRepository])
], ProductService);
//roductModel: Model<IProduct>: যখন আপনি ডাটাবেস লাইব্রেরির
// (যেমন Mongoose) Model টাইপ ব্যবহার করেন,
// তখন টাইপস্ক্রিপ্ট বুঝতে পারে যে এই অবজেক্টটির ভেতরে
// .create(), .find(), .delete() মেথডগুলো আছে।
